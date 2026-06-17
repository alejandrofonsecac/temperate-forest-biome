import { useRanking } from "@/hooks/useRanking.ts";

function RankingTable(){

    const { ranking } = useRanking();

    return(

        <div className="flex flex-col gap-4">

            {ranking.map((jogador, index) => (

                <div
                    key={jogador.id}
                    className="
                        flex
                        justify-between
                        bg-zinc-800
                        p-4
                        rounded-lg
                    "
                >

                    <p>
                        #{index + 1}
                    </p>

                    <p>
                        {jogador.name}
                    </p>

                    <p>
                        {jogador.tempo}s
                    </p>

                </div>

            ))}

        </div>
    );
}

export default RankingTable;