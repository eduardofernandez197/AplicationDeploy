package com.coruja.ocorrencias.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

/**
 * Configuracao de armazenamento de arquivos.
 * Le do application.properties o diretorio usado para salvar uploads de imagens.
 */
@Configuration
public class FileStorageConfig {

    @Value("${upload.dir}")
    private String uploadDir;

    public String getUploadDir() {
        return uploadDir;
    }
}

