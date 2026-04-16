package modelo.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "serie")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Serie extends Contenido {

}