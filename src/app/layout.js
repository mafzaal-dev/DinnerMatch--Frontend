import "./globals.css";
import MetaPixel from "../../components/MetaPixel";
import UTMTracker from "../../components/UTMTracker";

export const metadata = {
  title: "DinnerMatch",
  description: "Get matched by personality for a dinner you'll never forget.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MetaPixel />
        <UTMTracker />
        {children}
      </body>
    </html>
  );
}
