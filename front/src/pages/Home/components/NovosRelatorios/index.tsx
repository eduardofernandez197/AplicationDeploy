import { useNavigate } from "react-router";
import { NovoRelatorioButton, NovoRelatorioSection, NovoRelatorioTexto } from "./style";

export const NovosRelatorios = () => {
    const navigate = useNavigate();

    const irParaDadosGerais = () => {
        navigate("/DadosGerais");
  };
    return (
        <NovoRelatorioSection aria-label="Criar novo relatório">
            <NovoRelatorioButton onClick={irParaDadosGerais}type="button">
                <span className="icon">+</span>
                <NovoRelatorioTexto>
                    <span>Novo Relatório</span>
                    <small>Criar um novo relatório de inspeção</small>
                </NovoRelatorioTexto>
                <span className="arrow">›</span>
            </NovoRelatorioButton>
        </NovoRelatorioSection>
    )
}
