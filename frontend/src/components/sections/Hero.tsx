// =============================================================
// components/sections/Hero.tsx
//
// Seção inicial do site. Contém:
// - Imagem de fundo de floresta outonal (foto real)
// - Título principal com animação de entrada via Anime.js
// - Texto introdutório (máximo 10 linhas conforme o trabalho)
// - Mapa de localização mundial
// - Botão de scroll para a próxima seção
// =============================================================

import { useEffect, useRef } from 'react';
import { ChevronDown, MapPin, Thermometer, CloudRain } from 'lucide-react';
import anime from 'animejs';

function Hero() {
  // Refs para animar com Anime.js
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // ----------------------------------------------------------
  // ANIMAÇÃO DE ENTRADA com Anime.js
  // Stagger sequencial: título → subtítulo → badges → texto → CTA
  // ----------------------------------------------------------
  useEffect(() => {
    // Timeline: encadeia as animações em sequência
    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    tl
      // 1. Subtítulo desliza de baixo
      .add({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
        delay: 400,
      })
      // 2. Título principal — letras aparecem em stagger
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 900,
      }, '-=300') // Começa 300ms antes do anterior terminar
      // 3. Badges de estatísticas
      .add({
        targets: badgesRef.current ? badgesRef.current.children : [],
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(120), // Cada badge com 120ms de atraso
      }, '-=400')
      // 4. Texto introdutório
      .add({
        targets: textRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
      }, '-=300')
      // 5. Botão de CTA
      .add({
        targets: ctaRef.current,
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 600,
      }, '-=200');

    // Cleanup ao desmontar
    return () => tl.pause();
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* --------------------------------------------------------
          FUNDO: Floresta de bordo no outono canadense
          Foto real de alta qualidade (Unsplash)
      -------------------------------------------------------- */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop"
          alt="Floresta sazonal temperada no outono — folhas alaranjadas e avermelhadas"
          className="w-full h-full object-cover object-center"
        />

        {/* Camadas de gradiente para criar profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-sombra-950/60 via-sombra-950/30 to-sombra-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-sombra-950/70 via-sombra-950/20 to-transparent" />

        {/* Overlay de partículas de folhas — elemento decorativo SVG */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          {/* Folhas decorativas posicionadas aleatoriamente */}
          {['10%', '25%', '60%', '80%', '45%'].map((left, i) => (
            <div
              key={i}
              className="absolute animate-leaf-sway"
              style={{
                left,
                top: `${15 + i * 15}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-outono-400">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2h-.01z"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------------
          CONTEÚDO PRINCIPAL
      -------------------------------------------------------- */}
      <div className="container-site relative z-10 py-20">
        <div className="max-w-3xl">

          {/* Subtítulo / categoria */}
          <p
            ref={subtitleRef}
            className="section-subtitle mb-4 opacity-0"
          >
            Museu Virtual dos Biomas do Mundo
          </p>

          {/* Título principal */}
          <h1
            ref={titleRef}
            className="font-display text-display-xl text-neve font-semibold leading-tight mb-6 opacity-0"
          >
            Floresta{' '}
            <span className="text-gradient-outono">Sazonal</span>
            <br />
            Temperada
          </h1>

          {/* Badges de informações rápidas */}
          <div
            ref={badgesRef}
            className="flex flex-wrap gap-3 mb-8"
          >
            {[
              { icon: <MapPin size={14} />, texto: 'Hemisfério Norte e Sul' },
              { icon: <Thermometer size={14} />, texto: '-30°C a 30°C' },
              { icon: <CloudRain size={14} />, texto: '750–1500 mm / ano' },
            ].map(({ icon, texto }) => (
              <div
                key={texto}
                className="flex items-center gap-2 glass rounded-pill px-4 py-2 text-sm font-body text-floresta-200 opacity-0"
              >
                <span className="text-outono-400">{icon}</span>
                {texto}
              </div>
            ))}
          </div>

          {/* Texto introdutório — máximo 10 linhas conforme orientação do trabalho */}
          <div
            ref={textRef}
            className="max-w-2xl opacity-0"
          >
            <p className="font-body text-floresta-100 text-base md:text-lg leading-relaxed">
              A Floresta Sazonal Temperada é um dos biomas mais dinâmicos do planeta,
              marcado pela transformação espetacular das estações do ano. Presente
              principalmente na Europa, leste da América do Norte e partes da Ásia,
              esse ecossistema distingue-se pela queda anual das folhas no outono —
              um espetáculo de cores que vai do amarelo ao vermelho intenso.
            </p>
            <p className="font-body text-floresta-200 text-sm md:text-base leading-relaxed mt-4">
              Com invernos rigorosos, verões quentes e chuvas bem distribuídas ao longo do
              ano, a floresta temperada desenvolveu estratégias de vida únicas, abrigando
              uma biodiversidade rica e interdependente, ameaçada pela expansão humana.
            </p>
          </div>

          {/* CTA — scroll para próxima seção */}
          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4 opacity-0">
            <a href="#caracterizacao" className="btn-primary">
              Explorar o Bioma
              <ChevronDown size={16} />
            </a>
            <a href="#biodiversidade" className="btn-outline">
              Ver Biodiversidade
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll animado no rodapé da hero */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-floresta-400 animate-pulse-slow">
        <span className="font-body text-xs uppercase tracking-widest">Rolar</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

export default Hero;
