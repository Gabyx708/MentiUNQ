package com.mentilunq.backend.modelo;



import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

    @OneToMany(cascade=CascadeType.ALL)
    private List<Slide> slides;

    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateCreate;

    public Presentation(String title) {
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

    public void setDateCreate(Date dateCreate) {
        this.dateCreate = dateCreate;
    }

    public Date getDateCreate() {
        return dateCreate;
    }
}
