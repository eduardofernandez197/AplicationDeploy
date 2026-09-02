package com.coruja.ocorrencias.exception;

/**
 * Exception para recurso nao encontrado.
 * Usada quando o cliente pede um registro que nao existe no banco.
 */
public class NotFoundException extends RuntimeException{

    public NotFoundException (String message){
            super(message);
    }
    
}
