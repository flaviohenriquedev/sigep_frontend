import PageLayout from "@/components/layout/page/PageLayout";
import { LuNewspaper } from "react-icons/lu";

export default function LayoutFleet({
    children,
}: {
    children: React.ReactNode;
}) {

    const items = [
        {
            code: 1,
            icon: <LuNewspaper size={20} />,
            description: "Frotas",
            pageName: "Frotas",
            href: "manager/shopping/bidding",
        },
    ];
    return (
        <div>
            <PageLayout pageHeader="Frotas" menuItems={items}>
                {children}
            </PageLayout>
        </div>
    );
}
