import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import axios from "axios";
import { CssStyle } from "./CssStyle";
import { api_host } from "../utils/api";
import { genereteSign } from "../utils/generateSIgn";
import Axios from "../utils/httpClient";

const Sign_up = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    key: false,
    secret: false,
    general: false,
  });
  const [obj, setObj] = useState({
    name: "",
    email: "",
    key: "",
    secret: "",
  });
  const [resData, setrResData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("swefdwefwe");
    let t = true,
      err = {};
    if (!obj.name) {
      t = false;
      err = { ...err, name: true };
    }
    if (!obj.email) {
      t = false;
      err = { ...err, email: true };
    }
    if (!obj.key) {
      t = false;
      err = { ...err, key: true };
    }
    if (!obj.secret) {
      t = false;
      err = { ...err, secret: true };
    }

    if (t) {
      console.log("ax");
      const body = {
        name: obj.name,
        email: obj.email,
        key: obj.key,
        secret: obj.secret,
      };
      localStorage.setItem("key", obj.key);
      localStorage.setItem("secret", obj.secret);
      Axios()
        .post(`/signup`, body)
        .then((r) => {
          setrResData(r?.data?.data ?? {});
        })
        .catch((e) => {
          setErrors({ ...errors, general: true });
        })
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
            <div className="card">
              <div className="card_system">
                <h3>Sign up</h3>
                <form className="system" onSubmit={onSubmit}>
                  <div className="system_input">
                    <label
                      style={errors?.name ? { color: " red" } : {}}
                      className="label"
                    >
                      Username
                    </label>
                    <br />
                    <InputMask
                      type="text"
                      style={errors?.name ? { border: "1px solid red" } : {}}
                      name="name"
                      placeholder=" john doe"
                      value={obj?.name}
                      onChange={(e) => {
                        setObj({ ...obj, name: e.target.value });
                        setErrors({ ...errors, name: false });
                      }}
                    />
                  </div>
                  <div className="system_input">
                    <label
                      style={errors?.name ? { color: " red" } : {}}
                      className="label"
                    >
                      Email
                    </label>
                    <br />
                    <InputMask
                      style={errors?.email ? { border: "1px solid red" } : {}}
                      type="email"
                      name="email"
                      placeholder=" Email"
                      value={obj?.email}
                      onChange={(e) => {
                        setObj({ ...obj, email: e.target.value });
                        setErrors({ ...errors, email: false });
                      }}
                    />
                  </div>
                  <div className="system_input">
                    <label
                      style={errors?.name ? { color: " red" } : {}}
                      className="label"
                    >
                      Key
                    </label>
                    <br />

                    <InputMask
                      style={errors?.key ? { border: "1px solid red" } : {}}
                      type={showPassword ? "text" : "password"}
                      name="key"
                      placeholder="Enter your password"
                      value={obj?.key}
                      onChange={(e) => {
                        setObj({ ...obj, key: e.target.value });
                        setErrors({ ...errors, key: false });
                      }}
                    />
                  </div>
                  <div className="system_input">
                    <label
                      style={errors?.name ? { color: " red" } : {}}
                      className="label"
                    >
                      Secret
                    </label>
                    <br />
                    <div className="input">
                      <InputMask
                        style={
                          errors?.secret ? { border: "1px solid red" } : {}
                        }
                        type={showPassword ? "text" : "password"}
                        name="secret"
                        placeholder="Repeat the password"
                        value={obj?.secret}
                        onChange={(e) => {
                          setObj({ ...obj, secret: e.target.value });
                          setErrors({ ...errors, secret: false });
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
                        <button type="submit">Submit</button>
                      )}
                    </div>
                    <p>
                      Already signed up?
                      <Link to="/Sign_in" className="text">
                        Go to sign in.
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

export default Sign_up;
