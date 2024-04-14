import "./Style.css";

export default function Login() {
  const login = () => {};

  const googleLogin = () => {};

  const facebookLogin = () => {};

  return (
    <div className="dabba">
      <div id="loginForm" className="form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="loginUsername">Username:</label>
          <input
            type="text"
            id="loginUsername"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password:</label>
          <input
            type="password"
            id="loginPassword"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <button onClick={login}>Login</button>
        </div>
        <div style={{ textAlign: "center" }}>----- Or login with -----</div>
        <div className="alternate">
          <button id="google" onClick={googleLogin}>
            Google
          </button>
          <button id="facebook" onClick={facebookLogin}>
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
