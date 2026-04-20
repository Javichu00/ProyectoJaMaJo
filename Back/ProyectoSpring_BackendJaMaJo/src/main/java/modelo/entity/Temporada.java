package modelo.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "temporada")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Temporada {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_temporada")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_serie", nullable = false)
    private Serie serie;

    @Column(name = "numero_temporada", nullable = false)
    private Integer numeroTemporada;
}