import type { Metadata } from "next"
import { ThemeProvider } from "@/contexts/theme"
import { AuthProvider } from "@/contexts/auth"
import { Toaster } from "react-hot-toast"
import { TooltipProvider } from "@/contexts/tooltip"
import GlobalStyles from "./global.styles"
import StyledComponentsRegistry from "@/tools/registry"

import Container from "../container"

export const metadata: Metadata = {
    title: "Artesian AI Monitor",
    description: "Monitoramento de motores de bombas de poços artesianos",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <head>
                <script src="https://kit.fontawesome.com/be0d0071ae.js" crossOrigin="anonymous" async />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </head>
            <body>
                <StyledComponentsRegistry>
                    <ThemeProvider>
                        <AuthProvider>
                            <GlobalStyles />
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                                containerStyle={{ fontSize: ".85rem", fontWeight: "500" }}
                            />
                            <TooltipProvider>
                                <Container>
                                    {children}
                                </Container>
                            </TooltipProvider>
                        </AuthProvider>
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
