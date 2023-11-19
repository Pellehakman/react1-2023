import { Link } from "react-router-dom";
import "./loginView.css";
function LoginView() {
  return (
    <>
      <Link className="logout" to="/">
        Home
      </Link>
      <h1>Login </h1>

      <form className="login-form">
        <div className="login-form__field">
          <label htmlFor="email" className="login-form__label ">
            Email
          </label>
          <input name="email" type="email" className="login-form__input" />
        </div>
        <div className="login-form__field">
          <label htmlFor="password" className="login-form__label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="login-form__input"
          />
        </div>
        <button className="login-form__button">Login</button>
      </form>
    </>
  );
}

export default LoginView;
