import { ArrowLeft, User } from "lucide-react";
import { ButtonIconPerfil, ButtonIconVoltar, LogoImage, TopBarContainer, TopBarEsquerda, TopBarTitle } from "./styles";
import logo from '../../../assets/imagens/logo.png';
import { useNavigate } from "react-router";

type TopBarProps = {
    title: string;
    showLogo?: boolean;
    ButtomVoltar?: boolean;
    buttomPerfil?: boolean;
}

export const TopBar = ({ title, showLogo = false, ButtomVoltar = false, buttomPerfil = false }: TopBarProps) => {
  const navigate = useNavigate();

  const voltarPaginaAnterior = () => {
    navigate(-1);
  };

    return (
        <TopBarContainer>
            <TopBarEsquerda>
                {ButtomVoltar && (
                    <ButtonIconVoltar onClick={voltarPaginaAnterior} type="button" aria-label="Voltar">
                        <ArrowLeft size={22} strokeWidth={2} />
                    </ButtonIconVoltar>
                )}

                {showLogo && (
                    <LogoImage src={logo} alt="Ocorrencias"/>
                )}

                <TopBarTitle>{title}</TopBarTitle>
            </TopBarEsquerda>

            {buttomPerfil && (
                <ButtonIconPerfil type="button" aria-label="Perfil">
                    <User size={20} strokeWidth={2} />
                </ButtonIconPerfil>
            )}
        </TopBarContainer>
    )
}
