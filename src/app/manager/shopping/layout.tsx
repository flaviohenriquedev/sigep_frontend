import PageLayout from "@/components/main/page_layout/PageLayout";

export default function LayoutShopping({children}: { children: React.ReactNode }) {
    return (
        <>
            <PageLayout title="Compras">
                {children}
            </PageLayout>
        </>
    )
}