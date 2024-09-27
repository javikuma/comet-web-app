import type { Metadata } from 'next';
import './globals.css';

import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Comet',
    description: 'Develop Systematically with Comet',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='es'>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased bg-white text-black/80',
                    fontSans.variable
                )}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
