import "./index.scss";
import reactLogo from "@/assets/react.svg";
import LoginForm from "./components/LoginForm";
function Login() {
  return (
    <div className="login-container">
      <div className="login-wrap">
        <div className="login-form">
          <img className="logo" src={reactLogo} alt="logo" />
          <h2>React+Hook+Admin</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
export default Login;
