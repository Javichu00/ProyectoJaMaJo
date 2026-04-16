package modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import modelo.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {

    boolean existsByUsername(String username);
}