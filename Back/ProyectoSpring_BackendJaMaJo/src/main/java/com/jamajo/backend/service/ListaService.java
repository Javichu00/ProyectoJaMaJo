package com.jamajo.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jamajo.backend.entity.Lista;
import com.jamajo.backend.repository.ListaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ListaService {

    private final ListaRepository listaRepository;

    public ListaService(ListaRepository listaRepository) {
        this.listaRepository = listaRepository;
    }

    public List<Lista> findAll() {
        return listaRepository.findAll();
    }

    public Optional<Lista> findById(Long id) {
        return listaRepository.findById(id);
    }

    @Transactional
    public Lista save(Lista lista) {
        return listaRepository.save(lista);
    }

    @Transactional
    public void deleteById(Long id) {
        listaRepository.deleteById(id);
    }
}