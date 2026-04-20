package com.jamajo.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jamajo.backend.entity.Resena;
import com.jamajo.backend.repository.ResenaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ResenaService {

    private final ResenaRepository resenaRepository;

    public ResenaService(ResenaRepository resenaRepository) {
        this.resenaRepository = resenaRepository;
    }

    public List<Resena> findAll() {
        return resenaRepository.findAll();
    }

    public Optional<Resena> findById(Long id) {
        return resenaRepository.findById(id);
    }

    @Transactional
    public Resena save(Resena resena) {
        return resenaRepository.save(resena);
    }

    @Transactional
    public void deleteById(Long id) {
        resenaRepository.deleteById(id);
    }
}