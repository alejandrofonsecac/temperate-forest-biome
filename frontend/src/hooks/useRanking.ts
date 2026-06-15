import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Ranking } from "../types/ranking";

export function useRanking(){

    const [ranking, setRanking] = useState<Ranking[]>([]);

    useEffect(() => {
        searchRanking();
    }, []);

    async function searchRanking(){
        try{
            const response =
                await api.get("/ranking");
            console.log(response.data);
            setRanking(response.data);
        }catch(error){
            console.log(error);
        }
    }

    return {
        ranking
    };
}