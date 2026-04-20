package com.jamajo.backend.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

import com.jamajo.backend.enums.ClasificacionEdad;
import com.jamajo.backend.enums.TipoContenido;

@Entity
@Table(name = "contenido")
@Inheritance(strategy = InheritanceType.JOINED)
public class Contenido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_contenido")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_director")
    private Trabajador director;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_contenido", nullable = false)
    private TipoContenido tipoContenido;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    private LocalDate fecha;

    @Enumerated(EnumType.STRING)
    @Column(name = "clasificacion_edad")
    private ClasificacionEdad clasificacionEdad;

    public Contenido() {
    }

    public Contenido(Long id, Trabajador director, TipoContenido tipoContenido,
                     String descripcion, LocalDate fecha,
                     ClasificacionEdad clasificacionEdad) {
        this.id = id;
        this.director = director;
        this.tipoContenido = tipoContenido;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.clasificacionEdad = clasificacionEdad;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Trabajador getDirector() {
        return director;
    }

    public void setDirector(Trabajador director) {
        this.director = director;
    }

    public TipoContenido getTipoContenido() {
        return tipoContenido;
    }

    public void setTipoContenido(TipoContenido tipoContenido) {
        this.tipoContenido = tipoContenido;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public ClasificacionEdad getClasificacionEdad() {
        return clasificacionEdad;
    }

    public void setClasificacionEdad(ClasificacionEdad clasificacionEdad) {
        this.clasificacionEdad = clasificacionEdad;
    }
}