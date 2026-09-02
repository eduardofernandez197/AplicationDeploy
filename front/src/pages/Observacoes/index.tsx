import { ClipboardList, Pencil, Trash2 } from "lucide-react";
import { TopBar } from "../../componentes/Components/TopBar"
import { useNavigate, useParams } from "react-router";
import {
    AdicionarObservacaoButton,
    CancelarExclusaoButton,
    ConfirmacaoAcoes,
    ConfirmacaoBox,
    ConfirmacaoOverlay,
    ConfirmarExclusaoButton,
    ContainerIconBox,
    EditarButton,
    ExcluirButton,
    FeedbackMessage,
    ListaObservacoes,
    ObservacaoAcoes,
    ObservacaoCard,
    ObservacaoCardHeader,
    ObservacaoConteudo,
    ObservacaoMeta,
    ObservacaoNumero,
    ObservacoesContainer,
    ObservacoesFooter,
    ObservacoesVazioContainer,
    PreVisualizacaoButton,
    ProgressBar,
    ProgressBarActive,
    ProgressContainer,
    ProgressStep,
    StatusCompleto
} from "./style";

import {
    Eye
} from "lucide-react";

import { 
    useEffect,
    useState 
} from "react";
import { api } from "../../Services/api";

type Observacao = {
    id: number;
    titulo: string;
    descricao: string;
    fotos?: {
        id: number;
        urlFoto: string;
    }[];
}

export const Observacoes = () => {

    const navigate = useNavigate();
    const [observacoes, setObservacoes] = useState<Observacao[]>([]);
    const [isCarregando, setIsCarregando] = useState(true);
    const [isExcluindo, setIsExcluindo] = useState(false);
    const [mensagemErro, setMensagemErro] = useState("");
    const [observacaoParaExcluir, setObservacaoParaExcluir] = useState<Observacao | null>(null);

    const { ocorrenciaId } = useParams();

    useEffect(() => {
        const buscarObservacoes = async() => {
            try {
                setIsCarregando(true);
                setMensagemErro("");

                const response = await api.get(`/ocorrencias/${ocorrenciaId}/observacoes`)

                setObservacoes(response.data);
            } catch {
                setMensagemErro("Erro ao carregar observações");
            } finally {
                setIsCarregando(false);
            }
        }
        buscarObservacoes();
    }, [ocorrenciaId]);
    

    const adicionaObservacao = () => {
        navigate(`/ocorrencias/${ocorrenciaId}/observacoes/nova`);
    };

    const irParaPreVisualizacao = () => {
        navigate(`/ocorrencias/${ocorrenciaId}/pre-visualizacao`);
    };

    const editarObservacao = (observacaoId: number) => {
        navigate(`/ocorrencias/${ocorrenciaId}/observacoes/${observacaoId}/editar`);
    };

    const confirmarExclusaoObservacao = async () => {
        if (!observacaoParaExcluir || isExcluindo) {
            return;
        }

        try {
            setIsExcluindo(true);
            setMensagemErro("");

            await api.delete(`/ocorrencias/${ocorrenciaId}/observacoes/${observacaoParaExcluir.id}`);

            setObservacoes((observacoesAtuais) =>
                observacoesAtuais.filter((observacao) => observacao.id !== observacaoParaExcluir.id)
            );
            setObservacaoParaExcluir(null);
        } catch {
            setMensagemErro("Erro ao excluir observação");
        } finally {
            setIsExcluindo(false);
        }
    };

    const formatarNumeroObservacao = (index: number) => {
        return String(index + 1).padStart(2, "0");
    };

    return (
        <>
            <TopBar title="Observações" ButtomVoltar />

            <ObservacoesContainer aria-label="Observações">
                {/* Indicador visual da etapa atual do formulário. */}
                <ProgressContainer aria-label="Progresso do formulário">
                    <ProgressBar>
                        <ProgressBarActive />
                        <ProgressBarActive />
                    </ProgressBar>

                    <ProgressStep>2/2</ProgressStep>
                </ProgressContainer>

                {/* Estado vazio mostrado antes de adicionar observações. */}
                {isCarregando ? (
                  <FeedbackMessage $variant="loading">
                    Carregando observações...
                  </FeedbackMessage>
                ) : mensagemErro ? (
                  <FeedbackMessage $variant="error" role="alert">
                    {mensagemErro}
                  </FeedbackMessage>
                ) : observacoes.length === 0 ? (
                  <ObservacoesVazioContainer>
                    <ContainerIconBox aria-hidden="true">
                        <ClipboardList size={28} strokeWidth={2} />
                    </ContainerIconBox>

                    <h2>Nenhuma observação ainda</h2>

                    <p>
                        Toque em "Adicionar Observação" para começar
                    </p>
                  </ObservacoesVazioContainer>
                ) : (
                  <ListaObservacoes>
                    {observacoes.map((observacao, index) => {
                      const quantidadeFotos = observacao.fotos?.length ?? 0;
                      const textoFotos = quantidadeFotos === 1 ? "foto" : "fotos";

                      return (
                      <ObservacaoCard key={observacao.id}>
                        <ObservacaoCardHeader>
                            <ObservacaoNumero>{formatarNumeroObservacao(index)}</ObservacaoNumero>

                            <ObservacaoConteudo>
                                <h3>OBSERVAÇÃO {formatarNumeroObservacao(index)}</h3>
                                <StatusCompleto>Completo</StatusCompleto>
                                <strong>{observacao.titulo}</strong>
                                <p>{observacao.descricao}</p>
                                <ObservacaoMeta>{quantidadeFotos} {textoFotos}</ObservacaoMeta>
                            </ObservacaoConteudo>
                        </ObservacaoCardHeader>

                        <ObservacaoAcoes>
                            <EditarButton type="button" onClick={() => editarObservacao(observacao.id)}>
                                <Pencil size={14} strokeWidth={2} />
                                <span>Editar</span>
                            </EditarButton>

                            <ExcluirButton
                                type="button"
                                aria-label="Excluir observação"
                                onClick={() => setObservacaoParaExcluir(observacao)}
                            >
                                <Trash2 size={15} strokeWidth={2} />
                            </ExcluirButton>
                        </ObservacaoAcoes>
                      </ObservacaoCard>
                      );
                    })}
                  </ListaObservacoes>
                )}  


                {/* Ação principal da tela. */}
                <ObservacoesFooter>
                    {observacoes.length > 0 && (
                        <PreVisualizacaoButton onClick={irParaPreVisualizacao}>
                            <span className="buttonIcon"><Eye/></span>
                            <span>Pré-visualizar Relatório</span>
                        </PreVisualizacaoButton>
                    )}

                    <AdicionarObservacaoButton onClick={adicionaObservacao} type="button">
                        <span className="buttonIcon">+</span>
                        <span>Adicionar Observação</span>
                    </AdicionarObservacaoButton>
                </ObservacoesFooter>

                {observacaoParaExcluir && (
                    <ConfirmacaoOverlay role="dialog" aria-modal="true">
                        <ConfirmacaoBox>
                            <h2>Excluir observação?</h2>
                            <p>Essa ação remove a observação selecionada e suas fotos do relatório.</p>

                            <ConfirmacaoAcoes>
                                <CancelarExclusaoButton
                                    type="button"
                                    onClick={() => setObservacaoParaExcluir(null)}
                                    disabled={isExcluindo}
                                >
                                    Cancelar
                                </CancelarExclusaoButton>

                                <ConfirmarExclusaoButton
                                    type="button"
                                    onClick={confirmarExclusaoObservacao}
                                    disabled={isExcluindo}
                                >
                                    {isExcluindo ? "Excluindo..." : "Excluir"}
                                </ConfirmarExclusaoButton>
                            </ConfirmacaoAcoes>
                        </ConfirmacaoBox>
                    </ConfirmacaoOverlay>
                )}
            </ObservacoesContainer>
        </>
    )
}
