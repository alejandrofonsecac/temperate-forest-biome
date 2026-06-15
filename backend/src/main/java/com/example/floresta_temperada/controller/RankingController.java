package com.example.floresta_temperada.controller;

import com.example.floresta_temperada.DTO.RankingResponseDTO;
import com.example.floresta_temperada.service.RankingService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/ranking")
public class RankingController {
    private final RankingService rankingService;

    @GetMapping
    public List<RankingResponseDTO> getRanking(){
        return rankingService.findAllByOrderByRankingDesc();
    }

    @PostMapping
    public ResponseEntity<RankingResponseDTO> save(@RequestBody RankingResponseDTO dto){
        RankingResponseDTO savedDto = rankingService.save(dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedDto);
    }
}