import { Suspense } from "react";
import "./globals.css";

export const metadata = {
  title: "Osmo — Start building websites people remember",
  description:
    "A platform by Dennis Snellenberg and Ilja van Eck to help creative developers work smarter, faster, and better. It’s our personal toolbox, used to develop award-winning websites. Access techniques, components, code, and tools, perfect for creative (Webflow) developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "PP Neue Montreal, Arial, sans-serif" }}>
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#efeeec",
                textAlign: "center",
              }}
            >
              Loading....
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
