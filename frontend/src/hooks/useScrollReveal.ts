// =============================================================
// hooks/useScrollReveal.ts
//
// Hook personalizado que usa IntersectionObserver para detectar
// quando um elemento entra na viewport e adiciona a classe
// "is-visible", disparando a animação de entrada definida no CSS.
//
// USO:
//   const ref = useScrollReveal<HTMLDivElement>();
//   <div ref={ref} className="reveal">Conteúdo</div>
//
// O CSS em globals.css já define as classes .reveal e .is-visible
// =============================================================

import { useEffect, useRef, useCallback } from 'react';
import type { ScrollRevealOptions } from '../types';

/**
 * Hook que retorna uma ref a ser aplicada no elemento que deve
 * animar ao entrar na viewport.
 *
 * @param options - Configurações opcionais do observer
 * @returns React ref tipada para o elemento HTML desejado
 */
function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  // Valores padrão das opções
  const {
    threshold = 0.15,  // 15% do elemento visível dispara a animação
    umaVez = true,     // Por padrão, anima só na primeira vez
    delay = 0,         // Sem atraso adicional por padrão
  } = options;

  // Ref que será aplicada ao elemento no JSX
  const ref = useRef<T>(null);

  // Callback para o IntersectionObserver
  const handleIntersect: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aplica a classe com o delay configurado
          const el = entry.target as HTMLElement;
          setTimeout(() => {
            el.classList.add('is-visible');
          }, delay);

          // Se deve animar só uma vez, desconecta o observer
          if (umaVez) {
            observer.unobserve(el);
          }
        } else if (!umaVez) {
          // Se pode reanimar, remove a classe ao sair da viewport
          (entry.target as HTMLElement).classList.remove('is-visible');
        }
      });
    },
    [delay, umaVez]
  );

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    // Cria o observer com as opções configuradas
    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin: '0px 0px -50px 0px', // Dispara um pouco antes do fim
    });

    observer.observe(elemento);

    // Cleanup: desconecta o observer quando o componente desmonta
    return () => {
      observer.unobserve(elemento);
      observer.disconnect();
    };
  }, [threshold, handleIntersect]);

  return ref;
}

export default useScrollReveal;
