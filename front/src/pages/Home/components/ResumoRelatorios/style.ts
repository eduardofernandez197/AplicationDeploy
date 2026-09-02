import styled from 'styled-components';

export const ResumoContainer = styled.section`
  display: flex;
  gap: 15px;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const ArticleItemHorizontal = styled.article<{ bgColor?: string; textColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  font-size: 18px;
  font-family: Inter, sans-serif;
  height: 80px;
  width: 130px;
  padding: 10px;
  background-color: ${(props) => props.bgColor || '#fff6e5'};
  color: ${(props) => props.textColor || 'black'};
  border-radius: 10px;
  gap: 5px;

  strong {
    font-size: 23px;
    font-weight: bold;
  }

  span {
    font-size: 12px;
  }
`;
