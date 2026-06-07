// =============================================================
// components/ui/Badge.tsx
//
// Pequena etiqueta visual para identificar espécies como
// "Nativa", "Endêmica" ou status de conservação da IUCN.
// =============================================================

import clsx from 'clsx';
import type { StatusConservacao } from '../../types';

// ----------------------------------------------------------
// Badge Nativa / Endêmica
// ----------------------------------------------------------
interface BadgeEspecieProps {
  isNativa: boolean;
  isEndemica: boolean;
}

export function BadgeEspecie({ isNativa, isEndemica }: BadgeEspecieProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {isEndemica && (
        <span className="badge-endemica">
          <span className="w-1.5 h-1.5 rounded-full bg-outono-400" />
          Endêmica
        </span>
      )}
      {isNativa && !isEndemica && (
        <span className="badge-nativa">
          <span className="w-1.5 h-1.5 rounded-full bg-floresta-400" />
          Nativa
        </span>
      )}
    </div>
  );
}

// ----------------------------------------------------------
// Badge de Status de Conservação (IUCN)
// ----------------------------------------------------------
interface BadgeStatusProps {
  status?: StatusConservacao;
}

// Mapeamento de status → cor e descrição
const statusConfig: Record<StatusConservacao, { cor: string; label: string; descricao: string }> = {
  LC: { cor: 'bg-emerald-700/20 text-emerald-400 border-emerald-700/30', label: 'LC', descricao: 'Pouco Preocupante' },
  NT: { cor: 'bg-yellow-700/20 text-yellow-400 border-yellow-700/30',   label: 'NT', descricao: 'Quase Ameaçado' },
  VU: { cor: 'bg-amber-700/20 text-amber-400 border-amber-700/30',     label: 'VU', descricao: 'Vulnerável' },
  EN: { cor: 'bg-orange-700/20 text-orange-400 border-orange-700/30',   label: 'EN', descricao: 'Em Perigo' },
  CR: { cor: 'bg-red-700/20 text-red-400 border-red-700/30',           label: 'CR', descricao: 'Criticamente em Perigo' },
  EW: { cor: 'bg-purple-700/20 text-purple-400 border-purple-700/30',   label: 'EW', descricao: 'Extinto na Natureza' },
  EX: { cor: 'bg-gray-700/20 text-gray-400 border-gray-700/30',        label: 'EX', descricao: 'Extinto' },
};

export function BadgeStatus({ status }: BadgeStatusProps) {
  if (!status) return null;
  const config = statusConfig[status];

  return (
    <span
      className={clsx('badge border text-xs', config.cor)}
      title={`IUCN: ${config.descricao}`}
    >
      {config.label} — {config.descricao}
    </span>
  );
}
