import "./globals.css";
import MetaPixel from "../../components/MetaPixel";
import UTMTracker from "../../components/UTMTracker";
import NoSSR from "@/components/common/NoSSR";
import { Toaster } from 'react-hot-toast';

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
        <Toaster position="top-center" toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }} />
        {children}
      </body>
    </html>
  );
}
