import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BottomNav } from "../../componentes/Components/BottomNav";
import { TopBar } from "../../componentes/Components/TopBar";
import { api } from "../../Services/api";
import { NovosRelatorios } from "./components/NovosRelatorios";
import { RelatoriosRecentes } from "./components/RelatoriosRecentes";
import { ResumoRelatorios } from "./components/ResumoRelatorios";
import { Saudacao } from "./components/Saudacao";

type Relatorio = {
    id: number;
    titulo: string;
    cliente: string;
    tempo: string;
    status: string;
}

type OcorrenciaResponse = {
    id: number;
    titulo: string;
    cliente: string;
    status: "DRAFT" | "FINALIZADA";
    criadoEm?: string;
}

export const Home = () => {
    const navigate = useNavigate();
    const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
    const [isCarregandoRecentes, setIsCarregandoRecentes] = useState(true);
    const [erroRecentes, setErroRecentes] = useState("");

    const formatarStatus = (status: OcorrenciaResponse["status"]) => {
        return status === "FINALIZADA" ? "Finalizado" : "Rascunho";
    };

    const formatarTempo = (data?: string) => {
        if (!data) {
            return "recente";
        }

        return new Intl.DateTimeFormat("pt-BR").format(new Date(data));
    };

    useEffect(() => {
        const buscarRelatoriosRecentes = async () => {
            try {
                setIsCarregandoRecentes(true);
                setErroRecentes("");

                const response = await api.get<OcorrenciaResponse[]>("/ocorrencias/buscarUltimasTresOcorrencia");

                const relatoriosRecentes = response.data.slice(0, 3).map((ocorrencia) => ({
                    id: ocorrencia.id,
                    titulo: ocorrencia.titulo,
                    cliente: ocorrencia.cliente,
                    tempo: formatarTempo(ocorrencia.criadoEm),
                    status: formatarStatus(ocorrencia.status),
                }));

                setRelatorios(relatoriosRecentes);
            } catch {
                setErroRecentes("Erro ao carregar ocorrências recentes");
            } finally {
                setIsCarregandoRecentes(false);
            }
        };

        buscarRelatoriosRecentes();
    }, []);

    const continuarEdicao = (relatorioId: number) => {
        navigate(`/ocorrencias/${relatorioId}/observacoes`);
    };

    const visualizarRelatorio = (relatorioId: number) => {
        navigate(`/ocorrencias/${relatorioId}/pre-visualizacao`);
    };

    return (
        <>
            <TopBar title="Home" showLogo buttomPerfil />

            <Saudacao />

            <ResumoRelatorios />

            <NovosRelatorios />

            <RelatoriosRecentes
                relatorios={relatorios}
                isCarregando={isCarregandoRecentes}
                mensagemErro={erroRecentes}
                onContinuarEdicao={continuarEdicao}
                onVisualizar={visualizarRelatorio}
            />

            <BottomNav />
        </>
    )
}
