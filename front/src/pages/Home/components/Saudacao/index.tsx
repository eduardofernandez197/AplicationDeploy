import { NomeContainer, Saudacoes } from "./style";

export const Saudacao = () => {
    return (
        <Saudacoes>
            <p aria-label="Saudação do usuário">Bom dia,</p>
            <NomeContainer>
                <span id="saudacao">Eng. Neto Silva</span>
                <span role="img" aria-label="engenheiro">👷‍♂️</span>
            </NomeContainer>
        </Saudacoes>
    );
};
