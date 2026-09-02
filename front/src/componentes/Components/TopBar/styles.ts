import styled from 'styled-components';

export const TopBarContainer = styled.header`
    height: 50px;
    padding: 0 12px 0 5px;

    background-color: #FFF;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TopBarEsquerda = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImage = styled.img`
    width: 55px;
    height: 55px;
    object-fit: contain;
`;

export const TopBarTitle = styled.strong`
    color: #0f172a;

    font-size: 16px;
    font-weight: 700;
    line-height: 1;
`;

export const ButtonIconPerfil = styled.button`
    width: 34px;
    height: 34px;

    border: none;
    border-radius: 999px;
    background-color: #f3f4f6;
    color: #64748b;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    cursor: pointer;
`;

export const ButtonIconVoltar = styled.button`
    width: 34px;
    height: 34px;

    border: none;
    background-color: transparent;
    color: #ff6b00;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`;
