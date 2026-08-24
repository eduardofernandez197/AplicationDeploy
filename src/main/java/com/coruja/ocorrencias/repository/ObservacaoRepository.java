package com.coruja.ocorrencias.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coruja.ocorrencias.entity.ObservacaoOcorrenciaEntity;

/**
 * Repository de observacoes.
 * Fornece operacoes de banco para ObservacaoOcorrenciaEntity usando Spring Data JPA.
 */
public interface ObservacaoRepository extends JpaRepository<ObservacaoOcorrenciaEntity, Long> {

    List<ObservacaoOcorrenciaEntity> findByOcorrencia_Id(Long ocorrenciaId);

}

