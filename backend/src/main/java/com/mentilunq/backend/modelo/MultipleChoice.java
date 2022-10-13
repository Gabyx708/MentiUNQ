package com.mentilunq.backend.modelo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.ElementCollection;
import java.util.List;


@Setter
@Getter
public class MultipleChoice extends Slide {

    @ElementCollection
    private List<String> options;
    public MultipleChoice(){
        super("Multiple Choide");
    }
}
