package modelo.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "contenido_categoria")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContenidoPerteneceACategoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_contenido", nullable = false)
    private Contenido contenido;

    @ManyToOne
    @JoinColumn(name = "nombre_categoria", nullable = false)
    private Categoria categoria;
}