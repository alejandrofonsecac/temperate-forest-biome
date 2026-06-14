import { useEffect, useState } from "react";
import { supabase } from "@/services/supabase.ts";
import type { Ranking } from "../types/ranking.ts";

export function useRanking() {
    const [ranking, setRanking] = useState<Ranking[]>([]);
    useEffect(() => {
        searchRanking();
    }, [])

    async function searchRanking(){

        const { data } = await supabase
            .from("ranking")
            .select("*")
            .order("tempo", { ascending: true })
            .limit(10);

        if(data){
            setRanking(data);
        }
    }

    return {
        ranking,
    }
}