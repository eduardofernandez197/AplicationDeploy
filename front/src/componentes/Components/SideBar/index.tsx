import { NewOcorrenciaButton, SideBarContainer } from './styles';

type SideBarProps = {
    sideBarOpen: boolean;
    createOcorrencia: () => void;
}

export const SideBar = (props: SideBarProps) => {
    return  <SideBarContainer $open={props.sideBarOpen}>
                <NewOcorrenciaButton onClick={props.createOcorrencia}>
                    Nova Ocorrência
                </NewOcorrenciaButton>
            </SideBarContainer>
}
