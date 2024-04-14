import "./Style.css";

export default function SignUp() {
  const signup = () => {};

  const googleLogin = () => {};

  const facebookLogin = () => {};

  return (
    <div className="dabba">
      <div id="signupForm" className="form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" placeholder="Enter your last name" />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="text"
            id="emailAddress"
            placeholder="Enter your e-mail"
          />
        </div>
        <div className="form-group">
          <label htmlFor="signupPassword">Password:</label>
          <input
            type="password"
            id="signupPassword"
            placeholder="Choose a password"
          />
        </div>
        <div className="form-group">
          <button onClick={signup}>Sign Up</button>
        </div>
        <div style={{ textAlign: "center" }}>----- Or signup with -----</div>
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
