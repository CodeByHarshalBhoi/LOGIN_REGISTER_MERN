import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/login", { name, email, password })
      .then((result) => {
        console.log(result)
        if(result.data == "Success"){
        navigate("/home")
        }
      })

      .catch((err) => console.log(err));
    navigate("/home");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 my-3">
              <label htmlFor="e,ail" className="form-label">
                Email address
              </label>
              <input
                onChange={handleEmailChange}
                name="email"
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3  my-3">
              <label className="form-label">Password</label>
              <input
                onChange={handlePasswordChange}
                name="password"
                type="password"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-1">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
