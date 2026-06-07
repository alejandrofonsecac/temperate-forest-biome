package com.example.floresta_temperada.service;

import com.example.floresta_temperada.domain.RankingResponseDTO;
import com.example.floresta_temperada.repository.RankingRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import java.util.List;

@AllArgsConstructor
@Log4j2
@Service
public class RankingService {
    private final RankingRepository rankingRepository;

    public List<RankingResponseDTO> findAllByOrderByRankingDesc() {
        return rankingRepository.findAll()
                .stream()
                .map(ranking -> new RankingResponseDTO(
                        ranking.getId(),
                        ranking.getPosition(),
                        ranking.getName(),
                        ranking.getPontuation()
                )).toList();
    }
}