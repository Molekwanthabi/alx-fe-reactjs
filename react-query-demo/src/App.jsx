// src/App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegistrationForm from "./components/RegistrationForm";
import PostsComponent from "./components/PostsComponent"; // ✅ import it

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-2xl space-y-6">
          <h1 className="text-2xl font-bold text-center">
            React Query + Forms + Posts
          </h1>

          {/* Registration Form */}
          <RegistrationForm />

          {/* PostsComponent (for fetching posts via React Query) */}
          <PostsComponent />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
