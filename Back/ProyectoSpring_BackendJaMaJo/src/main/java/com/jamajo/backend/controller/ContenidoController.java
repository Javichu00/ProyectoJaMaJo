package com.jamajo.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jamajo.backend.entity.Contenido;
import com.jamajo.backend.service.ContenidoService;

import java.util.List;

@RestController
@RequestMapping("/api/contenidos")
public class ContenidoController {

    private final ContenidoService service;

    public ContenidoController(ContenidoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Contenido>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contenido> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Contenido> create(@RequestBody Contenido c) {
        return ResponseEntity.ok(service.save(c));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Contenido> update(@PathVariable Long id,
                                            @RequestBody Contenido c) {

        return service.findById(id)
                .map(existing -> {

                    existing.setDescripcion(c.getDescripcion());
                    existing.setFecha(c.getFecha());
                    existing.setClasificacionEdad(c.getClasificacionEdad());
                    existing.setTipoContenido(c.getTipoContenido());
                    existing.setDirector(c.getDirector());

                    return ResponseEntity.ok(service.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (service.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}