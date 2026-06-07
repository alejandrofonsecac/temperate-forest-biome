package com.example.floresta_temperada.repository;

import com.example.floresta_temperada.domain.Ranking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface RankingRepository extends JpaRepository<Ranking, Integer> {
}
