import PageLayout from "@/components/main/page_layout/PageLayout";

export default function LayoutCemetery({children} : {children: React.ReactNode} ) {
    return (
        <>
            <PageLayout title="Cemitério">
                {children}
            </PageLayout>
        </>
    )
}