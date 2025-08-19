// src/App.jsx
import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>

      <div className="mb-4">
        <button
          onClick={() => setShow((s) => !s)}
          className="px-3 py-1.5 rounded bg-indigo-600 text-white"
        >
          {show ? "Unmount" : "Mount"} PostsComponent
        </button>
        <p className="text-sm opacity-80 mt-2">
          Unmount, wait a bit, then mount again to see cached data appear instantly.
        </p>
      </div>

      {show && <PostsComponent />}
    </div>
  );
}
