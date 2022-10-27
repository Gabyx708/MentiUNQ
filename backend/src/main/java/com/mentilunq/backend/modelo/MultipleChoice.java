package com.mentilunq.backend.modelo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import java.util.List;


@Setter
@Getter
@Entity
public class MultipleChoice extends Slide {

    @ElementCollection
    private List<String> options;
    public MultipleChoice(){
        super("Multiple Choice");
    }
}
