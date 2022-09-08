package com.mentilunq.backend.controllers;
import com.mentilunq.backend.modelo.Presentation;
import com.mentilunq.backend.service.PresentationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class PresentationsController {
    private final PresentationService presentationService;

    @Autowired
    public PresentationsController(PresentationService presentationService) {
        this.presentationService = presentationService;
    }
    @CrossOrigin
    @RequestMapping(value="/presentations/{id}", method = RequestMethod.GET)
    public Optional<Presentation> getPresentationById(@PathVariable("id") String id){
        Optional<Presentation> presentationById = presentationService.getPresentationById(id);
        return presentationById;
    }

    @RequestMapping(value = "/presentations/create", method = RequestMethod.POST)
    public @ResponseBody
    Presentation createPresentation(@RequestBody Presentation presentation){
        if (presentation.getTitle()!=null && !presentation.getTitle().isEmpty()){
            return presentationService.createPresentation(presentation);
        }
        return presentation;
    }
}
