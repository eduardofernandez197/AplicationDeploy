package com.coruja.ocorrencias.exception;

/**
 * Exception para erro de regra de negocio.
 * Usada quando a requisicao e entendida, mas viola uma regra da aplicacao.
 */
    public class BusinessException extends RuntimeException {

    public BusinessException(String message) {
        super(message);
    }

    public BusinessException(String message, Throwable cause) {
        super(message, cause);
    }
}

