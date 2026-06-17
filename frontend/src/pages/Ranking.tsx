import { useEffect, useState } from 'react';
import { api } from '../services/api'; // Ajuste o caminho do seu axios
import { Trophy, Clock, Medal, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RankingUser {
  name: string;
  score: number;
  time: number;
}

export default function Ranking() {
  const [ranking, setRanking] = useState<RankingUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarRanking() {
      try {
        // Puxa o GET do Spring Boot (que já vem ordenado e limitado a 10)
        const response = await api.get('/api/quiz');
        setRanking(response.data);
      } catch (error) {
        console.error("Erro ao carregar o ranking:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarRanking();
  }, []);

  // Formata o tempo de segundos para MM:SS
  const formatarTempo = (segundos: number) => {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-sombra-900 py-12 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        
        {/* Botão Voltar */}
        <div className="mb-6">
          <Link to="/quiz" className="inline-flex items-center gap-2 font-body text-floresta-400 text-sm hover:text-outono-400 transition-colors">
            <ArrowLeft size={16} /> Voltar ao Quiz
          </Link>
        </div>

        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <Trophy size={48} className="text-outono-400 mx-auto mb-3 animate-bounce" />
          <h1 className="font-display text-display-md text-neve font-semibold">
            Top 10 Ranking
          </h1>
          <p className="font-body text-floresta-300 text-sm mt-2">
            Os melhores exploradores da Floresta Sazonal Temperada
          </p>
        </div>

        {/* Tabela / Card Principal */}
        <div className="bg-floresta-900 rounded-3xl border border-floresta-800/40 overflow-hidden shadow-2xl">
          {loading ? (
            <div className="p-12 text-center font-body text-floresta-400">
              Carregando classificação...
            </div>
          ) : ranking.length === 0 ? (
            <div className="p-12 text-center font-body text-floresta-400">
              Nenhuma pontuação registrada ainda. Seja o primeiro! 🌟
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-floresta-800 bg-floresta-950/40">
                    <th className="p-5 font-display text-outono-400 text-xs font-bold uppercase tracking-wider w-20 text-center">Posição</th>
                    <th className="p-5 font-display text-outono-400 text-xs font-bold uppercase tracking-wider">Explorador</th>
                    <th className="p-5 font-display text-outono-400 text-xs font-bold uppercase tracking-wider text-center">Pontuação</th>
                    <th className="p-5 font-display text-outono-400 text-xs font-bold uppercase tracking-wider text-center">Tempo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-floresta-800/40 font-body text-sm text-neve">
                  {ranking.map((jogador, index) => {
                    const posicao = index + 1;
                    
                    // Estilização dinâmica para os 3 primeiros medalhistas
                    const ehPodio = posicao <= 3;
                    const corPodio = 
                      posicao === 1 ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' :
                      posicao === 2 ? 'text-slate-300 bg-slate-300/10 border-slate-300/20' :
                                      'text-amber-600 bg-amber-600/10 border-amber-600/20';

                    return (
                      <tr 
                        key={index} 
                        className="hover:bg-floresta-800/30 transition-colors"
                      >
                        {/* Posição / Medalha */}
                        <td className="p-5 text-center font-bold">
                          {ehPodio ? (
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full border ${corPodio}`}>
                              <Medal size={16} />
                            </span>
                          ) : (
                            <span className="text-floresta-500 font-display text-base px-2">
                              {posicao}º
                            </span>
                          )}
                        </td>

                        {/* Nome */}
                        <td className="p-5 font-medium text-base text-neve/90">
                          {jogador.name}
                        </td>

                        {/* Pontuação */}
                        <td className="p-5 text-center">
                          <span className="bg-floresta-700/30 border border-floresta-600/30 text-floresta-300 px-3 py-1.5 rounded-xl font-bold">
                            {jogador.score} / 10
                          </span>
                        </td>

                        {/* Tempo */}
                        <td className="p-5 text-center text-floresta-400">
                          <div className="flex items-center justify-center gap-1.5">
                            <Clock size={14} className="text-floresta-500" />
                            {formatarTempo(jogador.time)}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}