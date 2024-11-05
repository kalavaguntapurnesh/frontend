import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setToken, setUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // To display any error messages
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Reset error state
      setError(null);

      // Make API request to register the user
      const res = await axios.post(
        "https://backend-six-kappa-64.vercel.app/auth/register",
        {
          email,
          password,
        }
      );

      // Store the token in Redux
      dispatch(setToken(res.data.token));

      // Fetch user details with the token
      const userRes = await axios.get(
        "https://backend-six-kappa-64.vercel.app/auth/me",
        {
          headers: { Authorization: res.data.token },
        }
      );
      dispatch(setUser(userRes.data));

      // Redirect to the dashboard after successful registration
      navigate("/dashboard");
    } catch (err) {
      console.error("Registration failed:", err);
      setError("Registration failed. Please try again."); // Display error message
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
