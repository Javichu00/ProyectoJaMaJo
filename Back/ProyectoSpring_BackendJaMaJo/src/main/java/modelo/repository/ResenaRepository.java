package modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import modelo.entity.Resena;

@Repository
public interface ResenaRepository extends JpaRepository<Resena, Long> {
}