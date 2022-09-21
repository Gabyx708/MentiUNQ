package com.mentilunq.backend;

import com.mentilunq.backend.modelo.MultipleChoice;
import com.mentilunq.backend.modelo.OpenEnded;
import com.mentilunq.backend.modelo.Slide;
import com.mentilunq.backend.modelo.Type;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class OpenEndedSlideTypeTests {

    private Slide slide;

    @BeforeEach
    private void setUp(){
        slide = new Slide();
        slide.setQuestion("Pregunta?");
        OpenEnded openEnded = new OpenEnded();
        slide.setType(openEnded);
    }
    @Test
    public void aOpenEndedSlideTypeStartWithoutResponses(){
        Assertions.assertTrue(slide.getResponses().isEmpty());
    };
    @Test
    public void aOpenEndedSlideTypeOnlySetText(){
        String prueba_de_respuesta = "Prueba de respuesta";
        slide.addOption(prueba_de_respuesta);
        Assertions.assertTrue(slide.getResponses().contains(prueba_de_respuesta));
    };
}
