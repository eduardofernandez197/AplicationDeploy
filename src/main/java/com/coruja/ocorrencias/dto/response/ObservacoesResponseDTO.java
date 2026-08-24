package com.coruja.ocorrencias.dto.response;

import java.time.LocalDateTime;
import java.util.List;

/**
 * DTO de saida da observacao.
 * Define quais dados da observacao e das fotos serao devolvidos nas respostas da API.
 */
public class ObservacoesResponseDTO {

    private Long id;
    private String titulo;
    private String descricao;
    private List<String> fotos;
    private LocalDateTime criadoEm;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<String> getFotos() {
        return fotos;
    }

    public void setFotos(List<String> fotos) {
        this.fotos = fotos;
    }

    public LocalDateTime getCriadoEm() {
        return criadoEm;
    }

    public void setCriadoEm(LocalDateTime criadoEm) {
        this.criadoEm = criadoEm;
    }

}
