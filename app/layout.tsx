import type { Metadata } from "next";
import '@nrk/nrk-sans/nrk-sans.css'
import './globals.css'
import { NrkLogoNrkRadio } from '@nrk/core-icons/jsx/logo'
import Header from '@/components/Header'

export const metadata: Metadata = {
    title: 'NRK Radio',
    description:
        'Hør hele NRK Radio sitt store utvalg av podkast, serier, dokumentarer, underholdning, film, sport og nyheter.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="nb">
            <body>
                <div vaul-drawer-wrapper="">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    )
}
