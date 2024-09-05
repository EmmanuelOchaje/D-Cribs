import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./styles/index.scss";
/* import Form from "./Form";
import Images from "./Images"; */
/* import SignUpForm from "./components/SignupForm";
import SignUpImages from "./components/SignUpImages"; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="signin">
  <Form />
  <Images />
</div> */
}
{
  /* <div className="signup">
  <SignUpForm />
  <SignUpImages />
</div> */
}
