package com.coruja.ocorrencias.config;

import java.nio.file.Path;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configura acesso publico aos arquivos salvos localmente.
 * Permite que o frontend carregue imagens por /arquivos/{nome-do-arquivo}.
 */
@Configuration
public class ArquivosConfig implements WebMvcConfigurer {

    private final FileStorageConfig fileStorageConfig;

    public ArquivosConfig(FileStorageConfig fileStorageConfig) {
        this.fileStorageConfig = fileStorageConfig;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        Path uploadPath = Path.of(fileStorageConfig.getUploadDir()).toAbsolutePath().normalize();

        registry.addResourceHandler("/arquivos/**")
                .addResourceLocations(uploadPath.toUri().toString());
    }
}
