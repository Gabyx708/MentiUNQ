package com.mentilunq.backend.service;


import com.mentilunq.backend.modelo.*;
import com.mentilunq.backend.repository.PresentationRepository;
import com.mentilunq.backend.repository.TypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PresentationService {

    private final PresentationRepository presentationRepository;
    private final TypesRepository typesRepository;

    @Autowired
    public PresentationService(PresentationRepository presentationRepository, TypesRepository typesRepository) {
        this.presentationRepository = presentationRepository;
        this.typesRepository = typesRepository;
    }

    public Presentation createPresentation(Presentation presentation) {
        Slide slide = new Slide();
        slide.setCurrentSlide(true);
        presentation.setDateCreate(new Date());
        presentation.addSlide(slide);
        return presentationRepository.save(presentation);
    }

    public Optional<Presentation> getPresentationById(String id) {
        return presentationRepository.findById(Long.valueOf(id));
    }

    public Optional<Presentation> deletePresentationById(String id) {
        presentationRepository.deleteById(Long.valueOf(id));
        return  null;
    }

    public Presentation updatePresentation(Presentation presentation) {
        return presentationRepository.save(presentation);
    }

    public List<Presentation> getAllPresentationsByUser(String userID) {
        return presentationRepository.findAll().stream().filter(p->p.getUser().getEmail().equals(userID)).collect(Collectors.toList());
    }
}
