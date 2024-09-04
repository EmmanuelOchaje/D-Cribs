import { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [para, setPara] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      //   alert("Please, input Email and Password");
      setPara(true);
    } else {
      //   alert("Welcome Back!");
      Swal.fire({
        title: "Welcome!",
        text: "Continue To Dashboard",
        icon: "success",
        iconColor: "rgb(54, 52, 52)",
        confirmButtonColor: "rgb(54, 52, 52)",
      });
      setEmail("");
      setPassword("");
      setPara(false);
    }
  }

  return (
    <div className="form">
      <h2 className="header">D-Cribs.</h2>
      <div className="cont">
        <h1>Hi, there!</h1>
        <p className="welcome">Welcome back, Sign In.</p>
        <form>
          <label>E-mail</label>
          <br />
          <input
            type="email"
            className="inp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          {para ? <p className="err">Enter Email</p> : null}
          <label>Password</label>
          <br />
          <input
            type="password"
            className="inp"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {para ? <p className="err">Enter Password</p> : null}
          <p className="fgtn">Forgotten Password?</p>
          <br />
          <button className="btn" onClick={onSubmit}>
            Sign In
          </button>
          <p className="dnt">
            Don&apos;t have an account? <span>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
