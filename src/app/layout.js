import "./globals.css";
import { inter, roboto } from "./fonts";

export const metadata = {
  title: "Festino | Find the night of your LIFE!",
  description: "Created by NTI Students for the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
