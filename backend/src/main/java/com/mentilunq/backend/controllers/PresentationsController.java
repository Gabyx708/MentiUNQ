package com.mentilunq.backend.controllers;
import com.mentilunq.backend.modelo.Presentation;
import com.mentilunq.backend.service.PresentationService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@ApiOperation(value = "Crea una presentacion")
public class PresentationsController {
    private final PresentationService presentationService;

    @Autowired
    public PresentationsController(PresentationService presentationService) {
        this.presentationService = presentationService;
    }
    @CrossOrigin
    @RequestMapping(value="/presentations/{id}", method = RequestMethod.GET)
    @ApiOperation(value = "Obtiene una operacion por id")
    public Optional<Presentation> getPresentationById(@PathVariable("id") String id){
        Optional<Presentation> presentationById = presentationService.getPresentationById(id);
        return presentationById;
    }

    @CrossOrigin
    @RequestMapping(value="/presentations/delete/{id}", method = RequestMethod.DELETE)
    @ApiOperation(value="elimina una presentacion")
    public Optional<Presentation> deletePresentationById(@PathVariable("id") String id){
        Optional<Presentation> presentationById = presentationService.deletePresentationById(id);
        return presentationById;
    }

    @CrossOrigin
    @RequestMapping(value = "/presentations/create", method = RequestMethod.POST)
    @ApiOperation(value = "Crea una presentacion")
    public @ResponseBody
    Presentation createPresentation(@RequestBody Presentation presentation){
        if (presentation.getTitle()!=null && !presentation.getTitle().isEmpty()){
            return presentationService.createPresentation(presentation);
        }
        return presentation;
    }
    @CrossOrigin
    @RequestMapping(value = "/presentations/update", method = RequestMethod.PUT)
    @ApiOperation(value = "Update de una presentacion")
    public @ResponseBody
    Presentation updatePresentation(@RequestBody Presentation presentation){
        if (presentation.getTitle()!=null && !presentation.getTitle().isEmpty()){
            return presentationService.updatePresentation(presentation);
        }
        return presentation;
    }
}
