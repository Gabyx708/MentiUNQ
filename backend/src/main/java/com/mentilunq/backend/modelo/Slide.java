package com.mentilunq.backend.modelo;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type", visible = true)
@JsonSubTypes({
        @JsonSubTypes.Type(value = MultipleChoice.class, name = SlideTypeConstants.MULTIPLE_CHOICE_CODE),
        @JsonSubTypes.Type(value = Ranking.class, name = SlideTypeConstants.RANKING_CODE),
        @JsonSubTypes.Type(value = WordCloud.class, name = SlideTypeConstants.WORD_CLOUD_CODE),
        @JsonSubTypes.Type(value = OpenEnded.class, name = SlideTypeConstants.OPEN_ENDED_CODE),
        @JsonSubTypes.Type(value = Slide.class, name = SlideTypeConstants.BLANK_CODE)
})

public class Slide {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String question;

    @Column
    private String context;

    @Column
    private String note;
    @Column
    private String description;
    @Column
    private String name;

    @Column
    private String type;

    private Boolean currentSlide;

    public Slide() {
        name = "Sin Tipo";
        type = "sintipo";
    }

    public Slide(String name) {
        this.name = name;
    }
}
