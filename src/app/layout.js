import "./globals.css";
import MetaPixel from "../../components/MetaPixel";
import UTMTracker from "../../components/UTMTracker";
import NoSSR from "@/components/common/NoSSR";

export const metadata = {
  title: "DinnerMatch",
  description: "Get matched by personality for a dinner you'll never forget.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <NoSSR>
          <MetaPixel />
          <UTMTracker />
        </NoSSR>
        {children}
      </body>
    </html>
  );
}
