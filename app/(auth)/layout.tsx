
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
        {/* Add any other head elements you need here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
