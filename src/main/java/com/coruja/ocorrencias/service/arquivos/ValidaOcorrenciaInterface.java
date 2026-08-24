package com.coruja.ocorrencias.service.arquivos;

import com.coruja.ocorrencias.dto.request.OcorrenciaRequestDTO;

/**
 * Contrato para validacao de ocorrencias.
 * Define o metodo esperado para validar um DTO de ocorrencia antes do uso.
 */
public interface ValidaOcorrenciaInterface {

OcorrenciaRequestDTO validar(OcorrenciaRequestDTO dto);
     
}
