import PageContainer from "@/components/layout/page/page_container/PageContainer";
import { PatrimonySideMenuData } from "../../../data/patrimony/routes/PatrimonySideMenuData";

export default function PatrimonyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PageContainer pageTittle="Patrimônio" menuItems={PatrimonySideMenuData}>
            {children}
        </PageContainer>
    );
}
