// import { Link } from "react-router-dom";
import "./LoginView.css";
function LoginView() {
  return (
    <div className="login-view">
      <div className="login-view__header">
        <h1 className="text-5xl font-bold uppercase my-4">Login </h1>
        <p className="mb-4">
          Follow this three step instruction manual to create your account to
          join our community. Confirm your identity, agree to our terms, and
          secure your account.
        </p>
      </div>
      <form className="login-form">
        <div className="login-form__container">
          <div className="login-form__field">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="login-form__input"
            />
            <p className="login-form__error">wrong mail</p>
          </div>
          <div className="login-form__field">
            <input
              placeholder="Password"
              name="password"
              type="password"
              className="login-form__input"
            />
            <p className="login-form__error">wrong password</p>
          </div>
        </div>
        <div className="login-form__buttons">
          <button className="login-form__button bg-primary-500 hover:bg-primary-400 active:bg-primary-600">
            Login
          </button>
          <button className="login-form__button text-xs">
            No, account? Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginView;
