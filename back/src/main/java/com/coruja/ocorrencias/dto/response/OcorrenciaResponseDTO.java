package com.coruja.ocorrencias.dto.response;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.coruja.ocorrencias.entity.StatusOcorrenciaEntity;

/**
 * DTO de saida da ocorrencia.
 * Define quais dados da ocorrencia serao devolvidos nas respostas da API.
 */
public class OcorrenciaResponseDTO {

    private Long id;
    private String titulo;
    private String cliente;
    private String localizacao;
    private String setor;
    private String area;
    private String departamento;
    private String responsavel;
    private LocalDate data_inspecao;
    private String revisao;
    private StatusOcorrenciaEntity status;
    private LocalDateTime criadoEm;
    private LocalDateTime atualizadoEm;

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

    public LocalDate getData_inspecao() {
        return data_inspecao;
    }

    public void setData_inspecao(LocalDate data_inspecao) {
        this.data_inspecao = data_inspecao;
    }

    public String getRevisao() {
        return revisao;
    }

    public void setRevisao(String revisao) {
        this.revisao = revisao;
    }

    public StatusOcorrenciaEntity getStatus() {
        return status;
    }

    public void setStatus(StatusOcorrenciaEntity status) {
        this.status = status;
    }

    public LocalDateTime getCriadoEm() {
        return criadoEm;
    }

    public void setCriadoEm(LocalDateTime criadoEm) {
        this.criadoEm = criadoEm;
    }

    public LocalDateTime getAtualizadoEm() {
        return atualizadoEm;
    }

    public void setAtualizadoEm(LocalDateTime atualizadoEm) {
        this.atualizadoEm = atualizadoEm;
    }

}
