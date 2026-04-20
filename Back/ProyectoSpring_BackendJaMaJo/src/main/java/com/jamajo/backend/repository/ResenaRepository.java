package com.jamajo.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jamajo.backend.entity.Resena;

@Repository
public interface ResenaRepository extends JpaRepository<Resena, Long> {
}