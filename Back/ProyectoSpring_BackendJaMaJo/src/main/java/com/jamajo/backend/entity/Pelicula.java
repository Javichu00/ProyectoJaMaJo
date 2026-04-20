package modelo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "pelicula")
public class Pelicula extends Contenido {

    private Integer duracion;

    public Pelicula() {
    }

    public Pelicula(Integer duracion) {
        this.duracion = duracion;
    }

    public Integer getDuracion() {
        return duracion;
    }

    public void setDuracion(Integer duracion) {
        this.duracion = duracion;
    }
}