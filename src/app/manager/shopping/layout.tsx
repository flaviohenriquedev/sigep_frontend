import PageLayout from "@/components/layout/page/PageLayout";
import { ShoppingSideMenuData } from "../../../data/shopping/side_menu/ShoppingSideMenuData";

export default function ShoppingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <PageLayout pageHeader="Compras" menuItems={ShoppingSideMenuData}>
                {children}
            </PageLayout>
        </div>
    );
}
