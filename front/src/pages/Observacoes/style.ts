import styled from 'styled-components';

// Container principal da tela abaixo da TopBar.
export const ObservacoesContainer = styled.section`
  flex: 1;
  width: 100%;
  min-height: 0;
  padding: 16px 17px 90px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
`;

// Indicador visual da etapa 2/2.
export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 20px;
`;

// Agrupa as duas faixas preenchidas do progresso.
export const ProgressBar = styled.div`
  flex: 1;
  display: flex;
  gap: 7px;
  height: 6px;
`;

export const ProgressBarActive = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 999px;
  background-color: #ff6b00;
`;

export const ProgressStep = styled.span`
  color: #475569;
  font-size: 11px;
  font-weight: 500;
`;

// Estado vazio exibido quando ainda nao existem observacoes.
export const ObservacoesVazioContainer = styled.div`
  flex: 1;
  padding-top: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  text-align: center;

  h2 {
    color: #1a1d23;
    font-size: 13px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    margin: 0;
  }

  p {
    color: #6b7280;
    font-size: 12px;
    font-weight: 400;
    margin: 0;
  }
`;

// Caixa visual que envolve o icone do estado vazio.
export const ContainerIconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 14px;

  background-color: #f0f1f3;
  color: #64748b;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeedbackMessage = styled.div<{ $variant?: "error" | "loading" }>`
  width: 100%;
  padding: 12px;

  border: 1px solid ${({ $variant }) => ($variant === "error" ? "#fecaca" : "#e2e8f0")};
  border-radius: 12px;
  background-color: ${({ $variant }) => ($variant === "error" ? "#fef2f2" : "#ffffff")};
  color: ${({ $variant }) => ($variant === "error" ? "#b91c1c" : "#64748b")};

  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
`;

export const ListaObservacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ObservacaoCard = styled.article`
  padding: 14px;

  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ObservacaoCardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const ObservacaoNumero = styled.strong`
  width: 34px;
  height: 34px;

  border-radius: 11px;
  background-color: #ff6b00;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  font-size: 13px;
  font-weight: 800;
`;

export const ObservacaoConteudo = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    color: #64748b;
    font-size: 11px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0.4px;
  }

  strong {
    color: #111827;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.25;
  }

  p {
    color: #475569;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.35;
  }
`;

export const StatusCompleto = styled.span`
  width: fit-content;
  padding: 3px 8px;

  border-radius: 999px;
  background-color: #dcfce7;
  color: #059669;

  font-size: 11px;
  font-weight: 700;
  line-height: 1;
`;

export const ObservacaoMeta = styled.span`
  color: #64748b;
  font-size: 12px;
  font-weight: 400;
`;

export const ObservacaoAcoes = styled.div`
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;

  display: grid;
  grid-template-columns: 1fr 42px;
  gap: 10px;
`;

export const EditarButton = styled.button`
  height: 34px;

  border: none;
  border-radius: 10px;
  background-color: #fff7ed;
  color: #ff6b00;

  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const ExcluirButton = styled.button`
  width: 42px;
  height: 34px;

  border: none;
  border-radius: 10px;
  background-color: #fef2f2;
  color: #ef4444;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmacaoOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;

  padding: 20px;
  background-color: rgba(15, 23, 42, 0.38);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmacaoBox = styled.div`
  width: 100%;
  max-width: 360px;
  padding: 16px;

  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.18);

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    margin: 0;
    color: #111827;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: #64748b;
    font-size: 13px;
    line-height: 1.4;
  }
`;

export const ConfirmacaoAcoes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 6px;
`;

export const CancelarExclusaoButton = styled.button`
  height: 42px;

  border: none;
  border-radius: 12px;
  background-color: #f1f5f9;
  color: #111827;

  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

export const ConfirmarExclusaoButton = styled.button`
  height: 42px;

  border: none;
  border-radius: 12px;
  background-color: #ef4444;
  color: #ffffff;

  font-size: 13px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    background-color: #fecaca;
    cursor: not-allowed;
  }
`;

export const PreVisualizacaoButton = styled.button`
  width: 100%;
  height: 44px;

  border: none;
  border-radius: 14px;
  background-color: #f1f5f9;
  color: #111827;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 13px;
  font-weight: 700;
  cursor: pointer;

  .buttonIcon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

// Rodape da tela com a acao principal.
export const ObservacoesFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 12px 17px 14px;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e7eb;
`;

// Botao principal para adicionar uma nova observacao.
export const AdicionarObservacaoButton = styled.button`
  width: 100%;
  height: 48px;

  border: none;
  border-radius: 14px;
  background-color: #f97316;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 13px;
  font-weight: 700;
  cursor: pointer;

  .buttonIcon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 400;
    line-height: 1;
  }  
`;
