import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import { useState } from "react";
import Axios from "../utils/httpClient";
import { CssStyle } from "./CssStyle";

const Sign_in = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const [obj, setObj] = useState({
    username: "",
    password: "",
  });
  const [resData, setrResData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("swefdwefwe");
    let t = true,
      err = {};
    if (!obj.username) {
      t = false;
      err = { ...err, username: true };
    }
    if (!obj.password) {
      t = false;
      err = { ...err, password: true };
    }

    if (t) {
      console.log("ax");
      // const body = {
      //   username: obj.username,
      //   password: obj.password,
      // };
      Axios()
        // .post(`/myself`)
        .then((r) => {
          setrResData(r?.data?.data ?? {});
        })
        .catch((e) => {})
        .finally(() => {
          setLoading(false);
        });
    } else {
      console.log("errrr");
      setLoading(false);
      setErrors(err);
    }
  };
  return (
    <>
      <CssStyle>
        <div className="body">
          <div className="main">
            <div className="card_one">
              <div className="card_system_one">
                <h3>Sign in</h3>
                <form className="system" onSubmit={onSubmit}>
                  <div className="system_input">
                    <label
                      style={errors?.username ? { color: " red" } : {}}
                      className="label"
                    >
                      Username
                    </label>
                    <br />
                    <InputMask
                      style={
                        errors?.username ? { border: "1px solid red" } : {}
                      }
                      type="text"
                      name="username"
                      placeholder=" john doe"
                      value={obj?.username}
                      onChange={(e) => {
                        setObj({ ...obj, username: e.target.value });
                        setErrors({ ...errors, username: false });
                      }}
                    />
                  </div>
                  <div className="system_input">
                    <label
                      style={errors?.username ? { color: " red" } : {}}
                      className="label"
                    >
                      Password
                    </label>
                    <br />
                    <div className="input">
                      <InputMask
                        style={
                          errors?.username ? { border: "1px solid red" } : {}
                        }
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Repeat the password"
                        value={obj?.username}
                        onChange={(e) => {
                          setObj({ ...obj, username: e.target.value });
                          setErrors({ ...errors, username: false });
                        }}
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
                      {loading ? (
                        "Yuklanmoqda"
                      ) : (
                        <button type="submit">Button</button>
                      )}
                    </div>
                    <p>
                      Already signed up?
                      <Link to="/" className="text">
                        Go to sign up.
                      </Link>
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
