package com.jamajo.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jamajo.backend.entity.Contenido;

@Repository
public interface ContenidoRepository extends JpaRepository<Contenido, Long> {
}