import { Sigmar_One, Montserrat } from "next/font/google";
import "./globals.css";

const sigmarOne = Sigmar_One({
  // explicitly list the only available weight
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sigmar-one",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "TripTime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* apply the generated class so Next injects the @font-face and sets the CSS variable */}
      <body className={`${sigmarOne.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}