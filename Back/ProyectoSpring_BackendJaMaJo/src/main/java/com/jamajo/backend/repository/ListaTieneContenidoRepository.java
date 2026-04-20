package com.jamajo.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jamajo.backend.entity.ListaTieneContenido;

@Repository
public interface ListaTieneContenidoRepository extends JpaRepository<ListaTieneContenido, Long> {
}