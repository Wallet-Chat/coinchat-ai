import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import ContextProvider from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WalletChat GPT",
  description: "Conversational Blockchain explorer and Token analysis",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#3a80e9",
  //     },
  //   },
  // });
  return (
    // <ThemeProvider theme={theme}>
      <ContextProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ContextProvider>
    // </ThemeProvider>
  );
}