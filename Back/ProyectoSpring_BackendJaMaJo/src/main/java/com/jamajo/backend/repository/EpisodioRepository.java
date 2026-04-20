package com.jamajo.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jamajo.backend.entity.Episodio;

@Repository
public interface EpisodioRepository extends JpaRepository<Episodio, Long> {
}