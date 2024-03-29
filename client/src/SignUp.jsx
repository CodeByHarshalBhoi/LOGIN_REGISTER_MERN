import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
      navigate("/login")
  };

  return (
    <div>
      <>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
          <div className="bg-white p-3 rounded w-25">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 my-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  onChange={handleNameChange}
                  name="name"
                  type="text"
                  className="form-control"
                />
              </div>
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
                Register
              </button>
            </form>
            <p>Already Have an Account</p>
            <Link
              to="/login"
              className="btn btn-default border w-100 bg-light rounded-1 text-decoration-none"
            >
              Login
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}
