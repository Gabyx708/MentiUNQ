package com.mentilunq.backend.modelo;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import javax.persistence.*;

@Entity
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = Blank.class, name = "SINTIPO"),
        @JsonSubTypes.Type(value = Ranking.class, name = "RANKING"),
        @JsonSubTypes.Type(value = OpenEnded.class, name = "OPENEND"),
        @JsonSubTypes.Type(value = WordCloud.class, name = "WORCLO"),
        @JsonSubTypes.Type(value = MultipleChoice.class, name = "MULCHO"),
})
public class Type {

    @Column
    protected String name;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    protected Long id;

    @Column
    protected String code;

    public Type() {

    }

    public Type(String name, String code) {

        this.name = name;
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    protected void setDefaultsOptions(Slide slide) {

    }
    public void addOption(ItemOption newItemOption, Slide slide){}

    public void action(ItemOption itemOption, Slide slide) {}

    public void removeAction(ItemOption itemOption, Slide slide) {}

    public void action(String text, Slide slide) {}
}
