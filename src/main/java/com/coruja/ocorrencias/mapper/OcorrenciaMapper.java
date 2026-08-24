package com.coruja.ocorrencias.mapper;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

import com.coruja.ocorrencias.dto.request.OcorrenciaRequestDTO;
import com.coruja.ocorrencias.dto.response.OcorrenciaResponseDTO;
import com.coruja.ocorrencias.entity.OcorrenciaEntity;

/**
 * Mapper de ocorrencia.
 * Converte dados entre DTOs da API e a entidade usada pelo banco.
 */
@Component
public class OcorrenciaMapper {

    public OcorrenciaEntity toEntity(OcorrenciaRequestDTO dto) {
        if (dto == null) {
            return null;
        }

        OcorrenciaEntity ocorrencia = new OcorrenciaEntity();
        ocorrencia.setTitulo(dto.getTitulo());
        ocorrencia.setCliente(dto.getCliente());
        ocorrencia.setLocalizacao(dto.getLocalizacao());
        ocorrencia.setSetor(dto.getSetor());
        ocorrencia.setArea(dto.getArea());
        ocorrencia.setDepartamento(dto.getDepartamento());
        ocorrencia.setResponsavel(dto.getResponsavel());
        ocorrencia.setData_inspecao(LocalDate.parse(dto.getData_inspecao()));
        ocorrencia.setRevisao(dto.getRevisao());

        return ocorrencia;
    }

    public OcorrenciaResponseDTO toDto(OcorrenciaEntity ocorrencia) {
        if (ocorrencia == null) {
            return null;
        }

        OcorrenciaResponseDTO dto = new OcorrenciaResponseDTO();
        dto.setId(ocorrencia.getId());
        dto.setTitulo(ocorrencia.getTitulo());
        dto.setCliente(ocorrencia.getCliente());
        dto.setLocalizacao(ocorrencia.getLocalizacao());
        dto.setSetor(ocorrencia.getSetor());
        dto.setArea(ocorrencia.getArea());
        dto.setDepartamento(ocorrencia.getDepartamento());
        dto.setResponsavel(ocorrencia.getResponsavel());
        dto.setData_inspecao(ocorrencia.getData_inspecao());
        dto.setRevisao(ocorrencia.getRevisao());
        dto.setStatus(ocorrencia.getStatus());
        dto.setCriadoEm(ocorrencia.getCriadoEm());
        dto.setAtualizadoEm(ocorrencia.getAtualizadoEm());

        return dto;
    }
}


