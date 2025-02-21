"use client";
// Import authentication-related functions and hooks from next-auth/react
import { signIn, signOut, useSession } from "next-auth/react";

// Home page component that handles both authenticated and unauthenticated states
export default function Home() {
  // Get current session data using useSession hook
  const { data: session } = useSession();

  return (
    // Main container with styling for centering content
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Conditional rendering based on session state */}
      {session ? (
        // Content shown to authenticated users
        <>
          {/* Welcome message with user's name */}
          <h1 className="text-3xl">Welcome, {session.user.name}</h1>
          <a href="/workout-planner" className="mt-4 text-blue-400 hover:underline">
            Go to Workout Planner
          </a>
          {/* Sign out button */}
          <button onClick={() => signOut()} className="mt-4 bg-red-500 px-4 py-2 rounded">
            Sign Out
          </button>
        </>
      ) : (
        // Content shown to unauthenticated users
        <>
          {/* Sign in prompt */}
          <h1 className="text-3xl">Please Sign In</h1>
          {/* Sign in button */}
          <button onClick={() => signIn()} className="mt-4 bg-blue-500 px-4 py-2 rounded">
            Sign In
          </button>
        </>
      )}
    </div>
  );
}