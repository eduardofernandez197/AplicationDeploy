import {
    ContinuarEdicaoButton,
    FeedbackMessage,
    Recentes,
    RecentesSection,
    RelatorioCard,
    RelatorioMeta,
    RelatorioStatus,
    RelatorioTitulo,
    VisualizarButton
} from "./style";

type Relatorio = {
    id: number;
    titulo: string;
    cliente: string;
    tempo: string;
    status: string;
}

type RelatoriosRecentesProps = {
    relatorios: Relatorio[];
    isCarregando: boolean;
    mensagemErro: string;
    onContinuarEdicao: (relatorioId: number) => void;
    onVisualizar: (relatorioId: number) => void;
}

export const RelatoriosRecentes = ({
    relatorios,
    isCarregando,
    mensagemErro,
    onContinuarEdicao,
    onVisualizar,
}: RelatoriosRecentesProps) => {
    return (
        <RecentesSection aria-labelledby="recentes-title">
            <Recentes id="recentes-title">Recentes</Recentes>

            {isCarregando ? (
                <FeedbackMessage>Carregando ocorrências recentes...</FeedbackMessage>
            ) : mensagemErro ? (
                <FeedbackMessage $variant="error" role="alert">
                    {mensagemErro}
                </FeedbackMessage>
            ) : relatorios.length === 0 ? (
                <FeedbackMessage>Nenhum relatório criado ainda.</FeedbackMessage>
            ) : (
                relatorios.map((relatorio) => (
                    <RelatorioCard key={relatorio.id}>
                        <RelatorioTitulo>{relatorio.titulo}</RelatorioTitulo>
                        <RelatorioMeta>{relatorio.cliente} - {relatorio.tempo}</RelatorioMeta>
                        <RelatorioStatus>{relatorio.status}</RelatorioStatus>

                        {relatorio.status === "Rascunho" ? (
                            <ContinuarEdicaoButton type="button" onClick={() => onContinuarEdicao(relatorio.id)}>
                                Continuar edição
                            </ContinuarEdicaoButton>
                        ) : (
                            <VisualizarButton type="button" onClick={() => onVisualizar(relatorio.id)}>
                                Visualizar
                            </VisualizarButton>
                        )}
                    </RelatorioCard>
                ))
            )}
        </RecentesSection>
    )
}
