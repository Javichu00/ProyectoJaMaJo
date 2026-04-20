package modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import modelo.entity.Serie;

@Repository
public interface SerieRepository extends JpaRepository<Serie, Long> {
}