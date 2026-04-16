package modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import modelo.entity.ContenidoPerteneceACategoria;

@Repository
public interface ContenidoPerteneceACategoriaRepository extends JpaRepository<ContenidoPerteneceACategoria, Long> {
}