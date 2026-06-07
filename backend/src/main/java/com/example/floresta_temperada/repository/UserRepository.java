package com.example.floresta_temperada.repository;

import com.example.floresta_temperada.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}