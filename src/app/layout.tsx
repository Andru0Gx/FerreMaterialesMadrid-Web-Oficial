import type { Metadata } from "next";
import "@fontsource-variable/onest";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Ferre Materiales Madrid",
    description:
        "Ferre Materiales Madrid, una empresa especializada en el sector ferretero, vendiendo productos como materiales de construcción, herramientas y equipos eléctricos.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <head>
                <link rel="icon" href="/svg/favicon.svg" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
