package com.mentilunq.backend.modelo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Setter
@Getter
@Entity
public class OpenEnded extends Slide {

    public OpenEnded(){
        super("Open Ended");
    }
}
