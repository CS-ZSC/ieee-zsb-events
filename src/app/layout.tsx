import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Stack } from "@chakra-ui/react";
import Header from "@/components/ui/internal/header";
import Footer from "@/components/ui/internal/footer";
import "./global.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "IEEE-ZSB Events Gate",
  description: "the official events and competitions gate for IEEE Zagazig student branch.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        data-new-gr-c-s-check-loaded="8.932.0"
        data-gr-ext-installed=""
      >
        <Provider>
          <Stack
            gap={0}
            margin={"auto"}
            maxWidth={"3040px"}
            padding={"var(--global-spacing)"}
            color={"natural-2"}
          >
            <Header />
            {children}
            <Footer />
          </Stack>
          <Toaster />
        </Provider>
      </body>
    </html >
  );
}

