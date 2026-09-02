import { Folder, Home, Plus } from "lucide-react";
import { BottomNavContainer, BottomNavItem } from "./style";

export const BottomNav = () => {
    return (
        <BottomNavContainer aria-label="Navegação principal">
            <BottomNavItem type="button" $active>
                <span className="icon">
                    <Home size={21} strokeWidth={2} />
                </span>
                <span>Início</span>
            </BottomNavItem>

            <BottomNavItem type="button" $primary>
                <span className="icon">
                    <Plus size={32} strokeWidth={2} />
                </span>
                <span>Novo</span>
            </BottomNavItem>

            <BottomNavItem type="button">
                <span className="icon">
                    <Folder size={21} strokeWidth={2} />
                </span>
                <span>Relatórios</span>
            </BottomNavItem>
        </BottomNavContainer>
    )
}
