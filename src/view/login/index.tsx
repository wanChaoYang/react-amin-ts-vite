import "./index.scss";
import logo from "@/assets/react.svg";
import LoginForm from "./components/LoginForm";
function Login() {
  return (
    <div className="login-container">
      <div className="login-wrap">
        <div className="login-form">
          <img src={logo} alt="logo" />
          <h1>React+Hook+Admin</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
export default Login;
