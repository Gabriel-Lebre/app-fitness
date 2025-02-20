"use client";
// Import required dependencies from next-auth/react and next/navigation
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

// Dashboard page component that requires authentication
export default function Dashboard() {
  // Get session data using useSession hook
  const { data: session } = useSession();

  // If no active session, redirect to sign in page
  if (!session) {
    redirect("/auth/signin");
    return null;
  }

  // Render welcome message with user's name from session
  return <h1>Dashboard: Welcome, {session.user.name}!</h1>;
}