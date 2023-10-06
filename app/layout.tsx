import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import { Architects_Daughter, Inter } from 'next/font/google'

import './css/style.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const architects_daughter = Architects_Daughter({
    subsets: ['latin'],
    variable: '--font-architects-daughter',
    weight: '400',
    display: 'swap',
})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-background text-foreground tracking-tight`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen overflow-hidden">
                        <Header />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
