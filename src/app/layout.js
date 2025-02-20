// Import SessionProvider component for Next-Auth authentication
import Provider from "./SessionProvider";

// Root layout component that wraps all pages with authentication provider
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap children with SessionProvider for auth context */}
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}