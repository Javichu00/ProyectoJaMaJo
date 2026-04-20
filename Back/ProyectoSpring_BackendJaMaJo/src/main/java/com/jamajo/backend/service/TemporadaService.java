package com.jamajo.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jamajo.backend.entity.Temporada;
import com.jamajo.backend.repository.TemporadaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TemporadaService {

    private final TemporadaRepository temporadaRepository;

    public TemporadaService(TemporadaRepository temporadaRepository) {
        this.temporadaRepository = temporadaRepository;
    }

    public List<Temporada> findAll() {
        return temporadaRepository.findAll();
    }

    public Optional<Temporada> findById(Long id) {
        return temporadaRepository.findById(id);
    }

    @Transactional
    public Temporada save(Temporada temporada) {
        return temporadaRepository.save(temporada);
    }

    @Transactional
    public void deleteById(Long id) {
        temporadaRepository.deleteById(id);
    }
}