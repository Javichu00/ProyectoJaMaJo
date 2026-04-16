package modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import modelo.entity.Pelicula;

@Repository
public interface PeliculaRepository extends JpaRepository<Pelicula, Long> {
}