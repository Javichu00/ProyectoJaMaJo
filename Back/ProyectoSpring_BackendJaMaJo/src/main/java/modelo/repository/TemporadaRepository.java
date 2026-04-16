package modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import modelo.entity.Temporada;

@Repository
public interface TemporadaRepository extends JpaRepository<Temporada, Long> {
}