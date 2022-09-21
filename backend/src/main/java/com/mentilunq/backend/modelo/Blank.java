package com.mentilunq.backend.modelo;

import javax.persistence.*;

@Entity
@PrimaryKeyJoinColumn(name= "id" )
public class Blank extends Type {
    public Blank(){
        super(SlideTypeConstants.BLANK_NAME,SlideTypeConstants.BLANK_CODE);
    }

}
