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
            <h1>FROTAS</h1>
        </div>
    );
}
