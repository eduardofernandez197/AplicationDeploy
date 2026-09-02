import styled from 'styled-components';

// Container principal da tela abaixo da TopBar.
export const ObservacaoContainer = styled.section`
  flex: 1;
  width: 100%;
  min-height: 0;
  padding: 16px 17px 0;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
`;

// Card superior que identifica a observacao atual.
export const ObservacaoCard = styled.div`
  width: 100%;
  padding: 12px;
  margin-bottom: 18px;

  border-radius: 14px;
  background-color: #fff7ed;

  display: flex;
  align-items: center;
  gap: 12px;
`;

// Bloco laranja com o numero da observacao.
export const ObservacaoNumero = styled.strong`
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background-color: #ff6b00;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 800;
`;

// Textos do card de identificacao da observacao.
export const ObservacaoTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  h2 {
    margin: 0;
    color: #ff6b00;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.3px;
  }

  p {
    margin: 0;
    color: #9a3412;
    font-size: 11px;
    font-weight: 400;
  }
`;

// Formulario ocupa o espaco restante para manter o botao no final.
export const FormularioObservacao = styled.form`
  flex: 1;
  min-height: 0;

  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 11px 12px;
  margin-bottom: 16px;

  border: 1px solid #fecaca;
  border-radius: 12px;
  background-color: #fef2f2;
  color: #b91c1c;

  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
`;

// Agrupa label e campo de entrada.
export const CampoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
`;

export const CampoLabel = styled.label`
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;

  .required {
    color: #ff6b00;
    font-size: 16px;
  }
`;

export const CampoInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;

  border: 1px solid #e2e8f0;
  border-radius: 11px;
  background-color: #ffffff;

  color: #111827;
  font-size: 16px;
  font-weight: 400;

  &::placeholder {
    color: #94a3b8;
    opacity: 1;
  }
`;

export const CampoTextarea = styled.textarea`
  width: 100%;
  min-height: 98px;
  padding: 11px;

  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #ffffff;

  color: #111827;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  resize: none;

  &::placeholder {
    color: #94a3b8;
    opacity: 1;
  }
`;

// Secao de selecao/envio de fotos.
export const FotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// Titulo da area de fotos com icone.
export const FotosTitulo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;

  svg {
    color: #ff6b00;
    flex-shrink: 0;
  }
`;

// Organiza os botoes de tirar foto e escolher da galeria.
export const FotosAcoes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

// Botao usado para escolher a origem da foto.
export const BotaoFoto = styled.label<{ $active?: boolean }>`
  min-height: 78px;

  border: 1.5px dashed ${({ $active }) => ($active ? '#ff6b00' : '#e2e8f0')};
  border-radius: 14px;
  background-color: ${({ $active }) => ($active ? '#fff7ed' : '#f8fafc')};
  color: ${({ $active }) => ($active ? '#ff6b00' : '#64748b')};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;

  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

export const FotosPreviewContainer = styled.div`
  padding: 12px;

  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FotosPreviewTitulo = styled.strong`
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;
`;

// Lista das fotos escolhidas antes de salvar a observacao.
export const FotosPreviewLista = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export const FotoPreviewCard = styled.figure`
  position: relative;
  width: 100%;
  padding: 6px;
  margin: 0;
  overflow: hidden;

  border: 1px solid #cbd5e1;
  border-radius: 12px;
  background-color: #f8fafc;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.06);
`;

export const FotoPreviewLegenda = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1;

  padding: 4px 8px;
  border-radius: 999px;
  background-color: #111827;
  color: #ffffff;

  font-size: 11px;
  font-weight: 700;
`;

export const FotoPreviewImagem = styled.img`
  display: block;
  width: 100%;
  height: 118px;
  border-radius: 9px;
  object-fit: cover;
`;

export const FotoExcluirButton = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  z-index: 1;

  width: 28px;
  height: 28px;

  border: none;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.92);
  color: #ef4444;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

// Rodape do formulario com a acao principal.
export const FormularioFooter = styled.footer`
  margin-top: auto;
  padding: 16px 0 14px;
  background-color: #f5f5f5;
`;

export const BotaoSalvarObservacao = styled.button`
  width: 100%;
  height: 52px;

  border: none;
  border-radius: 14px;
  background-color: #ff6b00;
  color: #ffffff;

  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    background-color: #ffc199;
    cursor: not-allowed;
  }
`;
