import PageLayout from "@/components/main/page_layout/PageLayout";

export default function LayoutShopping({children}: { children: React.ReactNode }) {

    const menuItens = [
        {code: 1, description: "Licitação", href: "/manager/shopping/bidding"},
        {code: 2, description: "Solicitação de Compra", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 3", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 4", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 5", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 6", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 7", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 8", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 9", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 10", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 11", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 12", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 13", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 14", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 15", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 16", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 17", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 18", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 19", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 20", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 21", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 22", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 23", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 24", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 25", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 26", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 27", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 28", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 29", href: "/manager/shopping/construct"},
        {code: 2, description: "Menu 30", href: "/manager/shopping/construct"},
    ]

    return (
        <>
            <PageLayout title="Compras"
                        menuItens={menuItens}>
                {children}
            </PageLayout>
        </>
    )
}