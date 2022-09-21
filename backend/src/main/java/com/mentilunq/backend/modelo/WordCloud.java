package com.mentilunq.backend.modelo;


import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

@Entity
public class WordCloud extends Type{

    public WordCloud(){
        super(SlideTypeConstants.WORD_CLOUD_NAME,SlideTypeConstants.WORD_CLOUD_CODE);
    }

    @Override
    protected void setDefaultsOptions(Slide slide) {
        if (slide.getWords() ==null){
            slide.setWords(new ArrayList<>());
        }
    }

    public void action(String word,Slide slide) {
        List<Pair> words = slide.getWords();
        if(words ==null) {
            slide.setWords(new ArrayList<>());
            words = slide.getWords();
        }
        String refactorWordKey = word.trim().toLowerCase();
        if (!containsKey(refactorWordKey,words)){
            words.add(new Pair(refactorWordKey,1));
        }else {
            Pair pair = get(refactorWordKey,words);
            Integer count = pair.getValue();
            count++;
            pair.setValue(count);
        }
    }

    private Pair get(String refactorWordKey, List<Pair> words) {
        return words.stream().filter(p->p.getKey().equals(refactorWordKey)).findFirst().get();
    }

    private boolean containsKey(String refactorWordKey, List<Pair> words) {
        return words.stream().anyMatch(p->p.getKey().equals(refactorWordKey));
    }

    public List<String> getGreatestOccurrence(Slide slide) {
        List<Pair> words = slide.getWords();
        if (words ==null || words.isEmpty()){
            return Collections.singletonList("");
        }
        Set<Integer> listOrder = new HashSet<>(values(words));
        Integer maxOcurrence = !listOrder.isEmpty() ? (Integer) listOrder.toArray()[listOrder.size()-1] :null;
        if (maxOcurrence==null){
            return Collections.singletonList("");
        }
        return new ArrayList<>(keySetWithOcurrence(maxOcurrence, words));
    }

    private Set<String> keySetWithOcurrence(Integer maxOcurrence, List<Pair> words) {
        return words.stream().filter(p->p.getValue().equals(maxOcurrence)).map(Pair::getKey).collect(Collectors.toSet());
    }

    private Collection<Integer> values(List<Pair> words) {
        return words.stream().map(Pair::getValue).collect(Collectors.toList());
    }
}
