import "./globals.css";
import { NotificationProvider } from "@/context/NotificationContext";
import Toast from "@/components/ui/Toast";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

export const metadata = {
  title: "DineX - Book Your Table Easily",
  description: "Discover and book the best restaurants near you with DineX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NotificationProvider>
          <main className="flex-1 bg-white">{children}</main>
          <Toast />
          <ConfirmDialog />
        </NotificationProvider>
      </body>
    </html>
  );
}

