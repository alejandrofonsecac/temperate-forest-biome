package com.example.floresta_temperada.controller;

import com.example.floresta_temperada.domain.RankingResponseDTO;
import com.example.floresta_temperada.service.RankingService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Log4j2
@AllArgsConstructor
@RestController("/ranking")
public class RankingController {
    private final RankingService rankingService;

    @GetMapping
    public List<RankingResponseDTO> getRanking(){ //Ele retornara o Http 200 automaticamente, não é necessário usar ResponseEntity
        return rankingService.findAllByOrderByRankingDesc();
    }
}
