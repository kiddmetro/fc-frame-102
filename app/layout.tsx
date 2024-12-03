import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello :: Henlo",
  description: "Simple Frame to Display Hello or Henlo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
