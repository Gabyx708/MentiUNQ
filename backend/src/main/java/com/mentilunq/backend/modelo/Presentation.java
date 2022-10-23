package com.mentilunq.backend.modelo;



import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Entity
@ApiModel(value = "Presentation",
        description =
        "Representa una presentacion con sus correspondientes slides y owner")
@Getter
@Setter
public class Presentation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private User user;
    @Column
    private String title;

    @Column
    public int pres_code;

    @OneToMany(cascade=CascadeType.ALL)
    private List<Slide> slides;

    public Presentation(String title) {
        final int min= 100;
        final int max= 4000;
        this.pres_code = (int)Math.floor(Math.random()*(max-min+1)+min);
        this.title = title;
        this.slides = new ArrayList<>();
    }

    public Presentation() {

    }
    public String getTitle() {
        return title;
    }

    public void addSlide(Slide slide) {
        if (slides==null){
            slides = new ArrayList<>();
        }
        slides.add(slide);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
