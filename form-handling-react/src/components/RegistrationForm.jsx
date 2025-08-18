import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Registration Form</h2>

      <div className="mb-3">
        <label className="block mb-1">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}   {/* ✅ controlled input */}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}   {/* ✅ controlled input */}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}   {/* ✅ controlled input */}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
