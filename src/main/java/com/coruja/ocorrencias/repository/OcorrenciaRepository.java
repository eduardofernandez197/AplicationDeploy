package com.coruja.ocorrencias.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coruja.ocorrencias.entity.OcorrenciaEntity;

/**
 * Repository de ocorrencias.
 * Fornece operacoes de banco para OcorrenciaEntity usando Spring Data JPA.
 */
public interface OcorrenciaRepository extends JpaRepository<OcorrenciaEntity, Long> {

     List<OcorrenciaEntity> findTop3ByOrderByCriadoEmDesc();

}
