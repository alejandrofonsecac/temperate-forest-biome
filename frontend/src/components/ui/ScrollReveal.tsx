// =============================================================
// components/ui/ScrollReveal.tsx
//
// Componente wrapper que aplica animação de entrada ao scroll.
// Envolve qualquer conteúdo e adiciona as classes de animação.
//
// USO:
//   <ScrollReveal className="reveal">
//     <MeuComponente />
//   </ScrollReveal>
//
//   <ScrollReveal className="reveal-left" delay={200}>
//     <MeuComponente />
//   </ScrollReveal>
// =============================================================

import { type ReactNode } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import clsx from 'clsx';
import type { ScrollRevealOptions } from '../../types';

interface ScrollRevealProps extends ScrollRevealOptions {
  children: ReactNode;
  /** Classes CSS adicionais (ex: 'reveal', 'reveal-left', 'reveal-right') */
  className?: string;
  /** Tag HTML a renderizar (padrão: 'div') */
  as?: keyof JSX.IntrinsicElements;
}

function ScrollReveal({
  children,
  className = 'reveal',
  as: Tag = 'div',
  threshold,
  umaVez,
  delay,
}: ScrollRevealProps) {
  // Obtém a ref do hook que gerencia o IntersectionObserver
  const ref = useScrollReveal<HTMLDivElement>({ threshold, umaVez, delay });

  return (
    // @ts-expect-error — Tag dinâmica aceita qualquer elemento HTML válido
    <Tag ref={ref} className={clsx(className)}>
      {children}
    </Tag>
  );
}

export default ScrollReveal;
