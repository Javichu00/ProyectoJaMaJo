package modelo.entities;

import jakarta.persistence.*;
import lombok.*;
import modelo.enums.TipoUsuario;

import java.time.LocalDate;

@Entity
@Table(name = "usuarios")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    private String email;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(name = "fecha_registro")
    private LocalDate fechaRegistro;

    @Enumerated(EnumType.STRING)
    private TipoUsuario tipoUsuario;

    private Boolean enabled;
}