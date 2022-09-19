package com.mentilunq.backend.modelo;

import javax.persistence.*;

@Entity
public class Slide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String question;

    @Column
    private String context;

    @Column
    private String note;

    public Slide() {

    }

    public Type getType() {
        return type;
    }

    public void setType(Type typeSlide) {
        this.type = typeSlide;
    }

    @OneToOne( cascade = CascadeType.ALL)
    private Type type;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
