package modelo.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "actor_participa")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ActorParticipa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_contenido", nullable = false)
    private Contenido contenido;

    @ManyToOne
    @JoinColumn(name = "id_trabajador", nullable = false)
    private Trabajador trabajador;

    @Column(name = "rol_en_contenido")
    private String rolEnContenido;
}