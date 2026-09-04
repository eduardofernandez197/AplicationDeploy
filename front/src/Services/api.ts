import axios from "axios";

const API_HOST = window.location.hostname || "localhost";

export const API_BASE_URL = `${window.location.protocol}//${API_HOST}:8080`;

export const montarUrlArquivo = (urlArquivo: string) => {
  return `${API_BASE_URL}/arquivos/${urlArquivo.replace(/^ocorrencias\//, "")}`;
};

export const api = axios.create({
  // Endereco do computador que executa o backend na rede local.
  baseURL: API_BASE_URL,
});
