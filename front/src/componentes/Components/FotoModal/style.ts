import styled from "styled-components";

export const FotoModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;

  padding: 18px;
  background-color: rgba(15, 23, 42, 0.72);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FotoModalCard = styled.article`
  width: 100%;
  max-width: 680px;
  padding: 12px;

  border-radius: 16px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FotoModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  strong {
    color: #111827;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const FotoModalFecharButton = styled.button`
  width: 34px;
  height: 34px;

  border: none;
  border-radius: 999px;
  background-color: #f3f4f6;
  color: #64748b;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const FotoModalImagemArea = styled.div`
  width: 100%;
  height: min(68vh, 520px);

  border-radius: 12px;
  background-color: #f3f4f6;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const FotoModalImagem = styled.img`
  max-width: 100%;
  max-height: 100%;

  object-fit: contain;
`;
