import "./globals.css";

export const metadata = {
  title: "DinnerMatch",
  description: "Get matched by personality for a dinner you'll never forget.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
