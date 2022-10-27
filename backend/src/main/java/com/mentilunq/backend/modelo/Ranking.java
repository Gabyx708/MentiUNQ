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
@PrimaryKeyJoinColumn()
public class Ranking extends Slide {

    @ElementCollection
    List<String> options;

    public Ranking(){
        super("Ranking");
    }
}
