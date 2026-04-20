package com.jamajo.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jamajo.backend.entity.Contenido;
import com.jamajo.backend.repository.ContenidoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ContenidoService {

    private final ContenidoRepository contenidoRepository;

    public ContenidoService(ContenidoRepository contenidoRepository) {
        this.contenidoRepository = contenidoRepository;
    }

    public List<Contenido> findAll() {
        return contenidoRepository.findAll();
    }

    public Optional<Contenido> findById(Long id) {
        return contenidoRepository.findById(id);
    }

    @Transactional
    public Contenido save(Contenido contenido) {
        return contenidoRepository.save(contenido);
    }

    @Transactional
    public void deleteById(Long id) {
        contenidoRepository.deleteById(id);
    }
}