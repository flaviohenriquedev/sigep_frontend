import PageLayout from "@/components/layout/page/PageLayout";
import { LuNewspaper } from "react-icons/lu";
import { BiPurchaseTag } from "react-icons/bi";

export default function ShoppingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const items = [
        {
            code: 1,
            icon: <LuNewspaper size={20} />,
            description: "Licitação",
            pageName: "Licitação",
            href: "manager/shopping/bidding",
        },
        {
            code: 2,
            icon: <BiPurchaseTag size={20} />,
            description: "Solicitação de Compra",
            pageName: "Solicitação de Compra",
            href: "manager/shopping/construct",
        },
        {
            code: 2,
            icon: <BiPurchaseTag size={20} />,
            description: "Ordem de Fornecimento",
            pageName: "Ordem de Fornecimento",
            href: "manager/shopping/order_supply",
        },
    ];

    return (
        <div>
            <PageLayout pageHeader="Compras" menuItems={items}>
                {children}
            </PageLayout>
        </div>
    );
}
