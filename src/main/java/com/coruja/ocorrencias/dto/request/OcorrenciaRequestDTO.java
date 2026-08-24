package com.coruja.ocorrencias.dto.request;

import jakarta.validation.constraints.NotBlank;

/**
 * DTO de entrada da ocorrencia.
 * Representa os dados que o cliente envia para criar ou atualizar uma ocorrencia.
 */
public class OcorrenciaRequestDTO {

    @NotBlank(message = "Titulo é Obrigatório")
    private String titulo;
    @NotBlank(message = "Cliente é Obrigatório")
    private String cliente;
    @NotBlank(message = "Localizacao é Obrigatório")
    private String localizacao;
    @NotBlank(message = "Setor é Obrigatório")
    private String setor;
    @NotBlank(message = "Area é Obrigatório")
    private String area;
    @NotBlank(message = "Departamento é Obrigatório")
    private String departamento;
    @NotBlank(message = "Responsavel é Obrigatório")
    private String responsavel;
    @NotBlank(message = "Data de inspeção é Obrigatório")
    private String data_inspecao;
    @NotBlank(message = "Revisao é Obrigatório")
    private String revisao;

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }

    public String getData_inspecao() {
        return data_inspecao;
    }

    public void setData_inspecao(String data_inspecao) {
        this.data_inspecao = data_inspecao;
    }

    public String getRevisao() {
        return revisao;
    }

    public void setRevisao(String revisao) {
        this.revisao = revisao;
    }

}
