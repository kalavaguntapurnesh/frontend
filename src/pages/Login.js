// src/pages/Login.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setToken, setUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://backend-six-kappa-64.vercel.app/auth/login",
        { email, password }
      );
      const token = res.data.token;
      dispatch(setToken(token));

      // Fetch user details after login
      const userRes = await axios.get(
        "https://backend-six-kappa-64.vercel.app/auth/me",
        {
          headers: { Authorization: token },
        }
      );
      dispatch(setUser(userRes.data));

      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
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
        Login
      </button>
    </form>
  );
};

export default Login;
