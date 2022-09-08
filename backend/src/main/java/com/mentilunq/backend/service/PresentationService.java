package com.mentilunq.backend.service;


import com.mentilunq.backend.modelo.Presentation;
import com.mentilunq.backend.repository.PresentationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PresentationService {

    private final PresentationRepository presentationRepository;

    @Autowired
    public PresentationService(PresentationRepository presentationRepository) {
        this.presentationRepository = presentationRepository;
    }

    public Presentation createPresentation(Presentation presentation) {
        return presentationRepository.save(presentation);
    }

    public Optional<Presentation> getPresentationById(String id) {
        return presentationRepository.findById(Long.valueOf(id));
    }
}
