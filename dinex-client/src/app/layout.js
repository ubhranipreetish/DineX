import "./globals.css";

export const metadata = {
  title: "DineX - Book Your Table Easily",
  description: "Discover and book the best restaurants near you with DineX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1 bg-white">{children}</main>
      </body>
    </html>
  );
}
