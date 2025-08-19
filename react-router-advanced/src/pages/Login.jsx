import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // simulate login success
    alert("Logged in successfully!");
    navigate("/profile");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Login Page</h2>
      <button
        onClick={handleLogin}
        className="px-3 py-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>
    </div>
  );
}

export default Login;

