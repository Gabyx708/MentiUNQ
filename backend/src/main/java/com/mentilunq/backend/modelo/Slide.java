package com.mentilunq.backend.modelo;

import javax.persistence.*;
import java.util.List;

@Entity
public class Slide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private List<String> responses;
    @Column
    private String question;

    @Column
    private String context;

    @Column
    private String note;
    @Column
    private String description;

    @OneToMany()
    private List<ItemOption> itemsOptions;
    @OneToMany
    private List<Pair> words;

    public Slide() {

    }

    public Type getType() {
        return type;
    }

    public void setType(Type typeSlide) {
        this.type = typeSlide;
        type.setDefaultsOptions(this);
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<ItemOption> getOptions() {
        return itemsOptions;
    }

    public void addOption(ItemOption itemO) {
        type.addOption(itemO,this);
    }

    public List<ItemOption> getItemsOptions() {
        return itemsOptions;
    }

    public void setItemsOptions(List<ItemOption> itemsOptions) {
        this.itemsOptions = itemsOptions;
    }

    public void action(ItemOption itemOption) {
        type.action(itemOption,this);
    }

    public void removeAction(ItemOption itemOption) {
        type.removeAction(itemOption,this);
    }

    public void action(String text) {
        type.action(text,this);
    }

    public List<Pair> getWords() {
        return words;
    }

    public void setWords(List<Pair> words) {
        this.words = words;
    }

    public List<String> getResponses() {
        return responses;
    }

    public void setResponses(List<String> responses) {
        this.responses = responses;
    }

    public void addOption(String option) {
        type.action(option,this);
    }
}
