package com.coruja.ocorrencias;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Classe principal da API.
 * Inicia o Spring Boot, sobe o contexto da aplicacao e carrega os beans do projeto.
 */
@SpringBootApplication
public class OcorrenciasApplication {

	public static void main(String[] args) {
		SpringApplication.run(OcorrenciasApplication.class, args);
	}

}
 
