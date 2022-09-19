package com.mentilunq.backend.modelo;

import javax.persistence.*;

@Entity
@PrimaryKeyJoinColumn(name= "ID" )
public class Blank extends Type {
    public Blank(){
        this.name = TypeConstants.NAME_BLANK;
        this.code = TypeConstants.CODE_BLANK;
    }

}
