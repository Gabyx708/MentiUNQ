package com.mentilunq.backend.modelo;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;

public class Ranking extends Slide {

    private List<String> palabras;
    public Ranking(){

        super("Ranking");
        palabras = new List<String>;
    }

    public Hashtable calcularPorcentaje(){

        Hashtable<String , Integer> resultados = new Hashtable<String , Integer>();
        int contador = 0;

        for (String palabraComparar:palabras) {

                for(String palabraAux:palabras) {
                    if (palabraAux == palabraComparar) {
                        contador++;
                    }
                }
                resultados.put(palabraComparar,contador);
                contador = 0;
        }
        return resultados; //el front debera trabajar con el diccionario para representar los datos
    }

    public void agregarPalabra(String p){
       palabras.add(p);
    }
}


