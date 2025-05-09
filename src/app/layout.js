import "./globals.css";
import { inter, Roboto } from "./fonts";
import { VenueProvider } from "./Context/VenueContext";

export const metadata = {
  title: "Festino | Find the night of your LIFE!",
  description: "Created by NTI Students for the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <VenueProvider>
          {children}
         </VenueProvider>
      </body>
    </html>
  );
}
