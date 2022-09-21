package com.mentilunq.backend.controllers;


import com.mentilunq.backend.modelo.Type;
import com.mentilunq.backend.service.TypesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TypesController {

    private final TypesService typesService;

    @Autowired
    public TypesController(TypesService typesService) {
        this.typesService = typesService;
    }
    @CrossOrigin
    @RequestMapping(value="/types", method = RequestMethod.GET)
    public List<Type> getAllTypes(){
        List<Type> types = typesService.getAllTypes();
        return types;
    }

    @CrossOrigin
    @RequestMapping(value = "/types/create", method = RequestMethod.POST)
    public @ResponseBody
    Type createPresentation(@RequestBody Type type){
        return typesService.createType(type);
    }
}
