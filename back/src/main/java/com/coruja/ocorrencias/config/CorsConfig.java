package com.coruja.ocorrencias.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuracao de CORS da API.
 * Define quais origens, metodos e headers o frontend pode usar ao chamar o backend.
 */
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer cors() {
        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOriginPatterns(
                                "http://localhost:[*]",
                                "http://127.0.0.1:[*]",
                                "http://10.*:[*]",
                                "http://192.168.*:[*]",
                                "http://172.16.*:[*]",
                                "http://172.17.*:[*]",
                                "http://172.18.*:[*]",
                                "http://172.19.*:[*]",
                                "http://172.20.*:[*]",
                                "http://172.21.*:[*]",
                                "http://172.22.*:[*]",
                                "http://172.23.*:[*]",
                                "http://172.24.*:[*]",
                                "http://172.25.*:[*]",
                                "http://172.26.*:[*]",
                                "http://172.27.*:[*]",
                                "http://172.28.*:[*]",
                                "http://172.29.*:[*]",
                                "http://172.30.*:[*]",
                                "http://172.31.*:[*]"
                        )
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*");

            }

        };

    }

}
