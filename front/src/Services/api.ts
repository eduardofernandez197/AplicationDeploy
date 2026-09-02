import axios from "axios";

export const api = axios.create({
  // Endereco do computador que executa o backend na rede local.
  baseURL: "http://10.1.16.89:8080",
});
