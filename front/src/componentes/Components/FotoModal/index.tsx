import { X } from "lucide-react";
import {
    FotoModalBackdrop,
    FotoModalCard,
    FotoModalFecharButton,
    FotoModalHeader,
    FotoModalImagem,
    FotoModalImagemArea
} from "./style";

type FotoModalProps = {
    fotoUrl: string;
    titulo: string;
    onFechar: () => void;
};

export const FotoModal = ({ fotoUrl, titulo, onFechar }: FotoModalProps) => {
    return (
        <FotoModalBackdrop role="dialog" aria-modal="true" aria-label={titulo}>
            <FotoModalCard>
                <FotoModalHeader>
                    <strong>{titulo}</strong>

                    <FotoModalFecharButton type="button" onClick={onFechar} aria-label="Fechar foto">
                        <X size={20} strokeWidth={2} />
                    </FotoModalFecharButton>
                </FotoModalHeader>

                <FotoModalImagemArea>
                    <FotoModalImagem src={fotoUrl} alt={titulo} />
                </FotoModalImagemArea>
            </FotoModalCard>
        </FotoModalBackdrop>
    );
};
