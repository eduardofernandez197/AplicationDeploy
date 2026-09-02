import { TopBar } from "../../componentes/Components/TopBar";
import { FotoModal } from "../../componentes/Components/FotoModal";
import {
  AcoesFooter,
  BotaoAcao,
  FeedbackMessage,
  FotoFigure,
  FotoIndisponivel,
  FotosRelatorioGrid,
  HeaderContainer,
  HeaderIcone,
  HeaderTexto,
  InfoItem,
  NumeroFoto,
  ObservacaoContainer,
  ObservacaoDescricao,
  ObservacaoHeader,
  ObservacaoHeaderTexto,
  ObservacaoNumero,
  ObservacoesLista,
  PreVisualizacaoContainer,
  RegistroFotografico,
  RegistroTitulo,
  RelatorioAssinaturaFooter,
  RelatorioCard,
  RelatorioCliente,
  RelatorioInfoGrid,
  RelatorioTipo,
  RelatorioTitulo,
  SectionInfContainer,
} from "./style";
import { FileText } from "lucide-react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";

type DadosGerais = {
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

type Observacao = {
  id: number;
  titulo: string;
  descricao: string;
  fotos?: {
    id: number;
    urlFoto: string;
  }[];
};

export const PreVisualizacao = () => {
  const [dadosGerais, setDadosGerais] = useState<DadosGerais>({
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

  const [observacoes, setObservacoes] = useState<Observacao[]>([]);
  const [fotoModal, setFotoModal] = useState<{ url: string; titulo: string } | null>(null);
  const [isCarregando, setIsCarregando] = useState(true);
  const [mensagemErro, setMensagemErro] = useState("");

  const { ocorrenciaId } = useParams();

  const formatarNumero = (numero: number) => {
    return String(numero).padStart(2, "0");
  };

  const montarUrlFoto = (urlFoto: string) => {
    return `http://localhost:8080/arquivos/${urlFoto.replace("ocorrencias/", "")}`;
  };

  useEffect(() => {
    const buscarDadosGerais = async () => {
      try {
        setIsCarregando(true);
        setMensagemErro("");

        const responseDados = await api.get(`/ocorrencias/${ocorrenciaId}`);
        const responseObservacoes = await api.get(
          `/ocorrencias/${ocorrenciaId}/observacoes`
        );

        setDadosGerais(responseDados.data);
        setObservacoes(responseObservacoes.data);
      } catch (error) {
        const status = (error as { response?: { status?: number } }).response?.status;
        setMensagemErro(status === 404 ? "Ocorrência não encontrada" : "Erro ao carregar pré-visualização");
      } finally {
        setIsCarregando(false);
      }
    };

    buscarDadosGerais();
  }, [ocorrenciaId]);

  return (
    <>
      <TopBar title="Pre-visualizacao" ButtomVoltar />

      <PreVisualizacaoContainer aria-label="Pre-visualizacao do relatorio">
        {isCarregando ? (
          <FeedbackMessage $variant="loading">
            Carregando pré-visualização...
          </FeedbackMessage>
        ) : mensagemErro ? (
          <FeedbackMessage $variant="error" role="alert">
            {mensagemErro}
          </FeedbackMessage>
        ) : (
          <>
        <section aria-label="Resumo do relatorio">
          <RelatorioCard>
            <HeaderContainer>
              <HeaderIcone>
                <FileText size={16} />
              </HeaderIcone>

              <HeaderTexto>
                <strong>TechReport</strong>
                <p>Relatorio Tecnico</p>
              </HeaderTexto>
            </HeaderContainer>

            <SectionInfContainer>
              <RelatorioTipo>RELATORIO TECNICO DE INSPECAO</RelatorioTipo>
              <RelatorioTitulo>{dadosGerais.titulo}</RelatorioTitulo>
              <RelatorioCliente>{dadosGerais.cliente}</RelatorioCliente>
            </SectionInfContainer>

            <RelatorioInfoGrid aria-label="Informacoes gerais">
              <InfoItem className="span-3">
                <span>LOCALIZACAO</span>
                <strong>{dadosGerais.localizacao}</strong>
              </InfoItem>

              <InfoItem className="span-3">
                <span>RESPONSAVEL</span>
                <strong>{dadosGerais.responsavel}</strong>
              </InfoItem>

              <InfoItem className="span-3">
                <span>DATA</span>
                <strong>{dadosGerais.data_inspecao}</strong>
              </InfoItem>

              <InfoItem className="span-3">
                <span>REVISAO</span>
                <strong>{dadosGerais.revisao}</strong>
              </InfoItem>

              <InfoItem className="span-2">
                <span>SETOR</span>
                <strong>{dadosGerais.setor}</strong>
              </InfoItem>

              <InfoItem className="span-2">
                <span>AREA</span>
                <strong>{dadosGerais.area}</strong>
              </InfoItem>

              <InfoItem className="span-2">
                <span>DEPTO.</span>
                <strong>{dadosGerais.departamento}</strong>
              </InfoItem>
            </RelatorioInfoGrid>
          </RelatorioCard>
        </section>

        <ObservacoesLista aria-label="Observacoes do relatorio">
          {observacoes.map((observacao, observacaoIndex) => {
            const numeroObservacao = formatarNumero(observacaoIndex + 1);

            return (
              <ObservacaoContainer key={observacao.id}>
                <ObservacaoHeader>
                  <ObservacaoNumero>{numeroObservacao}</ObservacaoNumero>

                  <ObservacaoHeaderTexto>
                    <strong>OBSERVACAO {numeroObservacao}</strong>
                    <h2>{observacao.titulo}</h2>
                  </ObservacaoHeaderTexto>
                </ObservacaoHeader>

                <ObservacaoDescricao>
                  <h3>OBSERVACOES</h3>
                  <p>{observacao.descricao}</p>
                </ObservacaoDescricao>

                <RegistroFotografico>
                  <RegistroTitulo>
                    <h3>REGISTRO FOTOGRAFICO</h3>
                    <strong>- OBSERVACAO {numeroObservacao}</strong>
                  </RegistroTitulo>

                  {observacao.fotos && observacao.fotos.length > 0 ? (
                    <FotosRelatorioGrid>
                      {observacao.fotos.map((foto, fotoIndex) => (
                        <FotoFigure
                          key={fotoIndex}
                          onClick={() =>
                            setFotoModal({
                              url: montarUrlFoto(foto.urlFoto),
                              titulo: `Foto ${formatarNumero(fotoIndex + 1)}`,
                            })
                          }
                        >
                          <NumeroFoto>
                            Foto {formatarNumero(fotoIndex + 1)}
                          </NumeroFoto>
                          <img
                            src={montarUrlFoto(foto.urlFoto)}
                            alt={`Registro fotografico da observacao ${numeroObservacao}`}
                          />
                        </FotoFigure>
                      ))}
                    </FotosRelatorioGrid>
                  ) : (
                    <FotosRelatorioGrid>
                      <FotoFigure>
                        <NumeroFoto>Foto 01</NumeroFoto>
                        <FotoIndisponivel>Imagem nao disponivel</FotoIndisponivel>
                      </FotoFigure>
                    </FotosRelatorioGrid>
                  )}
                </RegistroFotografico>
              </ObservacaoContainer>
            );
          })}
        </ObservacoesLista>

        <RelatorioAssinaturaFooter aria-label="Informacoes do relatorio">
          <span>TechReport - {dadosGerais.data_inspecao}</span>
          <strong>{dadosGerais.responsavel}</strong>
        </RelatorioAssinaturaFooter>

        <AcoesFooter aria-label="Acoes do relatorio">
          <BotaoAcao className="documento" type="button">
            Gerar Documento
          </BotaoAcao>

          <BotaoAcao className="email" type="button">
            Enviar E-mail
          </BotaoAcao>
        </AcoesFooter>
          </>
        )}

        {fotoModal && (
          <FotoModal
            fotoUrl={fotoModal.url}
            titulo={fotoModal.titulo}
            onFechar={() => setFotoModal(null)}
          />
        )}
      </PreVisualizacaoContainer>
    </>
  );
};
