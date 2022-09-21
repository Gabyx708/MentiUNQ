package com.mentilunq.backend.modelo;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.Arrays;

@Entity
public class MultipleChoice extends Type {



    public MultipleChoice(){
        super(SlideTypeConstants.MULTIPLE_CHOICE_NAME,SlideTypeConstants.MULTIPLE_CHOICE_CODE);

    }

    @Override
    protected void setDefaultsOptions(Slide slide) {
        if (slide.getOptions() ==null){
                slide.setItemsOptions(new ArrayList<>());
                Arrays.asList(1,2,3).forEach(i-> slide.getOptions().add(new ItemOption("Item "+i)));
            }
    }

    public void action(ItemOption itemOption, Slide slide) {
        slide.getItemsOptions().stream().filter(o->o.equals(itemOption)).findFirst().get().addVote();
    }

    public void removeAction(ItemOption itemOption,Slide slide) {
        slide.getItemsOptions().stream().filter(o->o.equals(itemOption)).findFirst().get().removeVote();
    }
}
