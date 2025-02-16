import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful. You can now log in.");
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-green-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Register</h2>
        <form onSubmit={handleRegister} className="mt-4">
          <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg" placeholder="Username" />
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg mt-4" placeholder="Email" />
          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg mt-4" placeholder="Password" />
          {error && <p className="mt-3 text-red-500">{error}</p>}
          {success && <p className="mt-3 text-green-500">{success}</p>}
          <button type="submit" className="w-full py-3 mt-6 text-white bg-green-600 rounded-lg">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
