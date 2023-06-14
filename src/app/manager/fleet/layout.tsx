import PageLayout from "@/components/main/page_layout/PageLayout";

export default function LayoutFleet({children} : {children: React.ReactNode} ) {
    return (
        <>
            <PageLayout title="Frotas">
                {children}
            </PageLayout>
        </>
    )
}