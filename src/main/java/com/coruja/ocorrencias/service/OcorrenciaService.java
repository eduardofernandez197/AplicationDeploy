package com.coruja.ocorrencias.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.coruja.ocorrencias.dto.request.OcorrenciaRequestDTO;
import com.coruja.ocorrencias.dto.response.OcorrenciaResponseDTO;

import com.coruja.ocorrencias.entity.OcorrenciaEntity;
import com.coruja.ocorrencias.exception.NotFoundException;
import com.coruja.ocorrencias.mapper.OcorrenciaMapper;
import com.coruja.ocorrencias.repository.OcorrenciaRepository;

/**
 * Service de ocorrencias.
 * Centraliza as regras para criar, buscar, atualizar e listar as ultimas ocorrencias.
 */
@Service
public class OcorrenciaService {

    private final OcorrenciaMapper ocorrenciaMapper;
    private final OcorrenciaRepository repository;

    public OcorrenciaService(OcorrenciaMapper ocorrenciaMapper, OcorrenciaRepository repository) {
        this.ocorrenciaMapper = ocorrenciaMapper;
        this.repository = repository;
    }

    public OcorrenciaResponseDTO salvar(OcorrenciaRequestDTO dto) {

        OcorrenciaEntity ocorrencia = ocorrenciaMapper.toEntity(dto);

        OcorrenciaEntity ocorrenciaSalva = repository.save(ocorrencia);

        OcorrenciaResponseDTO ocorrenciaResponse = ocorrenciaMapper.toDto(ocorrenciaSalva);

        return ocorrenciaResponse;

    }

    public OcorrenciaResponseDTO buscarPorId(Long id) {

        OcorrenciaEntity ocorrencia = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Ocorrencia nao encontrada"));

        return ocorrenciaMapper.toDto(ocorrencia);

    }

    public OcorrenciaResponseDTO atualizaPorId(Long id, OcorrenciaRequestDTO dto) {

        OcorrenciaEntity ocorrencia = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("Ocorrencia nao encontrada"));

        ocorrencia.setTitulo(dto.getTitulo());
        ocorrencia.setCliente(dto.getCliente());
        ocorrencia.setLocalizacao(dto.getLocalizacao());
        ocorrencia.setSetor(dto.getSetor());
        ocorrencia.setArea(dto.getArea());
        ocorrencia.setDepartamento(dto.getDepartamento());
        ocorrencia.setResponsavel(dto.getResponsavel());
        ocorrencia.setData_inspecao(LocalDate.parse(dto.getData_inspecao()));
        ocorrencia.setRevisao(dto.getRevisao());

        OcorrenciaEntity ocorrenciaSalva = repository.save(ocorrencia);

        return ocorrenciaMapper.toDto(ocorrenciaSalva);
    }

    public List<OcorrenciaResponseDTO> buscarUltimasTresOcorrencias() {
        return repository.findTop3ByOrderByCriadoEmDesc()
                .stream()
                .map(ocorrenciaMapper::toDto)
                .toList();
    }
}
