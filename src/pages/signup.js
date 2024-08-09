import { useState } from "react";
import axios from "axios";
function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/employee/save", {
        employeename: fullName,
        email: email,
        password: password,
      });
      alert("Employee Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div class="container mt-4">
        <div class="card">
          <h1>Signup</h1>

          <form>
            <div class="form-group">
              <label>Full Name</label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Enter Name"
                value={fullName}
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <button type="submit" class="btn btn-primary mt-4" onClick={save}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
