import { useState } from "react";
import apiClient from "../../service/apiClient";
import { useNavigate } from "react-router";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //for navigation
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log(`Trying to do a singup`);
      const data = await apiClient.signup(name, email, password);
      console.log("Signup response: ", data);
      if (data.success) {
        navigate("/login");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }

    //Make an API call to backend with data
    // get reponse from backend
    // take action based on response
  };
  return (
    <div className="signup">
      <h1>
        <div>
          <h3>My States</h3>
          <p>{name}</p>
          {email}
          {password}
        </div>
        Welcome to Signup page
        {true && <div>Error: {error}</div>}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signup....." : "Signup"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
