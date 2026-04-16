CREATE DATABASE IF NOT EXISTS JAMAJO_DDBB;
USE JAMAJO_DDBB;

CREATE TABLE IF NOT EXISTS Trabajadores (
    id_trabajador   INT AUTO_INCREMENT PRIMARY KEY,
    nombre          VARCHAR(150) NOT NULL,
    biografia       TEXT
);

CREATE TABLE IF NOT EXISTS Categoria (
    nombreCategoria VARCHAR(100) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Usuarios (
    email           VARCHAR(255) PRIMARY KEY,
    username        VARCHAR(100) NOT NULL,
    password        VARCHAR(64)  NOT NULL,
    fecha_registro  DATE         NOT NULL DEFAULT (CURRENT_DATE),
    tipo_usuario    ENUM('ADMIN', 'CLIENTE') NOT NULL DEFAULT 'CLIENTE',
    enabled         BOOLEAN      NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS Contenido (
    id_contenido        INT AUTO_INCREMENT PRIMARY KEY,
    id_director         INT,
    tipo_contenido      ENUM('PELICULA', 'SERIE') NOT NULL,
    descripcion         TEXT,
    fecha               DATE,
    clasificacion_edad  INT,
    CONSTRAINT fk_contenido_director FOREIGN KEY (id_director)
        REFERENCES Trabajadores(id_trabajador)
);

CREATE TABLE IF NOT EXISTS Pelicula (
    id_contenido    INT PRIMARY KEY,
    duracion        INT NOT NULL,
    CONSTRAINT fk_pelicula_contenido FOREIGN KEY (id_contenido)
        REFERENCES Contenido(id_contenido)
);

CREATE TABLE IF NOT EXISTS Serie (
    id_serie        INT AUTO_INCREMENT PRIMARY KEY,
    id_contenido    INT NOT NULL UNIQUE,
    CONSTRAINT fk_serie_contenido FOREIGN KEY (id_contenido)
        REFERENCES Contenido(id_contenido)
);

CREATE TABLE IF NOT EXISTS Temporada (
    id_temporada        INT AUTO_INCREMENT PRIMARY KEY,
    id_serie            INT NOT NULL,
    numero_temporada    INT NOT NULL,
    CONSTRAINT fk_temporada_serie FOREIGN KEY (id_serie)
        REFERENCES Serie(id_serie)
);

CREATE TABLE IF NOT EXISTS Episodio (
    id_episodio     INT AUTO_INCREMENT PRIMARY KEY,
    id_temporada    INT NOT NULL,
    duracion        INT NOT NULL,
    CONSTRAINT fk_episodio_temporada FOREIGN KEY (id_temporada)
        REFERENCES Temporada(id_temporada)
);

CREATE TABLE IF NOT EXISTS ActorParticipa (
    id_relacion     INT AUTO_INCREMENT PRIMARY KEY,
    id_contenido    INT       NOT NULL,
    id_trabajador   INT       NOT NULL,
    rolEnContenido  VARCHAR(100) NOT NULL,
    CONSTRAINT fk_ap_contenido   FOREIGN KEY (id_contenido)
        REFERENCES Contenido(id_contenido) ON DELETE CASCADE,
    CONSTRAINT fk_ap_trabajador  FOREIGN KEY (id_trabajador)
        REFERENCES Trabajadores(id_trabajador) ON DELETE CASCADE,
    CONSTRAINT uq_ap UNIQUE (id_contenido, id_trabajador, rolEnContenido)
);

CREATE TABLE IF NOT EXISTS ContenidoPerteneceACategoria (
    id_relacion     INT AUTO_INCREMENT PRIMARY KEY,
    id_contenido    INT       NOT NULL,
    nombreCategoria VARCHAR(100) NOT NULL,
    CONSTRAINT fk_cpc_contenido  FOREIGN KEY (id_contenido)
        REFERENCES Contenido(id_contenido) ON DELETE CASCADE,
    CONSTRAINT fk_cpc_categoria  FOREIGN KEY (nombreCategoria)
        REFERENCES Categoria(nombreCategoria) ON DELETE CASCADE,
    CONSTRAINT uq_cpc UNIQUE (id_contenido, nombreCategoria)
);

CREATE TABLE IF NOT EXISTS Lista (
    id_lista    INT AUTO_INCREMENT PRIMARY KEY,
    email       VARCHAR(255) NOT NULL,
    nombre      VARCHAR(150) NOT NULL,
    CONSTRAINT fk_lista_usuario FOREIGN KEY (email)
        REFERENCES Usuarios(email)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS ListaTieneContenido (
    id_ltc          INT AUTO_INCREMENT PRIMARY KEY,
    id_lista        INT NOT NULL,
    id_contenido    INT NOT NULL,
    CONSTRAINT fk_ltc_lista     FOREIGN KEY (id_lista)
        REFERENCES Lista(id_lista) ON DELETE CASCADE,
    CONSTRAINT fk_ltc_contenido FOREIGN KEY (id_contenido)
        REFERENCES Contenido(id_contenido) ON DELETE CASCADE,
    CONSTRAINT uq_ltc UNIQUE (id_lista, id_contenido)
);

CREATE TABLE IF NOT EXISTS Resena (
    id_comentario       INT AUTO_INCREMENT PRIMARY KEY,
    email               VARCHAR(255) NOT NULL,
    id_contenido        INT       NOT NULL,
    texto               TEXT         NOT NULL,
    fecha_publicacion   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    cant_estrellas      TINYINT      NOT NULL CHECK (cant_estrellas BETWEEN 1 AND 5),
    CONSTRAINT fk_resena_usuario   FOREIGN KEY (email)
        REFERENCES Usuarios(email) ON DELETE CASCADE,
    CONSTRAINT fk_resena_contenido FOREIGN KEY (id_contenido)
        REFERENCES Contenido(id_contenido) ON DELETE CASCADE,
    CONSTRAINT uq_resena UNIQUE (email, id_contenido)
);
