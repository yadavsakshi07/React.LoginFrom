import React, { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="card">
        
        {/* Toggle Buttons */}
        <div className="toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <div className="form">
            <h2>Login</h2>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Login</button>

            <p onClick={() => setIsLogin(false)}>
              Don't have an account? Sign Up
            </p>
          </div>
        ) : (
          /* Signup Form */
          <div className="form">
            <h2>Sign Up</h2>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button>Sign Up</button>

            <p onClick={() => setIsLogin(true)}>
              Already have an account? Login
            </p>
          </div>
        )}
      </div>
    </div>
  );
}