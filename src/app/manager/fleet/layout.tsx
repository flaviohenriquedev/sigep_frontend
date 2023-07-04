import PageContainer from "@/components/layout/page/page_container/PageContainer";
import { FleetPageRoutes } from "../../../data/fleet/routes/FleetPageRoutes";

export default function ShoppingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PageContainer
            pageTittle="Frotas"
            module="FL"
            menuItems={FleetPageRoutes}
        >
            {children}
        </PageContainer>
    );
}
