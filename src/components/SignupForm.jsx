import { useState } from "react";
import Swal from "sweetalert2";
const SignUpForm = () => {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
  });

  function handleChanges(e) {
    setValue({ ...value, [e.target.name]: [e.target.value] });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setValue({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm: "",
    });
    console.log(value);
    Swal.fire({
      title: "Welcome!",
      text: "Continue To Dashboard",
      icon: "success",
      iconColor: "rgb(54, 52, 52)",
      confirmButtonColor: "rgb(54, 52, 52)",
    });
  }

  return (
    <div className="form">
      <h2 className="header">D-cribs.</h2>
      <div className="cont">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="firstname"
            type="text"
            className="inp2"
            placeholder="First Name"
            onChange={(e) => handleChanges(e)}
            required
            value={value.firstname}
          />
          <input
            name="lastname"
            type="text"
            className="inp2"
            placeholder="Last Name"
            onChange={(e) => handleChanges(e)}
            required
            value={value.lastname}
          />{" "}
          <br />
          <input
            name="email"
            type="email"
            className="inpt"
            placeholder="Email"
            onChange={(e) => handleChanges(e)}
            required
            value={value.email}
          />
          <br />
          <input
            name="password"
            type="password"
            className="inpt"
            placeholder="Create PassWord"
            onChange={(e) => handleChanges(e)}
            required
            value={value.password}
          />
          <br />
          <input
            name="confirm"
            type="password"
            className="inpt"
            placeholder="Confirm PassWord"
            onChange={(e) => handleChanges(e)}
            required
            value={value.confirm}
          />
          <button className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
