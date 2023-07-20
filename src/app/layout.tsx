import Header from '@/components/layout/core/header/Header';
import Provider from '@/components/provider/Provider';
import './globals.css';
import './themes.css';

export const metadata = {
    title: 'SIGEP',
    description: 'Sistema de Gestão Pública'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <link rel="icon" href="/favicon.png" sizes="any" />
            <body className={'bg-background'}>
                <Provider>
                    <Header />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
