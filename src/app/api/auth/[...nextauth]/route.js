// Import required dependencies for NextAuth.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define authentication configuration options
export const authOptions = {
  providers: [
    // Configure credentials-based authentication
    CredentialsProvider({
      name: "Credentials", // Display name for this auth provider
      // Define the credentials fields that will appear on the sign-in form
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" }
      },
      // Authorization logic - validates credentials and returns user data
      async authorize(credentials) {
        // Simple credential check (replace with actual auth logic)
        if (credentials.email === "test@example.com" && credentials.password === "password") {
          // Return mock user data on successful auth
          return { id: "1", name: "Test User", email: "test@example.com" };
        }
        // Return null if credentials are invalid
        return null;
      }
    })
  ],
  // Secret key for JWT encryption - must be defined in .env.local
  secret: process.env.NEXTAUTH_SECRET,
  // Custom page configurations
  pages: {
    signIn: "/auth/signin" // Route to custom sign-in page
  }
};

// Create and export NextAuth handler for API routes
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // Export handler for GET and POST requests