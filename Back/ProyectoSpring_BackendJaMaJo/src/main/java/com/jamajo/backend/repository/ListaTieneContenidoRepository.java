package modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import modelo.entity.ListaTieneContenido;

@Repository
public interface ListaTieneContenidoRepository extends JpaRepository<ListaTieneContenido, Long> {
}