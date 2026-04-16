package modelo.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "lista")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Lista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "email_usuario", nullable = false)
    private Usuario usuario;

    private String nombre;
}