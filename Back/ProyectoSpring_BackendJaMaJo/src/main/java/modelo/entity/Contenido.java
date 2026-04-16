package modelo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import modelo.enums.ClasificacionEdad;
import modelo.enums.TipoContenido;

import java.time.LocalDate;

@Entity
@Table(name = "contenido")
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
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

    @Column(name = "clasificacion_edad")
    private ClasificacionEdad clasificacionEdad;
}