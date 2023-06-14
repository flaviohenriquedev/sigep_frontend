import PageLayout from "@/components/main/page_layout/PageLayout";

export default function LayoutAccountant({children} : {children: React.ReactNode} ) {
    return (
        <>
            <PageLayout title="Gestão Contábil">
                {children}
            </PageLayout>
        </>
    )
}