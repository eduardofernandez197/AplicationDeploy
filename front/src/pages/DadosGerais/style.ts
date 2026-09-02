import styled from 'styled-components';

// Container principal da tela abaixo da TopBar.
export const DadosGeraisContainer = styled.section`
  flex: 1;
  width: 100%;
  min-height: 0;
  padding: 16px 17px 0;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
`;

// Área do indicador de etapa 1/2.
export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 20px;
`;

// Agrupa as duas faixas do progresso com espaço entre elas.
export const ProgressBar = styled.div`
  flex: 1;
  display: flex;
  gap: 9px;
  height: 6px;
`;

export const ProgressBarActive = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 999px;
  background-color: #ff6b00;
`;

export const ProgressBarInactive = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 999px;
  background-color: #e5e7eb;
`;

export const ProgressStep = styled.span`
  color: #475569;
  font-size: 12px;
  font-weight: 500;
`;

// Formulário ocupa o espaço restante para manter o footer no final.
export const FormContainer = styled.form`
  flex: 1;
  min-height: 0;

  display: flex;
  flex-direction: column;
`;

// Área rolável dos campos do formulário.
export const FormFieldset = styled.fieldset`
  flex: 1;
  min-height: 0;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 14px;

  border: none;
  padding: 0;
  margin: 0;
`;

export const FormLegend = styled.legend`
`;

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 11px 12px;

  border: 1px solid #fecaca;
  border-radius: 12px;
  background-color: #fef2f2;
  color: #b91c1c;

  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
`;

export const CampoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

// Estilos base dos campos de texto.
export const CampoLabel = styled.label`
  color: #64748b;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;

  .labelIcone {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  svg {
    color: #ff6b00;
    flex-shrink: 0;
  }  

  .corAsterisco {
    color: #ff6b00;
    font-size: 16px;
  }
`;

export const CampoInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;

  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #ffffff;

  color: #111827;
  font-size: 16px;
`;

// Rodapé de ação do formulário.
export const FormFooter = styled.footer`
  padding: 16px 0;
  background-color: #f5f5f5;
`;

export const SalvarButton = styled.button`
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
