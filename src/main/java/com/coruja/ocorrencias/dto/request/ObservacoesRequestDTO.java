package com.coruja.ocorrencias.dto.request;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

/**
 * DTO de entrada da observacao.
 * Representa os dados enviados pelo cliente, incluindo titulo, descricao e imagens.
 */
public class ObservacoesRequestDTO {
    
    @NotBlank(message = "Titulo é Obrigatório")
    private String titulo;

    private String descricao;
    
    @NotEmpty(message = "Envie pelo menos uma imagem")
    private List<MultipartFile> imagens;

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

    public List<MultipartFile> getImagens() {
        return imagens;
    }

    public void setImagens(List<MultipartFile> imagens) {
        this.imagens = imagens;
    }

    
}
