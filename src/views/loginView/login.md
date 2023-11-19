 <div className="login-header flex gap-8 flex-col">
        <h1 className="text-4xl">Login </h1>
        <p>
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
          </div>
          <div className="login-form__field">
            <input
              placeholder="Password"
              name="password"
              type="password"
              className="login-form__input"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="login-form__button bg-blue-500 hover:bg-blue-600">
            Login
          </button>
          <button className="login-form__button">Back</button>
        </div>
      </form>
      {/* <Link className="logout absolute bottom-0" to="/">
        Home
      </Link> */}