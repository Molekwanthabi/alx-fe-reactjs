// src/App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegistrationForm from "./components/RegistrationForm";
// or FormikForm if you're using that
// import FormikForm from "./components/formikForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            React Query + Form Example
          </h1>
          <RegistrationForm />
          {/* Or <FormikForm /> */}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

