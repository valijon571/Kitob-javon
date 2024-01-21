import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CssStyle } from "./CssStyle";

const Sign_in = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <CssStyle>
        <div className="body">
          <div className="main">
            <div className="card_one">
              <div className="card_system_one">
                <h3>Sign in</h3>
                <form className="system">
                  <div className="system_input">
                    <label className="label">Username</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      placeholder=" john doe"
                    />
                  </div>
                  {/* <div className="system_input">
                    <label className="label">Password</label>
                    <br />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div> */}
                  <div className="system_input">
                    <label className="label">Password</label>
                    <br />
                    <div className="input">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Repeat the password"
                      />
                      <div className="showPassword">
                        <div>
                          {showPassword ? (
                            <div onClick={() => setShowPassword(false)}>
                              <BsEyeSlash />
                            </div>
                          ) : (
                            <div onClick={() => setShowPassword(true)}>
                              <AiOutlineEye
                                onClick={() => setShowPassword(true)}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="system_submitt">
                    <div className="submit">
                      <button type="submit">Button</button>
                    </div>
                    <p>
                      Already signed up?
                      <Link to="/" className="text"> Go to sign up.</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Sign_in;
