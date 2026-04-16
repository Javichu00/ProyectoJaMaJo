package modelo.service;

import modelo.entity.Trabajador;
import modelo.repository.TrabajadorRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TrabajadorService {

    private final TrabajadorRepository trabajadorRepository;

    public TrabajadorService(TrabajadorRepository trabajadorRepository) {
        this.trabajadorRepository = trabajadorRepository;
    }

    public List<Trabajador> findAll() {
        return trabajadorRepository.findAll();
    }

    public Optional<Trabajador> findById(Long id) {
        return trabajadorRepository.findById(id);
    }

    @Transactional
    public Trabajador save(Trabajador trabajador) {
        return trabajadorRepository.save(trabajador);
    }

    @Transactional
    public void deleteById(Long id) {
        trabajadorRepository.deleteById(id);
    }
}