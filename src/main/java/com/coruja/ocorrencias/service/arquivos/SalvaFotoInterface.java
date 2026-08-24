package com.coruja.ocorrencias.service.arquivos;

import java.util.List;

import com.coruja.ocorrencias.dto.request.ObservacoesRequestDTO;

/**
 * Contrato para componentes que processam fotos.
 * Define o metodo usado por validadores e armazenadores de imagens recebidas na observacao.
 */
public interface SalvaFotoInterface {

    List<String> salvarFoto (ObservacoesRequestDTO foto);
    
}
