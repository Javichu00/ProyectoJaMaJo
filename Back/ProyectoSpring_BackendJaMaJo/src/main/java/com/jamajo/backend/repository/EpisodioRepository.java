package modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import modelo.entity.Episodio;

@Repository
public interface EpisodioRepository extends JpaRepository<Episodio, Long> {
}