package modelo.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "pelicula")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Pelicula extends Contenido {

    private Integer duracion;
}