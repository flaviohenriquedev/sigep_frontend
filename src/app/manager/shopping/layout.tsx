import PageContainer from "@/components/layout/page/page_container/PageContainer";
import { ShoppingSideMenuData } from "../../../data/shopping/routes/ShoppingSideMenuData";

export default function ShoppingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <PageContainer pageTittle="Compras" menuItems={ShoppingSideMenuData}>
                {children}
            </PageContainer>
        </div>
    );
}
