import { Provider } from "@/components/ui/provider"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "IEEE-Zsb Events Gate",
  description: "the official events and competitions gate for IEEE Zagazig student branch.",
};
export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}