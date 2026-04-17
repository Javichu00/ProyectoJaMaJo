package modelo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "temporada")
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

    public Temporada() {
    }

    public Temporada(Long id, Serie serie, Integer numeroTemporada) {
        this.id = id;
        this.serie = serie;
        this.numeroTemporada = numeroTemporada;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Serie getSerie() {
        return serie;
    }

    public void setSerie(Serie serie) {
        this.serie = serie;
    }

    public Integer getNumeroTemporada() {
        return numeroTemporada;
    }

    public void setNumeroTemporada(Integer numeroTemporada) {
        this.numeroTemporada = numeroTemporada;
    }
}