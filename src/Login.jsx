import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = React.useState("Citizen");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  // Hardcoded credentials
  const credentials = {
    Admin: { email: "admin@example.com", password: "AdminPass123" },
    Responder: { email: "responder@example.com", password: "ResponderPass456" },
    Citizen: { email: "citizen@example.com", password: "CitizenPass789" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    // Check if the entered credentials match the selected role
    if (
      credentials[role] &&
      credentials[role].email === email &&
      credentials[role].password === password
    ) {
      // Navigate to the respective dashboard based on role
      navigate(`/${role.toLowerCase()}-dashboard`);
    } else {
      setError("Invalid email or password for the selected role");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        ALERT AND EMERGENCY RESPONSE SYSTEM LOGIN
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <label className="block text-lg font-semibold">Select Login</label>
        <div className="mt-2 space-y-2">
          {["Admin", "Responder", "Citizen"].map((r) => (
            <label key={r} className="flex items-center space-x-2">
              <input
                type="radio"
                name="role"
                value={r}
                checked={role === r}
                onChange={() => setRole(r)}
                className="form-radio"
              />
              <span>{r}</span>
            </label>
          ))}
        </div>
        <div className="mt-4">
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md mt-1"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md mt-1"
            required
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-4 flex justify-centre">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

