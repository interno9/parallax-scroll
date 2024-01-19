import "./globals.css";

export const metadata = {
  title: "Vitra catalog",
  description: "Generated with Badvisor.io",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
