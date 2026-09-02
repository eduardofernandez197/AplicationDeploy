package com.coruja.ocorrencias.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coruja.ocorrencias.entity.FotoOcorrenciaEntity;

/**
 * Repository de fotos das observacoes.
 * Fornece operacoes de banco para FotoOcorrenciaEntity usando Spring Data JPA.
 */
public interface FotoRepository extends JpaRepository<FotoOcorrenciaEntity, Long> {
}
