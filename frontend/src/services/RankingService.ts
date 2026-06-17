import { api } from "./api";

interface RankingRequest {
    name: string;
    time: number;
    score: number;
}

export async function saveRanking(data: RankingRequest) {
    const response = await api.post("/api/quiz/salvar-resultado", data);
    return response.data;
}

export async function getRanking() {
    const response = await api.get("/api/quiz/ranking");
    return response.data;
}