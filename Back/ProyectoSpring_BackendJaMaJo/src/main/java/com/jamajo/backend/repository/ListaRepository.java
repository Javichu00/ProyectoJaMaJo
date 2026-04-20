package com.jamajo.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jamajo.backend.entity.Lista;

@Repository
public interface ListaRepository extends JpaRepository<Lista, Long> {
}