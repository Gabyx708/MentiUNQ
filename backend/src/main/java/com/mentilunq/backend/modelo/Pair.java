package com.mentilunq.backend.modelo;

import javax.persistence.*;

@Entity
public class Pair {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Column(name = "`key`")
    protected String key;

    @Column(name = "`value`")
    protected Integer value;

    public Pair(String key, Integer second) {
        this.key = key;
        this.value = second;
    }

    public Pair(){}

    public void setKey(String name) {
        this.key = name;
    }

    public void setValue(Integer amount) {
        this.value = amount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public Integer getValue() {
        return value;
    }
}
