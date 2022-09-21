package com.mentilunq.backend.service;

import com.mentilunq.backend.modelo.SlideTypeConstants;
import com.mentilunq.backend.modelo.Type;
import com.mentilunq.backend.repository.TypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TypesService {

    private final TypesRepository typesRepository;

    @Autowired
    public TypesService(TypesRepository typesRepository) {
        this.typesRepository = typesRepository;
    }

    public Type createType(Type type) {
        return typesRepository.save(type);
    }

    public List<Type> getAllTypes() {
        return typesRepository.findAll().stream().filter(t->!t.getCode().equals(SlideTypeConstants.BLANK_CODE)).collect(Collectors.toList());
    }
}
