package com.coruja.ocorrencias.service.validation;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.coruja.ocorrencias.dto.request.ObservacoesRequestDTO;

import com.coruja.ocorrencias.exception.BusinessException;
import com.coruja.ocorrencias.service.arquivos.SalvaFotoInterface;
@Component

/**
 * Validador de formato de foto.
 * Confere se cada imagem existe, possui extensao e usa um formato permitido pela aplicacao.
 */
public class validaFormatoFoto implements SalvaFotoInterface {
    //Metodo que valida se a foto nao veio vazia e se veio no formato certo

    public List<String> salvarFoto(ObservacoesRequestDTO dto) {

        List<MultipartFile> foto = dto.getImagens();
        List<String> nomesFotos = new ArrayList<>();

        for (MultipartFile fotos : foto) {
            String nome = fotos.getOriginalFilename();
            if (fotos.isEmpty()) {
                throw new BusinessException("Foto veio vazia");
            }
            if (nome == null || !nome.contains(".")) {
                throw new BusinessException("Foto sem extensao");
            }
            String ext = nome.substring(nome.lastIndexOf(".") + 1).toLowerCase();
            if (!ext.equals("jpg") && !ext.equals("jpeg") && !ext.equals("png")) {
                throw new BusinessException("Apenas arquivos JPG e PNG sao permitidos");
            }
            nomesFotos.add(nome);
        }
        return nomesFotos;
    }
}
