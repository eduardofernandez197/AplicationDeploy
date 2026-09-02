import styled from 'styled-components';

export const FormPanel = styled.div<{ $open: boolean }>`
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    width: 100%;
    min-height: 100%;
    padding: 20px;

    background-color: #ffc16b;
    border-radius: 8px;

    @media (max-width: 768px) {
        padding: 16px;
    }
`;

export const FormContainer = styled.form`
    width: 100%;
    max-width: 720px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const FieldGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const FullWidthGroup = styled.div`
    width: 100%;
`;

export const TextInput = styled.input`
    width: 100%;
    max-width: 100%;
    height: 40px;
    padding: 0 12px;

    border: 1px solid #ddd;
    border-radius: 5px;
`;

export const DescriptionInput = styled.textarea`
    width: 100%;
    max-width: 100%;
    min-height: 180px;
    padding: 12px;

    border: 1px solid #ddd;
    border-radius: 8px;
    resize: vertical;
`;

export const FileInput = styled.input`
    width: 100%;
    max-width: 100%;

    color: #4a2f12;
    font-weight: 600;
    cursor: pointer;

    &::file-selector-button {
        min-height: 42px;
        padding: 0 16px;
        margin-right: 12px;

        border: none;
        border-radius: 5px;
        background-color: white;
        color: #ff8300;

        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    &::file-selector-button:hover {
        background-color: #fff6e5;
        transform: translateY(-1px);
    }
`;

export const SubmitButton = styled.button`
    min-width: 120px;
    height: 42px;
    padding: 0 18px;

    border: none;
    border-radius: 5px;
    background-color: white;
    color: #ff8300;

    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        background-color: #fff6e5;
        transform: translateY(-1px);
    }
`;
