import Header from "@/components/layout/core/header/Header";
import { SideBarContextProvider } from "@/context/layout/SideBarContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";

config.autoAddCss = false;

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
                    <div id="main">{children}</div>
                </SideBarContextProvider>
            </body>
        </html>
    );
}
