package modelo.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "lista_contenido")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ListaTieneContenido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_lista", nullable = false)
    private Lista lista;

    @ManyToOne
    @JoinColumn(name = "id_contenido", nullable = false)
    private Contenido contenido;
}