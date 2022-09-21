package com.mentilunq.backend;

import com.mentilunq.backend.modelo.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

public class WordCloudSlideTypeTests {

    private Slide slide;


    @BeforeEach
    private void setUp(){
        slide = new Slide();
        slide.setQuestion("Pregunta?");
        WordCloud wordcloud = new WordCloud();
        slide.setType(wordcloud);
    }

    @Test
    public void aWordCloudSlideTypeStartWithCodeWORCLO(){
        Assertions.assertTrue(slide.getType().getCode().equals(SlideTypeConstants.WORD_CLOUD_CODE));

    }

    @Test
    public void aWordCloudSlideTypeReceiveWordsThatSaveAndGetResultByGreatestOcurrence(){
        slide.action("casa");
        slide.action("CaSA");
        slide.action("Perro");
        slide.action("computadora");
        slide.action("perro");
        slide.action("mouse");
        WordCloud type = (WordCloud) slide.getType();
        List<String> greatestOccurrence = (List<String>) type.getGreatestOccurrence(slide);
        Assertions.assertEquals(2, greatestOccurrence.size());
        Assertions.assertTrue(greatestOccurrence.contains("casa"));
        Assertions.assertTrue(greatestOccurrence.contains("perro"));
        Assertions.assertTrue(!greatestOccurrence.contains("computadora"));
    }
}
