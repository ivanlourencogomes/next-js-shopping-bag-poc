import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BasketProvider } from "./context/BasketContext";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next JS Shopping Bag",
  description: "Learn Next in 4 hours.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${raleway.variable}`}>
        <BasketProvider>
          <Header />
          <main>
            {children}

          </main>
          <Footer />
        </BasketProvider>
      </body>
    </html>
  );
}
