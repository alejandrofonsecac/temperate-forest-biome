// =============================================================
// hooks/useCarousel.ts
//
// Hook que encapsula toda a lógica do carrossel:
// - Índice atual
// - Navegação manual (ir para, próximo, anterior)
// - Autoplay com pausa ao hover
// - Loop circular
//
// USO:
//   const carousel = useCarousel(5, { autoplay: true, intervalo: 4000 });
//   carousel.itemAtual → índice atual
//   carousel.proximo() → avança um item
//   carousel.anterior() → volta um item
//   carousel.irPara(2) → vai para o índice 2
//   carousel.pausar() / carousel.retomar() → controle do autoplay
// =============================================================

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCarouselOptions {
  /** Ativar troca automática de slides? (padrão: true) */
  autoplay?: boolean;
  /** Intervalo em ms entre trocas automáticas (padrão: 4500ms) */
  intervalo?: number;
}

interface UseCarouselReturn {
  itemAtual: number;
  total: number;
  irPara: (index: number) => void;
  proximo: () => void;
  anterior: () => void;
  pausar: () => void;
  retomar: () => void;
  estaPausado: boolean;
}

/**
 * Gerencia o estado e comportamento de um carrossel.
 *
 * @param total - Número total de itens no carrossel
 * @param options - Configurações de autoplay
 */
function useCarousel(
  total: number,
  options: UseCarouselOptions = {}
): UseCarouselReturn {
  const { autoplay = true, intervalo = 4500 } = options;

  // Índice do item atualmente exibido
  const [itemAtual, setItemAtual] = useState(0);

  // Estado de pausa (hover ou interação manual pausa o autoplay)
  const [estaPausado, setEstaPausado] = useState(false);

  // Ref do intervalo para poder cancelar quando necessário
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ----------------------------------------------------------
  // FUNÇÕES DE NAVEGAÇÃO
  // ----------------------------------------------------------

  /** Vai direto para um índice específico */
  const irPara = useCallback((index: number) => {
    // Garante que o índice está dentro dos limites (loop circular)
    const normalizado = ((index % total) + total) % total;
    setItemAtual(normalizado);
  }, [total]);

  /** Avança para o próximo item (circular) */
  const proximo = useCallback(() => {
    setItemAtual((atual) => (atual + 1) % total);
  }, [total]);

  /** Volta para o item anterior (circular) */
  const anterior = useCallback(() => {
    setItemAtual((atual) => (atual - 1 + total) % total);
  }, [total]);

  /** Pausa o autoplay (chamado no hover) */
  const pausar = useCallback(() => setEstaPausado(true), []);

  /** Retoma o autoplay (chamado quando o mouse sai) */
  const retomar = useCallback(() => setEstaPausado(false), []);

  // ----------------------------------------------------------
  // AUTOPLAY
  // Roda automaticamente enquanto não estiver pausado
  // ----------------------------------------------------------
  useEffect(() => {
    if (!autoplay || estaPausado) {
      // Cancela o intervalo se autoplay desligado ou pausado
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Inicia o autoplay
    intervalRef.current = setInterval(() => {
      proximo();
    }, intervalo);

    // Cleanup ao desmontar ou antes de re-rodar o efeito
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, estaPausado, intervalo, proximo]);

  return {
    itemAtual,
    total,
    irPara,
    proximo,
    anterior,
    pausar,
    retomar,
    estaPausado,
  };
}

export default useCarousel;
