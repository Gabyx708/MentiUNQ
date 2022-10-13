package com.mentilunq.backend.modelo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class User {

    @Id
    @Column
    private String email;

    @Column
    private String name;

    public String getEmail() {
        return email;
    }


}
