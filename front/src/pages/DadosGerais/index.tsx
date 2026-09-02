import { useNavigate } from "react-router";
import { useState } from "react";
import { api } from "../../Services/api";
import { TopBar } from "../../componentes/Components/TopBar";
import {
  CampoContainer,
  CampoInput,
  CampoLabel,
  DadosGeraisContainer,
  ErrorMessage,
  FormContainer,
  FormFieldset,
  FormFooter,
  ProgressBar,
  ProgressBarActive,
  ProgressBarInactive,
  ProgressContainer,
  ProgressStep,
  SalvarButton
} from "./style";

import {
  FileText,
  Building2,
  MapPin,
  Layers,
  User,
  Calendar,
  Hash
} from "lucide-react";

type DadosGeraisFormValues = {
  titulo: string;
  cliente: string;
  localizacao: string;
  setor: string;
  area: string;
  departamento: string;
  responsavel: string;
  data_inspecao: string;
  revisao: string;
};

export const DadosGerais = () => {
    const navigate = useNavigate();
    const [isSalvando, setIsSalvando] = useState(false);
    const [mensagemErro, setMensagemErro] = useState("");

    // Estado unico do formulario: cada chave precisa bater com o name do input.
    const [formValues, setFormValues] = useState<DadosGeraisFormValues>({
      titulo: "",
      cliente: "",
      localizacao: "",
      setor: "",
      area: "",
      departamento: "",
      responsavel: "",
      data_inspecao: "",
      revisao: "Rev.00",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      // [name] usa o name do input para atualizar somente o campo alterado.
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const salvaEContinua = async (event: React.FormEvent<HTMLFormElement>) => {
      // Evita o recarregamento padrao do navegador ao enviar o formulario.
      event.preventDefault();

      if (isSalvando) {
        return;
      }

      setIsSalvando(true);
      setMensagemErro("");

      // O backend recebe JSON, por isso montamos um JSON.
      const dadosGerais = {
        titulo: formValues.titulo,
        cliente: formValues.cliente,
        localizacao: formValues.localizacao,
        setor: formValues.setor,
        area: formValues.area,
        departamento: formValues.departamento,
        responsavel: formValues.responsavel,
        data_inspecao: formValues.data_inspecao,
        revisao: formValues.revisao,
      }

      try {
        // A baseURL esta configurada em src/Services/api.ts.
        const response = await api.post("/ocorrencias", dadosGerais);

        const ocorrenciaId = response.data.id;

        //localStorage.setItem("ocorrenciaId", String(response.data.id))

        navigate(`/ocorrencias/${ocorrenciaId}/observacoes`);
        
      } catch {
        setMensagemErro("Erro ao salvar dados gerais");
      } finally {
        setIsSalvando(false);
      }
  };

  return (
    <>
      <TopBar title="Dados Gerais" ButtomVoltar />

      <DadosGeraisContainer aria-label="Dados Gerais">
        {/* Indicador visual da etapa atual do formulário. */}
        <ProgressContainer aria-label="Progresso do formulário">
          <ProgressBar>
            <ProgressBarActive />
            <ProgressBarInactive />
          </ProgressBar>

          <ProgressStep>1/2</ProgressStep>
        </ProgressContainer>

        {/* Formulário principal dos dados gerais do relatório. */}
        <FormContainer onSubmit={salvaEContinua}>
          <FormFieldset>
            {mensagemErro && (
              <ErrorMessage role="alert">
                {mensagemErro}
              </ErrorMessage>
            )}

            <CampoContainer>
              <CampoLabel htmlFor="tituloRelatorio">
                <span className="labelIcone">
                  <FileText size={12} />
                  TÍTULO DO RELATÓRIO <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="tituloRelatorio"
                name="titulo"
                value={formValues.titulo}
                onChange={handleChange}
                type="text"
                placeholder="Ex: RT-2024-047 - Inspeção Elétrica Bloco A"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="cliente">
                <span className="labelIcone">
                  <Building2 size={12} />
                  CLIENTE / PRETENDENTE <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="cliente"
                name="cliente"
                value={formValues.cliente}
                onChange={handleChange}
                type="text"
                placeholder="Razão social ou nome do cliente"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="localizacao">
                <span className="labelIcone">
                  <MapPin size={12} />
                  LOCALIZAÇÃO <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="localizacao"
                name="localizacao"
                value={formValues.localizacao}
                onChange={handleChange}
                type="text"
                placeholder="Endereço ou descrição do local"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="setor">
                <span className="labelIcone">
                  <Layers size={12} />
                  SETOR
                </span>
              </CampoLabel>
              <CampoInput
                id="setor"
                name="setor"
                value={formValues.setor}
                onChange={handleChange}
                type="text"
                placeholder="Ex: Setor Elétrico"
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="area">ÁREA</CampoLabel>
              <CampoInput
                id="area"
                name="area"
                value={formValues.area}
                onChange={handleChange}
                type="text"
                placeholder="Ex: Área Comum"
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="departamento">DEPARTAMENTO</CampoLabel>
              <CampoInput
                id="departamento"
                name="departamento"
                value={formValues.departamento}
                onChange={handleChange}
                type="text"
                placeholder="Ex: Manutenção"
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="responsavel">
                <span className="labelIcone">
                  <User size={12} />
                  RESPONSÁVEL <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="responsavel"
                name="responsavel"
                value={formValues.responsavel}
                onChange={handleChange}
                type="text"
                placeholder="Nome do técnico responsável"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="dataInspecao">
                <span className="labelIcone">
                  <Calendar size={12} />
                  DATA DA INSPEÇÃO <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="data_inspecao"
                name="data_inspecao"
                value={formValues.data_inspecao}
                onChange={handleChange}
                type="date"
                min="1900-01-01"
                max="2099-12-31"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="revisao">
                <span className="labelIcone">
                  <Hash size={12} />
                  REVISÃO
                </span>
                </CampoLabel>
              <CampoInput
                id="revisao"
                name="revisao"
                value={formValues.revisao}
                onChange={handleChange}
                type="text"
              />
            </CampoContainer>
          </FormFieldset>

          {/* Ação principal do formulário, mantida no rodapé da tela. */}
          <FormFooter >
            {/* type="submit" dispara o onSubmit do FormContainer. */}
            <SalvarButton type="submit" disabled={isSalvando}>
              {isSalvando ? "Salvando..." : "Salvar e Continuar"}
            </SalvarButton>
          </FormFooter>
        </FormContainer>
      </DadosGeraisContainer>
    </>
  );
};
