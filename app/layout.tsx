import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { AuthProvider } from "@/lib/auth-context";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Bauexperts CRM",
  description: "Internal CRM for Energieausweis service management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
