import './globals.css'
import Header from "@/components/main/header/Header";


export const metadata = {
    title: 'SIGEP',
    description: 'Sistema de Gestão Pública',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
        <link rel="icon" href="/favicon.png" sizes="any"/>
        <body>
            <Header/>
            <div id="main">
                {children}
            </div>
        </body>
        </html>
    )
}
