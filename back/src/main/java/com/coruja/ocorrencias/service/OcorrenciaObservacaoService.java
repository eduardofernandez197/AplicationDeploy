package com.coruja.ocorrencias.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.coruja.ocorrencias.dto.request.ObservacoesRequestDTO;
import com.coruja.ocorrencias.dto.response.ObservacoesResponseDTO;
import com.coruja.ocorrencias.entity.FotoOcorrenciaEntity;
import com.coruja.ocorrencias.entity.OcorrenciaEntity;
import com.coruja.ocorrencias.entity.ObservacaoOcorrenciaEntity;
import com.coruja.ocorrencias.exception.BusinessException;
import com.coruja.ocorrencias.exception.NotFoundException;
import com.coruja.ocorrencias.mapper.ObservacaoMapper;
import com.coruja.ocorrencias.mapper.OcorrenciaMapper;
import com.coruja.ocorrencias.repository.FotoRepository;
import com.coruja.ocorrencias.repository.ObservacaoRepository;
import com.coruja.ocorrencias.repository.OcorrenciaRepository;
import com.coruja.ocorrencias.service.validation.validaFormatoFoto;
import com.coruja.ocorrencias.service.validation.storage.FotoStorageService;

/**
 * Service de observacoes da ocorrencia.
 * Centraliza as regras para criar, buscar e atualizar observacoes, validando e salvando fotos.
 */
@Service
public class OcorrenciaObservacaoService {

    private final ObservacaoMapper observacoesMapper;
    private final ObservacaoRepository observacaoRepository;
    private final FotoRepository fotoRepository;
    private final OcorrenciaRepository ocorrenciaRepository;
    private final validaFormatoFoto validaFormatoFoto;
    private final FotoStorageService fotoStorageService;
    private final OcorrenciaRepository repository;

    public OcorrenciaObservacaoService(ObservacaoMapper observacoesMapper, ObservacaoRepository observacaoRepository,
            FotoRepository fotoRepository, OcorrenciaRepository ocorrenciaRepository,
            com.coruja.ocorrencias.service.validation.validaFormatoFoto validaFormatoFoto,
            FotoStorageService fotoStorageService, OcorrenciaRepository repository, OcorrenciaMapper ocorrenciaMapper) {
        this.observacoesMapper = observacoesMapper;
        this.observacaoRepository = observacaoRepository;
        this.fotoRepository = fotoRepository;
        this.ocorrenciaRepository = ocorrenciaRepository;
        this.validaFormatoFoto = validaFormatoFoto;
        this.fotoStorageService = fotoStorageService;
        this.repository = repository;
    }

    public ObservacoesResponseDTO salvar(Long ocorrenciaId, ObservacoesRequestDTO dto) {

        OcorrenciaEntity ocorrencia = ocorrenciaRepository.findById(ocorrenciaId)
                .orElseThrow(() -> new NotFoundException("Ocorrencia nao encontrada"));

        if (dto.getImagens() == null || dto.getImagens().isEmpty()) {
            throw new BusinessException("Envie pelo menos uma imagem");
        }

        validaFormatoFoto.salvarFoto(dto);

        ObservacaoOcorrenciaEntity observacao = observacoesMapper.toEntity(dto);
        observacao.setOcorrencia(ocorrencia);

        List<String> caminhosFotos = fotoStorageService.salvarFoto(dto);

        for (String caminhoFoto : caminhosFotos) {
            FotoOcorrenciaEntity foto = new FotoOcorrenciaEntity();
            foto.setUrlFoto(caminhoFoto);
            foto.setObservacao(observacao);
            observacao.getFotos().add(foto);
        }

        ObservacaoOcorrenciaEntity observacaoSalva = observacaoRepository.save(observacao);

        return observacoesMapper.toDto(observacaoSalva);
    }

    public ObservacoesResponseDTO buscarPorId(Long id) {

        ObservacaoOcorrenciaEntity observacao = observacaoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Ocorrencia nao encontrada"));

        return observacoesMapper.toDto(observacao);
    }

    public ObservacoesResponseDTO atualizaPorId (Long id, ObservacoesRequestDTO dto){

        ObservacaoOcorrenciaEntity observacao = observacaoRepository.findById(id).orElseThrow(() -> new NotFoundException("Observacao nao encontrada"));

        observacao.setTitulo(dto.getTitulo());
        observacao.setDescricao(dto.getDescricao());

        validaFormatoFoto.salvarFoto(dto);

        List<String> caminhosFotos = fotoStorageService.salvarFoto(dto);

        for (String caminhoFoto : caminhosFotos) {
        FotoOcorrenciaEntity foto = new FotoOcorrenciaEntity();
        foto.setUrlFoto(caminhoFoto);
        foto.setObservacao(observacao);
        observacao.getFotos().add(foto);
    }
        ObservacaoOcorrenciaEntity observacaoSalva = observacaoRepository.save(observacao);

    return observacoesMapper.toDto(observacaoSalva);

    }

    public List<ObservacoesResponseDTO> listarPorOcorrencia(Long ocorrenciaId) {
        ocorrenciaRepository.findById(ocorrenciaId)
            .orElseThrow(() -> new NotFoundException("Ocorrencia nao encontrada"));

        return observacaoRepository.findByOcorrencia_Id(ocorrenciaId)
                .stream()
                .map(observacoesMapper::toDto)
                .toList();
    }

    public void excluirPorId(Long ocorrenciaId, Long id) {
        ocorrenciaRepository.findById(ocorrenciaId)
                .orElseThrow(() -> new NotFoundException("Ocorrencia nao encontrada"));

        ObservacaoOcorrenciaEntity observacao = observacaoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Observacao nao encontrada"));

        if (!observacao.getOcorrencia().getId().equals(ocorrenciaId)) {
            throw new NotFoundException("Observacao nao encontrada");
        }

        observacaoRepository.delete(observacao);
    }

    public void excluirFotoPorId(Long ocorrenciaId, Long id, Long fotoId) {
        ocorrenciaRepository.findById(ocorrenciaId)
                .orElseThrow(() -> new NotFoundException("Ocorrencia nao encontrada"));

        ObservacaoOcorrenciaEntity observacao = observacaoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Observacao nao encontrada"));

        if (!observacao.getOcorrencia().getId().equals(ocorrenciaId)) {
            throw new NotFoundException("Observacao nao encontrada");
        }

        FotoOcorrenciaEntity foto = fotoRepository.findById(fotoId)
                .orElseThrow(() -> new NotFoundException("Foto nao encontrada"));

        if (!foto.getObservacao().getId().equals(id)) {
            throw new NotFoundException("Foto nao encontrada");
        }

        fotoRepository.delete(foto);
    }
}


