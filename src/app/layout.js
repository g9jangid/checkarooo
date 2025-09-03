import { Open_Sans } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/context/FormContext";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans", // optional for Tailwind
});

export const metadata = {
  title:
    "Checkarooo | Personalized Health Screening | Take Control of Your Health",
  description:
    "Don't let disease catch you off guard. Get personalized screening recommendations and proactive health insights with our health screening app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
