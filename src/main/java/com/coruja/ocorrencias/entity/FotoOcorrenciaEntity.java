package com.coruja.ocorrencias.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 * Entidade de foto da observacao.
 * Guarda no banco a URL/caminho da imagem e a observacao a qual ela pertence.
 */
@Entity
@Table(name = "foto_ocorrencia")
public class FotoOcorrenciaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "observacao_id")
    private ObservacaoOcorrenciaEntity observacao;

    @Column(name = "url_foto", nullable = false)
    private String urlFoto;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ObservacaoOcorrenciaEntity getObservacao() {
        return observacao;
    }

    public void setObservacao(ObservacaoOcorrenciaEntity observacao) {
        this.observacao = observacao;
    }

    public String getUrlFoto() {
        return urlFoto;
    }

    public void setUrlFoto(String urlFoto) {
        this.urlFoto = urlFoto;
    }

}
