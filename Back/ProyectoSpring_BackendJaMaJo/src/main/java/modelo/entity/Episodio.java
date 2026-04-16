package modelo.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "episodio")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Episodio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_episodio")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_temporada", nullable = false)
    private Temporada temporada;

    private Integer duracion;

    @Column(columnDefinition = "TEXT")
    private String descripcion;
}