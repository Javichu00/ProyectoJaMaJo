package com.jamajo.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jamajo.backend.entity.Serie;
import com.jamajo.backend.repository.SerieRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SerieService {

    private final SerieRepository serieRepository;

    public SerieService(SerieRepository serieRepository) {
        this.serieRepository = serieRepository;
    }

    public List<Serie> findAll() {
        return serieRepository.findAll();
    }

    public Optional<Serie> findById(Long id) {
        return serieRepository.findById(id);
    }

    @Transactional
    public Serie save(Serie serie) {
        return serieRepository.save(serie);
    }

    @Transactional
    public void deleteById(Long id) {
        serieRepository.deleteById(id);
    }
}