package com.mentilunq.backend.modelo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Type {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Id
    private String code;

    @Column
    private String name;

    public Type(String code, String name) {

        this.code = code;
        this.name = name;
    }

    public Type() {

    }
}
