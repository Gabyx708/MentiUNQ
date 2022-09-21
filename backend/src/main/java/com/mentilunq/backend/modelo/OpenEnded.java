package com.mentilunq.backend.modelo;


import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;

@Entity
public class OpenEnded extends Type{
    public OpenEnded(){
        super(SlideTypeConstants.OPEN_ENDED_NAME,SlideTypeConstants.OPEN_ENDED_CODE);
    }
    @Override
    protected void setDefaultsOptions(Slide slide) {
        if (slide.getResponses() ==null){
            slide.setResponses(new ArrayList<>());
        }
    }

    @Override
    public void action(String text, Slide slide) {
        List<String> responses = slide.getResponses();
        if (responses ==null){
            slide.setResponses(new ArrayList<>());
            responses = slide.getResponses();
        }
        responses.add(text);
    }
}
