import styled from "styled-components";

export const PreVisualizacaoContainer = styled.main`
  padding: 16px;
  padding-bottom: 95px;

  background-color: #f3f4f6;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RelatorioCard = styled.article`
  background-color: #ffffff;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 16px;
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

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderIcone = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 8px;
  background-color: #ff6b00;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    color: #111827;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.15;
  }

  p,
  span {
    color: #6b7280;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.2;
  }
`;

export const SectionInfContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RelatorioTipo = styled.p`
  color: #f97316;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const RelatorioTitulo = styled.h1`
  color: #1a1d23;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.25;
`;

export const RelatorioCliente = styled.p`
  color: #6b7280;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.3;
`;

export const RelatorioInfoGrid = styled.section`
  display: grid;
  /* 6 colunas permitem dividir a linha em 2 partes iguais ou 3 partes iguais. */
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

export const InfoItem = styled.div`
  min-height: 50px;
  padding: 9px 10px;

  border-radius: 10px;
  background-color: #f1f3f5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;

  /* span-3 ocupa metade da linha: 3 de 6 colunas. */
  &.span-3 {
    grid-column: span 3;
  }

  /* span-2 ocupa um terço da linha: 2 de 6 colunas. */
  &.span-2 {
    grid-column: span 2;
  }

  span {
    color: #64748b;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0.5px;
  }

  strong {
    color: #111827;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.2;
  }
`;

export const ObservacaoContainer = styled.article`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const ObservacoesLista = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ObservacaoHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px 14px;
  border-bottom: 1px solid #e5e7eb;
`;

export const ObservacaoNumero = styled.span`
  width: 34px;
  height: 34px;

  border-radius: 10px;
  background-color: #ff6b00;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 700;
`;

export const ObservacaoHeaderTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    color: #ff6b00;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.1;
  }

  h2 {
    color: #111827;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
  }
`;

export const ObservacaoDescricao = styled.section`
  padding: 12px 14px 0;

  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    color: #64748b;
    font-size: 11px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 0.4px;
  }

  p {
    color: #111827;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
  }
`;

export const RegistroFotografico = styled.section`
  padding: 12px 14px 14px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RegistroTitulo = styled.div`
  color: #64748b;
  font-size: 11px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.4px;

  display: flex;
  align-items: center;
  gap: 4px;

  span,
  strong {
    font: inherit;
    color: inherit;
  }
`;

export const FotosRelatorioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export const FotoFigure = styled.figure`
  position: relative;

  width: 100%;
  padding: 6px;
  margin: 0;

  border: 1px solid #cbd5e1;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f8fafc;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.06);

  img {
    width: 100%;
    height: 118px;

    display: block;
    border-radius: 9px;
    object-fit: cover;
  }
`;

export const NumeroFoto = styled.span`
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
  line-height: 1;
`;

export const FotoIndisponivel = styled.span`
  width: 100%;
  height: 100%;

  color: #64748b;
  font-size: 12px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RelatorioAssinaturaFooter = styled.footer`
  width: 100%;
  max-width: 720px;
  min-height: 34px;
  padding: 0 14px;

  margin: 0 auto;

  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #64748b;
    font-size: 11px;
    font-weight: 400;
  }

  strong {
    color: #111827;
    font-size: 11px;
    font-weight: 700;
  }
`;

export const AcoesFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  padding: 12px 16px 15px;

  background-color: #f3f4f6;
  border-top: 1px solid #e5e7eb;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const BotaoAcao = styled.button`
  height: 48px;

  border: none;
  border-radius: 14px;

  font-size: 13px;
  font-weight: 700;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &.documento {
    background-color: #ff6b00;
    color: #ffffff;
  }

  &.email {
    background-color: #ecfdf5;
    color: #059669;
  }
`;
