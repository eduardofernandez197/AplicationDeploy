package com.coruja.ocorrencias.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

/**
 * Entidade de observacao da ocorrencia.
 * Representa no banco uma observacao vinculada a uma ocorrencia e suas fotos.
 */
@Entity
@Table(name = "observacao_ocorrencia")
public class ObservacaoOcorrenciaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "ocorrencia_id")
    private OcorrenciaEntity ocorrencia;

    @Column(nullable = false)
    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @OneToMany(mappedBy = "observacao", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FotoOcorrenciaEntity> fotos = new ArrayList<>();

    private LocalDateTime criadoEm;

    @PrePersist
    public void prePersist() {
        criadoEm = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OcorrenciaEntity getOcorrencia() {
        return ocorrencia;
    }

    public void setOcorrencia(OcorrenciaEntity ocorrencia) {
        this.ocorrencia = ocorrencia;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<FotoOcorrenciaEntity> getFotos() {
        return fotos;
    }

    public void setFotos(List<FotoOcorrenciaEntity> fotos) {
        this.fotos = fotos;
    }

    public LocalDateTime getCriadoEm() {
        return criadoEm;
    }

    public void setCriadoEm(LocalDateTime criadoEm) {
        this.criadoEm = criadoEm;
    }

}
