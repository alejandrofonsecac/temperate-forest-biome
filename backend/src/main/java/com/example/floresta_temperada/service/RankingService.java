package com.example.floresta_temperada.service;

import com.example.floresta_temperada.DTO.RankingResponseDTO;
import com.example.floresta_temperada.DTO.UserResponseDTO;
import com.example.floresta_temperada.domain.Ranking;
import com.example.floresta_temperada.repository.RankingRepository;
import com.example.floresta_temperada.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@AllArgsConstructor
@Log4j2
@Service
public class RankingService {
    private final RankingRepository rankingRepository;
    private final UserRepository userRepository;

    public List<RankingResponseDTO> findAllByOrderByRankingDesc() {
        return rankingRepository.findAllByOrderByPontuationDesc()
                .stream()
                .map(ranking -> new RankingResponseDTO(
                        ranking.getId(),
                        ranking.getName(),
                        ranking.getPontuation()
                )).toList();
    }

    @PostMapping
    public RankingResponseDTO save(UserResponseDTO dto) {
        Ranking ranking = new Ranking();
        ranking.setName(dto.name());
        ranking.setPontuation(dto.score());
        Ranking rankingSaved = rankingRepository.save(ranking);
        return new RankingResponseDTO(
                rankingSaved.getId(),
                rankingSaved.getName(),
                rankingSaved.getPontuation()
        );
    }
}