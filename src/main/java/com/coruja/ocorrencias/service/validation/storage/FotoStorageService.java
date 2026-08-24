package com.coruja.ocorrencias.service.validation.storage;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.coruja.ocorrencias.config.FileStorageConfig;
import com.coruja.ocorrencias.dto.request.ObservacoesRequestDTO;
import com.coruja.ocorrencias.service.arquivos.SalvaFotoInterface;

import jakarta.validation.ValidationException;

/**
 * Service de armazenamento de fotos.
 * Salva fisicamente as imagens no diretorio configurado e retorna os caminhos gerados.
 */
@Component
public class FotoStorageService implements SalvaFotoInterface{

    private FileStorageConfig file;

    public FotoStorageService(FileStorageConfig file) {
        this.file = file;
    }

    public List<String> salvarFoto (ObservacoesRequestDTO dto) {

        List<String> caminhos = new ArrayList<>();

        Path pastaUpload = Path.of(file.getUploadDir());

        try {
            for (MultipartFile caminhofotos : dto.getImagens()) {
                Files.createDirectories(pastaUpload);

                String caminho = caminhofotos.getOriginalFilename();

                String nomeOriginal = UUID.randomUUID() + "-" + caminho;

                Path destino = pastaUpload.resolve(nomeOriginal);

                caminhofotos.transferTo(destino);

                caminhos.add("ocorrencias/" + nomeOriginal);
            }

        } catch (IOException e) {
            throw new ValidationException("Erro ao salvar foto na pasta upload - local", e);
        }
        return caminhos;

    }
}
