import { ArticleItemHorizontal, ResumoContainer } from "./style";

export const ResumoRelatorios = () => {
    return (
        <ResumoContainer aria-label="Resumo dos relatórios">
            <ArticleItemHorizontal bgColor="#f9fafb">
                <strong style={{ color: "#6b7280" }}>1</strong>
                <span style={{ color: "#6b7280" }}>Rascunhos</span>
            </ArticleItemHorizontal>

            <ArticleItemHorizontal bgColor="#ecfdf5">
                <strong style={{ color: "#059669" }}>1</strong>
                <span style={{ color: "#059669" }}>Finalizados</span>
            </ArticleItemHorizontal>

            <ArticleItemHorizontal bgColor="#eff6ff">
                <strong style={{ color: "#2563eb" }}>1</strong>
                <span style={{ color: "#2563eb" }}>Enviados</span>
            </ArticleItemHorizontal>
        </ResumoContainer>
    )
}
