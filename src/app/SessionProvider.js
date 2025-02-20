"use client";
// Import SessionProvider component from next-auth/react for authentication context
import { SessionProvider } from "next-auth/react";

// Provider component that wraps the app with authentication context
export default function Provider({ children }) {
  // Wrap children with SessionProvider to enable auth features throughout the app
  return <SessionProvider>{children}</SessionProvider>;
}