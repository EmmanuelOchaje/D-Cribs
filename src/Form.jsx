const Form = () => {
  return (
    <div className="form">
      <h2 className="header">D-Cribs.</h2>
      <div className="cont">
        <h1>Hi, there!</h1>
        <p className="welcome">Welcome back, Sign In.</p>
        <form>
          <label>E-mail</label>
          <br />
          <input type="email" className="inp" placeholder="enter email" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" className="inp" placeholder="enter password" />
          <br />
          <p className="fgtn">Forgotten Password?</p>
          <br />
          <button className="btn">Sign In</button>
          <p className="dnt">
            Don&apos;t have an account? <span>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
