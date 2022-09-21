package com.mentilunq.backend.modelo;

import javax.persistence.*;

@Entity
public class ItemOption {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Integer votes=0;


    public ItemOption(String name) {
        this.name = name;
    }

    public ItemOption() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void addVote() {
        votes++;
    }

    public Integer getVotes() {
        return votes;
    }

    public void setVotes(Integer votes) {
        this.votes = votes;
    }

    public void removeVote() {
        votes--;
    }

}
