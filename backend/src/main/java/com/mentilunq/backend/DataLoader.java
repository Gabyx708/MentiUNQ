package com.mentilunq.backend;

import com.mentilunq.backend.modelo.Type;
import com.mentilunq.backend.repository.TypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    private
    TypesRepository typesRepository;

    @Autowired
    public DataLoader(TypesRepository typesRepository) {
        this.typesRepository= typesRepository;
    }

    public void run(ApplicationArguments args) {
        typesRepository.save(new Type("sintipo","Sin Tipo"));
        typesRepository.save(new Type("multiplechoice","Multiple Choice"));
        typesRepository.save(new Type("ranking","Ranking"));
        typesRepository.save(new Type("wordcloud","Word Cloud"));
        typesRepository.save(new Type("openended","Open Ended"));

    }
}
