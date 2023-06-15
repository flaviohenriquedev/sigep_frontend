import PageLayout from "@/components/layout/page/PageLayout";

export default function LayoutShopping({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <PageLayout>{children}</PageLayout>
        </div>
    );
}
