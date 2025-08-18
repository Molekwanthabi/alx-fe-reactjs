import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); // ✅ Track validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors); // ✅ update state with errors

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // clear form after success
      setFormData({ username: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Registration Form</h2>

      <div className="mb-3">
        <label className="block mb-1">Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="block mb-1">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
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

  

