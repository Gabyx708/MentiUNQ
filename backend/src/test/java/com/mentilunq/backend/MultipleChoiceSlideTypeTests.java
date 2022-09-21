package com.mentilunq.backend;

import com.mentilunq.backend.modelo.MultipleChoice;
import com.mentilunq.backend.modelo.ItemOption;
import com.mentilunq.backend.modelo.Slide;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MultipleChoiceSlideTypeTests {

    private Slide slide;

    @BeforeEach
    private void setUp(){
        slide = new Slide();
        slide.setQuestion("Pregunta?");
        MultipleChoice multipleChoice = new MultipleChoice();
        slide.setType(multipleChoice);
    }

    @Test
    public void aMultipleChoiceSlideTypeStartThreeOptions(){
        Assertions.assertEquals(3,slide.getOptions().size());
    }
    @Test
    public void aMultipleChoiceSlideTypeStartThreeOptionsSetOneMoreOption(){
        Assertions.assertEquals(3,slide.getOptions().size());
        ItemOption newItemOption = new ItemOption("new Option");
        slide.addOption(newItemOption);
        Assertions.assertEquals(4,slide.getOptions().size());
        Assertions.assertTrue(slide.getOptions().stream().anyMatch(o->o.equals(newItemOption)));
    }
    @Test
    public void anOptionOfMultipleChoiceSlideTypeWhitoutVotesIsVotedForAnUser(){
        ItemOption itemOption = slide.getOptions().get(1);
        Assertions.assertEquals(0, itemOption.getVotes());
        slide.action(itemOption);
        Assertions.assertEquals(1, itemOption.getVotes());
    }
    @Test
    public void anOptionOfMultipleChoiceThatWasVotedForAnUserIsDevotedForHim(){
        ItemOption itemOption = slide.getOptions().get(1);
        slide.action(itemOption);
        Assertions.assertEquals(1, itemOption.getVotes());
        slide.removeAction(itemOption);
        Assertions.assertEquals(0, itemOption.getVotes());
    }
}
