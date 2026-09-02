package com.coruja.ocorrencias.dto.response;

/**
 * DTO de saida da foto.
 * Retorna o id necessario para excluir uma foto especifica no frontend.
 */
public class FotoResponseDTO {

    private Long id;
    private String urlFoto;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrlFoto() {
        return urlFoto;
    }

    public void setUrlFoto(String urlFoto) {
        this.urlFoto = urlFoto;
    }
}
