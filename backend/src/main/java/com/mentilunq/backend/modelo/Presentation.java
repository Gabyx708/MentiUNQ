package com.mentilunq.backend.modelo;



import io.swagger.annotations.ApiModel;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@ApiModel(value = "Presentation",
        description =4275
        "Representa una presentacion con sus correspondientes slides y owner")
public class Presentation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    public List<Slide> getSlides() {
        return slides;
    }

    public void setSlides(List<Slide> slides) {
        this.slides = slides;
    }

    @OneToMany(cascade=CascadeType.ALL)
    private List<Slide> slides;

    public Presentation(String title) {
        this.title = title;
        this.slides = new ArrayList<>();
    }

    public Presentation() {

    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void addSlide(Slide slide) {
        if (slides==null){
            slides = new ArrayList<>();
        }
        slides.add(slide);
    }
}
