import RankingTable
    from "../components/sections/RankingTable.tsx";

function Ranking(){

    return(

        <div className="container mx-auto p-8">

            <h1 className="text-4xl mb-8">
                Top 10 Ranking
            </h1>

            <RankingTable />

        </div>
    );
}

export default Ranking;