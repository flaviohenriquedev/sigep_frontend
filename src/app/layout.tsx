import Header from "@/components/layout/core/header/Header";
import { SideBarContextProvider } from "@/context/layout/SideBarContext";
import "./globals.css";

export const metadata = {
    title: "SIGEP",
    description: "Sistema de Gestão Pública",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <link rel="icon" href="/favicon.png" sizes="any" />
            <body>
                <SideBarContextProvider>
                    <Header />
                    {children}
                </SideBarContextProvider>
            </body>
        </html>
    );
}
