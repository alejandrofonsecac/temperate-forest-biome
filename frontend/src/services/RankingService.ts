import { api } from "./api";
interface RankingRequest {
    name: string;
    time: number;
    score: number;
}

export async function saveRanking(data: RankingRequest){
    const response = await api.post("/ranking", data);
    return response.data;
}