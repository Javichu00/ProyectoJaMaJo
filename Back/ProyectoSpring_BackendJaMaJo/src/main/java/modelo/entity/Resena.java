package modelo.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "resena")
public class Resena {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "email_usuario", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_contenido", nullable = false)
    private Contenido contenido;

    @Column(columnDefinition = "TEXT")
    private String texto;

    @Column(name = "fecha_publicacion")
    private LocalDate fechaPublicacion;

    @Column(name = "cant_estrellas")
    private Integer cantEstrellas;

    public Resena() {
    }

    public Resena(Long id, Usuario usuario, Contenido contenido, String texto, LocalDate fechaPublicacion, Integer cantEstrellas) {
        this.id = id;
        this.usuario = usuario;
        this.contenido = contenido;
        this.texto = texto;
        this.fechaPublicacion = fechaPublicacion;
        this.cantEstrellas = cantEstrellas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Contenido getContenido() {
        return contenido;
    }

    public void setContenido(Contenido contenido) {
        this.contenido = contenido;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public LocalDate getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(LocalDate fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public Integer getCantEstrellas() {
        return cantEstrellas;
    }

    public void setCantEstrellas(Integer cantEstrellas) {
        this.cantEstrellas = cantEstrellas;
    }
}