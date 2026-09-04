import { Camera, Image, ImageIcon, Trash2 } from "lucide-react";
import { TopBar } from "../../componentes/Components/TopBar";
import { FotoModal } from "../../componentes/Components/FotoModal";
import { useNavigate, useParams } from "react-router";
import { useEffect, useMemo, useState } from "react";
import {
    BotaoFoto,
    BotaoSalvarObservacao,
    CampoContainer,
    CampoInput,
    CampoLabel,
    CampoTextarea,
    ErrorMessage,
    FormularioFooter,
    FormularioObservacao,
    FotosAcoes,
    FotosContainer,
    FotoExcluirButton,
    FotoPreviewCard,
    FotosPreviewContainer,
    FotoPreviewImagem,
    FotoPreviewLegenda,
    FotosPreviewLista,
    FotosPreviewTitulo,
    FotosTitulo,
    ObservacaoCard,
    ObservacaoContainer,
    ObservacaoNumero,
    ObservacaoTexto
} from "./style";
import { api, montarUrlArquivo } from "../../Services/api";

type FotoSalva = {
    id: number;
    urlFoto: string;
};

export const ObservacoesForm = () => {

    // Estados controlam o que o usuario digita antes de salvar.
    const [titulo, setTitulo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    // Lista de fotos selecionadas para enviar no FormData.
    const [fotos, setFotos] = useState<File[]>([]);
    const [fotosSalvas, setFotosSalvas] = useState<FotoSalva[]>([]);
    const [fotoModal, setFotoModal] = useState<{ url: string; titulo: string } | null>(null);
    const [isSalvando, setIsSalvando] = useState(false);
    const [mensagemErro, setMensagemErro] = useState("");

    const navigate = useNavigate();

    const { ocorrenciaId, observacaoId } = useParams();
    const estaEditando = Boolean(observacaoId);

    const fotosPreview = useMemo(() => {
        return fotos.map((foto) => ({
            nome: foto.name,
            url: URL.createObjectURL(foto),
        }));
    }, [fotos]);

    const tiposPermitidos = ["image/jpeg", "image/png"];

    const validarFotosSelecionadas = (arquivos: File[]) => {
        const possuiArquivoInvalido = arquivos.some((arquivo) => !tiposPermitidos.includes(arquivo.type));

        if (possuiArquivoInvalido) {
            setMensagemErro("Envie apenas imagens JPG ou PNG");
            return false;
        }

        setMensagemErro("");
        return true;
    };

    const excluirFotoSalva = async (fotoId: number) => {
        if (!observacaoId) {
            return;
        }

        try {
            setMensagemErro("");

            await api.delete(`/ocorrencias/${ocorrenciaId}/observacoes/${observacaoId}/fotos/${fotoId}`);

            setFotosSalvas((fotosAtuais) => fotosAtuais.filter((foto) => foto.id !== fotoId));
        } catch {
            setMensagemErro("Erro ao excluir foto");
        }
    };

    const excluirFotoNova = (index: number) => {
        setFotos((fotosAtuais) => fotosAtuais.filter((_, fotoIndex) => fotoIndex !== index));
    };

    useEffect(() => {
        const buscarObservacao = async () => {
            if (!observacaoId) {
                return;
            }

            const response = await api.get(`/ocorrencias/${ocorrenciaId}/observacoes/${observacaoId}`);

            setTitulo(response.data.titulo);
            setDescricao(response.data.descricao);
            setFotosSalvas(response.data.fotos ?? []);
        };

        buscarObservacao();
    }, [ocorrenciaId, observacaoId]);

    useEffect(() => {
        return () => {
            fotosPreview.forEach((foto) => URL.revokeObjectURL(foto.url));
        };
    }, [fotosPreview]);

    const SalvarObservacao = async (event: React.FormEvent<HTMLFormElement>) => {
        // Mantem o controle do envio dentro do React.
        event.preventDefault();

        if (isSalvando) {
            return;
        }

        setMensagemErro("");

        // Validacoes simples antes de enviar para o App/backend.
        if (!estaEditando && !titulo.trim()) {
            setMensagemErro("Informe o título da observação");
            return;
        }

        if (!estaEditando && !descricao.trim()) {
            setMensagemErro("Informe a descrição da observação");
            return;
        }

        if (!estaEditando && fotos.length === 0) {
            setMensagemErro("Adicione uma foto");
              return;
        }

        const dadosObservacao = new FormData ();

        dadosObservacao.append("titulo", titulo);
        dadosObservacao.append("descricao", descricao);
        fotos.forEach((foto) => {
            dadosObservacao.append("imagens", foto);
        });

        try {
            setIsSalvando(true);

            if (estaEditando) {
                await api.put(`/ocorrencias/${ocorrenciaId}/observacoes/${observacaoId}`, dadosObservacao)
            } else {
                await api.post(`/ocorrencias/${ocorrenciaId}/observacoes`, dadosObservacao)
            }

            navigate(`/ocorrencias/${ocorrenciaId}/observacoes`);

        } catch {
            setMensagemErro("Erro ao salvar observação");
        } finally {
            setIsSalvando(false);
        }

    };

    return (
        <>
            <TopBar title="Observação 01" ButtomVoltar />

            <ObservacaoContainer aria-label="Formulário da observação">
                {/* Identifica qual observação está sendo preenchida. */}
                <ObservacaoCard>
                    <ObservacaoNumero>01</ObservacaoNumero>

                    <ObservacaoTexto>
                        <h2>OBSERVAÇÃO 01</h2>
                        <p>Preencha os dados e adicione fotos</p>
                    </ObservacaoTexto>
                </ObservacaoCard>

                {/* Formulário principal da observação. */}
                <FormularioObservacao onSubmit={SalvarObservacao}>
                    {mensagemErro && (
                        <ErrorMessage role="alert">
                            {mensagemErro}
                        </ErrorMessage>
                    )}

                    <CampoContainer>
                        <CampoLabel htmlFor="tituloObservacao">
                            TÍTULO DA OBSERVAÇÃO <span className="required">*</span>
                        </CampoLabel>
                        <CampoInput
                            value={titulo}
                            onChange={(event) => setTitulo(event.target.value)}
                            id="tituloObservacao"
                            name="tituloObservacao"
                            type="text"
                            placeholder="Ex: Quadro de distribuição com ferrugem"
                            required={!estaEditando}
                        />
                    </CampoContainer>

                    <CampoContainer>
                        <CampoLabel htmlFor="descricaoObservacao">
                            DESCRIÇÃO / OBSERVAÇÃO TÉCNICA
                        </CampoLabel>
                        <CampoTextarea
                            value={descricao}
                            onChange={(event) => setDescricao(event.target.value)}
                            id="descricaoObservacao"
                            name="descricaoObservacao"
                            placeholder="Descreva detalhadamente o que foi observado, não conformidades, recomendações..."
                        />
                    </CampoContainer>

                    {/* Ações para adicionar fotos na observação. */}
                    <FotosContainer>
                        <FotosTitulo>
                            <ImageIcon size={12} strokeWidth={2} />
                            <span>FOTOS DESTA OBSERVAÇÃO</span>
                        </FotosTitulo>

                        <FotosAcoes>
                          {/* Input escondido que abre a camera do celular. */}
                          <input
                            id="fotoCamera"
                            type="file"
                            accept="image/jpeg,image/png"
                            capture="environment"
                            hidden
                            onChange={(event) => {
                              const arquivos = Array.from(event.target.files ?? []);
                              if (!validarFotosSelecionadas(arquivos)) {
                                event.target.value = "";
                                return;
                              }
                              setFotos((fotosAtuais) => [...fotosAtuais, ...arquivos]);
                              event.target.value = "";
                            }}
                          />

                          {/* O htmlFor conecta esse botao visual ao input com id="fotoCamera". */}
                          <BotaoFoto htmlFor="fotoCamera" $active>
                            <Camera size={22} strokeWidth={2} />
                            <span>Tirar Foto</span>
                          </BotaoFoto>

                          {/* Input escondido que abre a galeria de imagens. */}
                          <input
                            id="fotoGaleria"
                            type="file"
                            accept="image/jpeg,image/png"
                            multiple
                            hidden
                            onChange={(event) => {
                              const arquivos = Array.from(event.target.files ?? []);
                              if (!validarFotosSelecionadas(arquivos)) {
                                event.target.value = "";
                                return;
                              }
                              setFotos((fotosAtuais) => [...fotosAtuais, ...arquivos]);
                              event.target.value = "";
                            }}
                          />

                          {/* O htmlFor conecta esse botao visual ao input com id="fotoGaleria". */}
                          <BotaoFoto htmlFor="fotoGaleria">
                            <Image size={22} strokeWidth={2} />
                            <span>Da Galeria</span>
                          </BotaoFoto>
                        </FotosAcoes>

                        {(fotosSalvas.length > 0 || fotosPreview.length > 0) && (
                            <FotosPreviewContainer>
                                <FotosPreviewTitulo>Fotos adicionadas</FotosPreviewTitulo>

                                <FotosPreviewLista>
                                    {fotosSalvas.map((foto, index) => (
                                        <FotoPreviewCard
                                            key={`salva-${foto.id}`}
                                            onClick={() =>
                                                setFotoModal({
                                                    url: montarUrlArquivo(foto.urlFoto),
                                                    titulo: `Foto ${String(index + 1).padStart(2, "0")}`,
                                                })
                                            }
                                        >
                                            <FotoPreviewLegenda>
                                                Foto {String(index + 1).padStart(2, "0")}
                                            </FotoPreviewLegenda>

                                            <FotoExcluirButton
                                                type="button"
                                                aria-label={`Excluir foto salva ${index + 1}`}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    excluirFotoSalva(foto.id);
                                                }}
                                            >
                                                <Trash2 size={14} strokeWidth={2} />
                                            </FotoExcluirButton>

                                            <FotoPreviewImagem
                                                src={montarUrlArquivo(foto.urlFoto)}
                                                alt={`Foto salva ${index + 1}`}
                                            />
                                        </FotoPreviewCard>
                                    ))}

                                    {fotosPreview.map((foto, index) => (
                                        <FotoPreviewCard
                                            key={`${foto.nome}-${index}`}
                                            onClick={() =>
                                                setFotoModal({
                                                    url: foto.url,
                                                    titulo: `Foto ${String(index + 1).padStart(2, "0")}`,
                                                })
                                            }
                                        >
                                            <FotoPreviewLegenda>
                                                Foto {String(fotosSalvas.length + index + 1).padStart(2, "0")}
                                            </FotoPreviewLegenda>

                                            <FotoExcluirButton
                                                type="button"
                                                aria-label={`Excluir foto ${fotosSalvas.length + index + 1}`}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    excluirFotoNova(index);
                                                }}
                                            >
                                                <Trash2 size={14} strokeWidth={2} />
                                            </FotoExcluirButton>

                                            <FotoPreviewImagem src={foto.url} alt={`Preview da foto ${index + 1}`} />
                                        </FotoPreviewCard>
                                    ))}
                                </FotosPreviewLista>
                            </FotosPreviewContainer>
                        )}
                    </FotosContainer>

                    {/* Ação final do formulário. */}
                    <FormularioFooter>
                        <BotaoSalvarObservacao type="submit" disabled={isSalvando}>
                            {isSalvando ? "Salvando..." : "Salvar Observação"}
                        </BotaoSalvarObservacao>
                    </FormularioFooter>
                </FormularioObservacao>
            </ObservacaoContainer>

            {fotoModal && (
                <FotoModal
                    fotoUrl={fotoModal.url}
                    titulo={fotoModal.titulo}
                    onFechar={() => setFotoModal(null)}
                />
            )}
        </>
    )
}
