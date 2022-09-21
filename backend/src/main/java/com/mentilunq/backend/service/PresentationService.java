package com.mentilunq.backend.service;


import com.mentilunq.backend.modelo.*;
import com.mentilunq.backend.repository.PresentationRepository;
import com.mentilunq.backend.repository.TypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
        Optional<Type> byId = typesRepository.findById(SlideTypeConstants.ID_BLANK);
        Type typeSlide = byId.orElseGet(() -> typesRepository.save(new Blank()));
        slide.setType(typeSlide);
        presentation.addSlide(slide);
        return presentationRepository.save(presentation);
    }

    public Optional<Presentation> getPresentationById(String id) {
        return presentationRepository.findById(Long.valueOf(id));
    }

    public Presentation updatePresentation(Presentation presentation) {
        return presentationRepository.save(presentation);
    }
}
