// =============================================================
// components/ui/Carousel.tsx
//
// Carrossel de espécies (fauna ou flora) com:
// - Slide único visível por vez
// - Bolinhas de navegação (DotIndicator)
// - Botões de anterior/próximo
// - Autoplay com pausa ao hover
// - Animação de transição entre slides
// - Link para galeria completa abaixo
// =============================================================

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useCarousel from '../../hooks/useCarousel';
import DotIndicator from './DotIndicator';
import { BadgeEspecie, BadgeStatus } from './Badge';
import type { EspecieFauna, EspecieFlora } from '../../types';

type EspecieCard = EspecieFauna | EspecieFlora;

interface CarouselProps {
  itens: EspecieCard[];
  /** Link da página de galeria completa */
  linkGaleria: string;
  /** Texto do botão de link para galeria */
  labelGaleria: string;
}

function Carousel({ itens, linkGaleria, labelGaleria }: CarouselProps) {
  const carousel = useCarousel(itens.length);

  // Controla a direção da animação (para esquerda ou direita)
  const [direcao, setDirecao] = useState<'left' | 'right'>('right');
  // Controla a animação de transição entre slides
  const [animando, setAnimando] = useState(false);
  // Índice exibido na tela (pode diferir do itemAtual durante a animação)
  const [indiceExibido, setIndiceExibido] = useState(0);
  const prevIndex = useRef(0);

  // ----------------------------------------------------------
  // Monitora mudanças no itemAtual e dispara a animação
  // ----------------------------------------------------------
  useEffect(() => {
    if (carousel.itemAtual === indiceExibido) return;

    // Determina a direção do slide
    const avancando =
      carousel.itemAtual > indiceExibido ||
      (indiceExibido === itens.length - 1 && carousel.itemAtual === 0);

    setDirecao(avancando ? 'right' : 'left');
    setAnimando(true);

    // Após a animação de saída, troca o slide exibido
    const timeout = setTimeout(() => {
      prevIndex.current = indiceExibido;
      setIndiceExibido(carousel.itemAtual);
      setAnimando(false);
    }, 350); // Deve ser <= duração da transição CSS

    return () => clearTimeout(timeout);
  }, [carousel.itemAtual, indiceExibido, itens.length]);

  const especie = itens[indiceExibido];

  // Wrappers para navegação que também definem a direção
  const irProximo = () => {
    setDirecao('right');
    carousel.proximo();
  };
  const irAnterior = () => {
    setDirecao('left');
    carousel.anterior();
  };

  return (
    <div
      className="relative"
      onMouseEnter={carousel.pausar}
      onMouseLeave={carousel.retomar}
    >
      {/* --------------------------------------------------------
          CARD DO SLIDE
      -------------------------------------------------------- */}
      <div className="relative overflow-hidden rounded-3xl bg-floresta-900 shadow-card min-h-[520px] md:min-h-[480px]">

        {/* Imagem de fundo */}
        <div
          className={clsx(
            'absolute inset-0 transition-all duration-350 ease-out',
            animando && direcao === 'right' && '-translate-x-8 opacity-0',
            animando && direcao === 'left' && 'translate-x-8 opacity-0',
            !animando && 'translate-x-0 opacity-100'
          )}
        >
          <img
            src={especie.imagem}
            alt={especie.nomePopular}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Gradiente sobre a imagem para legibilidade do texto */}
          <div className="absolute inset-0 bg-overlay-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-sombra-950/80 via-transparent to-transparent" />
        </div>

        {/* Conteúdo textual sobreposto à imagem */}
        <div
          className={clsx(
            'relative z-10 p-6 md:p-8 flex flex-col justify-end h-full min-h-[520px] md:min-h-[480px]',
            'transition-all duration-350 ease-out',
            animando && direcao === 'right' && '-translate-x-4 opacity-0',
            animando && direcao === 'left' && 'translate-x-4 opacity-0',
            !animando && 'translate-x-0 opacity-100'
          )}
        >
          {/* Grupo/Dieta */}
          <div className="flex flex-wrap gap-2 mb-3">
            {'grupoAnimal' in especie && (
              <span className="badge bg-floresta-800/60 text-floresta-300 border border-floresta-600/30 text-xs">
                {(especie as EspecieFauna).grupoAnimal}
              </span>
            )}
            {'grupoVegetal' in especie && (
              <span className="badge bg-floresta-800/60 text-floresta-300 border border-floresta-600/30 text-xs">
                {(especie as EspecieFlora).grupoVegetal}
              </span>
            )}
            <BadgeEspecie isNativa={especie.isNativa} isEndemica={especie.isEndemica} />
            <BadgeStatus status={especie.statusConservacao} />
          </div>

          {/* Nome popular e científico */}
          <h3 className="font-display text-2xl md:text-3xl text-neve font-semibold leading-tight mb-1">
            {especie.nomePopular}
          </h3>
          <p className="font-body text-floresta-300 text-sm italic mb-4">
            {especie.nomeCientifico}
          </p>

          {/* Adaptação — truncada */}
          <p className="font-body text-floresta-200 text-sm leading-relaxed line-clamp-3 mb-4 max-w-xl">
            <span className="text-outono-400 font-medium not-italic">Adaptação: </span>
            {especie.adaptacao}
          </p>

          {/* Característica ecológica */}
          <p className="font-body text-floresta-300 text-xs leading-relaxed line-clamp-2 max-w-xl">
            <span className="text-floresta-400 font-medium">Papel ecológico: </span>
            {especie.caracteristicaEcologica}
          </p>

          {/* Crédito da foto */}
          {especie.imagemCredito && (
            <p className="mt-3 font-body text-floresta-600 text-xs">
              📷 {especie.imagemCredito}
            </p>
          )}
        </div>

        {/* Botões anterior / próximo */}
        <button
          onClick={irAnterior}
          aria-label="Item anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full glass hover:bg-floresta-700/60 text-neve transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={irProximo}
          aria-label="Próximo item"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full glass hover:bg-floresta-700/60 text-neve transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>

        {/* Contador de slides */}
        <div className="absolute top-4 right-4 z-20 glass rounded-pill px-3 py-1 font-body text-xs text-floresta-300">
          {indiceExibido + 1} / {itens.length}
        </div>
      </div>

      {/* --------------------------------------------------------
          BOLINHAS DE NAVEGAÇÃO
      -------------------------------------------------------- */}
      <div className="mt-5 flex flex-col items-center gap-4">
        <DotIndicator
          total={itens.length}
          ativo={indiceExibido}
          onSelect={(i) => {
            setDirecao(i > indiceExibido ? 'right' : 'left');
            carousel.irPara(i);
          }}
        />

        {/* Link para galeria completa */}
        <Link
          to={linkGaleria}
          className="btn-outline flex items-center gap-2 text-xs mt-1"
        >
          <ExternalLink size={14} />
          {labelGaleria}
        </Link>
      </div>
    </div>
  );
}

export default Carousel;
