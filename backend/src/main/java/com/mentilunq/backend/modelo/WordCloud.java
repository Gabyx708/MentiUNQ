package com.mentilunq.backend.modelo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Setter
@Getter
@Entity
public class WordCloud extends Slide {

    private Integer max_input;
    public WordCloud(){
        super("Word Cloud");
    }
}
