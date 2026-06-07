// =============================================================
// components/ui/DotIndicator.tsx
//
// As bolinhas de navegação do carrossel.
// O item ativo tem formato de "cápsula/cilindro" em laranja.
// Os demais são bolinhas menores e esmaecidas.
// =============================================================

import clsx from 'clsx';

interface DotIndicatorProps {
  total: number;        // Número total de itens
  ativo: number;        // Índice do item atualmente ativo
  onSelect: (i: number) => void; // Callback ao clicar numa bolinha
}

function DotIndicator({ total, ativo, onSelect }: DotIndicatorProps) {
  return (
    <div
      className="flex items-center justify-center gap-2"
      role="tablist"
      aria-label="Navegação do carrossel"
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === ativo}
          aria-label={`Item ${i + 1}`}
          onClick={() => onSelect(i)}
          className={clsx(
            // Transição suave de tamanho e cor
            'transition-all duration-400 ease-out rounded-pill',
            i === ativo
              // Ativo: formato de cápsula laranja
              ? 'w-8 h-3 bg-outono-600 shadow-outono'
              // Inativo: bolinha pequena esmaecida
              : 'w-3 h-3 bg-floresta-600 hover:bg-floresta-400 hover:scale-110',
          )}
        />
      ))}
    </div>
  );
}

export default DotIndicator;
