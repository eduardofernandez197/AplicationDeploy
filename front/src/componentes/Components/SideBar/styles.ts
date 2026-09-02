import styled from 'styled-components';

export const SideBarContainer = styled.aside<{ $open: boolean }>`
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    width: 200px;
    flex-shrink: 0;
    padding: 15px;

    background-color: #ff8300;
    border-right: 1px solid #ddd;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.12);

    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;

        width: 240px;
        height: 100%;
    }
`;

export const NewOcorrenciaButton = styled.button`
    width: 100%;
    min-height: 42px;
    padding: 0 14px;

    border: none;
    border-radius: 5px;
    background-color: white;
    color: #ff8300;

    font-weight: 600;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        background-color: #fff6e5;
        transform: translateY(-1px);
    }
`;
