import styled from 'styled-components';

export const NovoRelatorioSection = styled.section`
  padding: 20px 15px;
`;

export const NovoRelatorioButton = styled.button`
  width: 100%;
  min-height: 90px;
  padding: 14px 14px;

  border: none;
  border-radius: 14px;
  background-color: #ff6b00;
  color: white;

  display: flex;
  align-items: center;
  gap: 14px;

  cursor: pointer;

  .icon {
    width: 46px;
    height: 46px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.22);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    font-weight: 300;
    line-height: 1;
  }

  .arrow {
    margin-left: auto;
    font-size: 30px;
    font-weight: 300;
    line-height: 1;
  }
`;

export const NovoRelatorioTexto = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  text-align: left;

  span {
    font-size: 16px;
    font-weight: 700;
  }

  small {
    font-size: 12px;
    font-weight: 500;
  }
`;
