import PageLayout from "@/components/layout/page/PageLayout";
import {LuNewspaper} from "react-icons/lu";
import {BiPurchaseTag} from 'react-icons/bi'

export default function LayoutShopping({
    children,
}: {
    children: React.ReactNode;
}) {

    const items = [
        {
            code: 1,
            icon: <LuNewspaper size={25}/>,
            description: 'Licitação',
            pageName: 'Licitação',
            href: 'manager/shopping/bidding'
        },

        {
            code: 2,
            icon: <BiPurchaseTag size={25}/>,
            description: 'Solicitação de Compra',
            pageName: 'Solicitação de Compra',
            href: 'manager/shopping/construct'
        },
    ]
    return (
        <div>
            <PageLayout
                pageHeader="Compras"
                menuItems={items}>{children}
            </PageLayout>
        </div>
    );
}
