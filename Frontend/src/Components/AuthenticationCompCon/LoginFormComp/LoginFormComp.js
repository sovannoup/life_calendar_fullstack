import "./LoginFormComp.css";
import { useFormik } from "formik";
import { loginSchema } from "./LoginFormSchemas";
import InvalidMessageComp from "../../InvalidMessageComp/InvalidMessageComp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicatorComp from "../../LoadingIndicatorComp/LoadingIndicatorComp";
// import { Circles } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// https://github.com/mhnpd/react-loader-spinner/issues/124

import UserAPI from "../../../api/user";

function LoginFormComp() {
  const navigate = useNavigate();
  const [loginFail, setLoginFail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const unsucessfulMessage =
    "Your login was unsuccessful, please review your email or password.";

  const forgetPasswordClicked = () => {
    console.log("Forget Password");
  };

  const signUpClicked = () => {
    console.log("Sign Up");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      save_login: "",
    },
    validationSchema: loginSchema,
    onSubmit: (value) => {
      setIsLoading(true);
      const email = value.email;
      const password = value.password;
      const body = { email, password };
      const response = UserAPI.login(body);
      response
        .then((result) => {
          const data = result.data;
          if (data.status === 200) {
            console.log("save login: ", value.save_login);
            if (value.save_login) {
              localStorage.setItem("token", data.result.token);
            } else {
              sessionStorage.setItem("token", data.result.token);
            }

            navigate("/home");
            window.location.reload();
          } else {
            setLoginFail(true);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setLoginFail(true);
          setIsLoading(false);
        });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="loginform-form-comp">
        <InvalidMessageComp status={loginFail} message={unsucessfulMessage} />
        <label className="loginform-form-label" htmlFor="email">
          Email
        </label>
        <br />
        <div style={{ height: 60 }}>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.email && formik.touched.email && formik.values.email
                ? "loginform-form-input loginform-form-input-error"
                : "loginform-form-input"
            }
            type="email"
            name="email"
            placeholder="name@example.com"
          />
          {formik.errors.email &&
            formik.touched.email &&
            formik.values.email && (
              <p className="loginform-form-text-error">{formik.errors.email}</p>
            )}
        </div>
        <br />

        <label className="loginform-form-label" htmlFor="password">
          Password
        </label>
        <br />
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          className="loginform-form-input"
          type="password"
          name="password"
          placeholder="min. 8 characters"
        />
        <br />

        <div className="loginform-form-checkbox-con">
          <div style={{ display: "flex", width: 175, alignItems: "center" }}>
            <input
              value={formik.values.save_login}
              onChange={formik.handleChange}
              className="loginform-form-checkbox"
              type="checkbox"
              name="save_login"
            />
            <label
              className="loginform-form-checkbox-text"
              htmlFor="save_login"
            >
              Keep me logged in
            </label>
          </div>

          <div
            onClick={() => forgetPasswordClicked()}
            className="loginform-forgetpwd-con"
          >
            <p className="loginform-form-checkbox-text">
              <b style={{ cursor: "pointer" }}>Forget password</b>
            </p>
          </div>
        </div>

        <div style={{ width: 350, height: 75, position: "relative" }}>
          <input
            className="loginform-form-input loginform-form-submit"
            type="submit"
            value="LOGIN"
            onClick={formik.handleSubmit}
          />

          {isLoading && (
            <div
              style={{
                position: "absolute",
                top: 13,
                right: 150,
                backgroundColor: "#26b9b3",
              }}
            >
              <LoadingIndicatorComp />
            </div>
          )}
        </div>
      </form>

      <div
        onClick={() => signUpClicked()}
        className="loginform-leftside-text-con"
      >
        <p className="loginform-leftside-text">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <b style={{ cursor: "pointer" }}>Sign up</b>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginFormComp;
