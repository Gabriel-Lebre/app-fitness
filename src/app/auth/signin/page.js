"use client";
// Import required dependencies from next-auth/react and React
import { signIn } from "next-auth/react";
import { useState } from "react";

// Main SignIn page component
export default function SignInPage() {
  // State variables to store email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Attempt to sign in using credentials provider
    const result = await signIn("credentials", { email, password, redirect: true, callbackUrl: "/" });
    console.log(result);
  };

  return (
    // Main container with styling for centering content
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Sign In header */}
      <h1 className="text-3xl mb-4">Sign In</h1>
      {/* Sign In form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-80">
        {/* Email input field */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 rounded bg-gray-800"
        />
        {/* Password input field */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 p-2 rounded bg-gray-800"
        />
        {/* Submit button */}
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded">
          Sign In
        </button>
        <p className="mt-3 text-gray-400">
          Don't have an account?{" "}
          <a href="/auth/signup" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}