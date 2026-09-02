import styled from 'styled-components';

export const RecentesSection = styled.section`
  flex: 1;
  padding: 0 15px 90px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Recentes = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: #111827;
`;

export const FeedbackMessage = styled.div<{ $variant?: "error" }>`
  width: 100%;
  padding: 12px;

  border: 1px solid ${({ $variant }) => ($variant === "error" ? "#fecaca" : "#e5e7eb")};
  border-radius: 12px;
  background-color: ${({ $variant }) => ($variant === "error" ? "#fef2f2" : "#ffffff")};
  color: ${({ $variant }) => ($variant === "error" ? "#b91c1c" : "#64748b")};

  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
`;

export const RelatorioCard = styled.article`
  width: 100%;
  min-height: 118px;
  padding: 16px 16px 12px;

  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;

  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const RelatorioTitulo = styled.h3`
  margin: 0;
  padding-right: 108px;

  color: #111827;
  font-size: 13.5px;
  font-weight: 700;
  line-height: 1.25;
`;

export const RelatorioMeta = styled.p`
  margin: 0;

  color: #64748b;
  font-size: 11.5px;
  line-height: 1.3;
`;

export const RelatorioStatus = styled.span`
  align-self: flex-end;
  margin-top: -43px;
  padding: 3px 8px;

  background-color: #f3f4f6;
  color: #6b7280;
  border-radius: 999px;

  font-size: 11.5px;
  font-weight: 600;
  line-height: 1.2;
`;

export const ContinuarEdicaoButton = styled.button`
  width: 100%;
  min-height: 38px;
  margin-top: 20px;

  border: none;
  border-radius: 10px;
  background-color: #fff4e8;
  color: #ff6b00;

  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

export const VisualizarButton = styled.button`
  width: 100%;
  min-height: 38px;
  margin-top: 20px;

  border: none;
  border-radius: 10px;
  background-color: #f1f5f9;
  color: #111827;

  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;
