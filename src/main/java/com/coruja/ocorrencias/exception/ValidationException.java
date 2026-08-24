package com.coruja.ocorrencias.exception;

/**
 * Exception para erro de validacao da aplicacao.
 * Usada para bloquear dados invalidos antes de seguir com a regra principal.
 */
public class ValidationException extends RuntimeException {

    public ValidationException(String message){
        super(message);
    }
    
}
