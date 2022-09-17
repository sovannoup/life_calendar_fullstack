import "./LoginFormComp.css";
import { useFormik } from "formik";
import { loginSchema } from "./LoginFormSchemas";
import InvalidMessageComp from "../../InvalidMessageComp/InvalidMessageComp";
import { Link } from "react-router-dom";

import { useState } from "react";

function LoginFormComp() {
  const [loginFail, setLoginFail] = useState(false);
  const status = 201;
  const unsucessfulMessage =
    "Your login was unsuccessful, please review your email or password.";

  const forgetPasswordClicked = () => {
    console.log("Forget Password");
  };

  const onLogin = () => {
    // setLoginFail(true);
    // console.log(loginFail);
    if (status !== 200) {
      setLoginFail(true);
      //   console.log("Login unsucessful");
    } else {
      setLoginFail(false);
      //   console.log("Login successful");
    }
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
    onLogin,
  });

  //   console.log(formik.errors);
  //   console.log(formik.setTouched.email);

  return (
    // <div
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
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

        <input
          className="loginform-form-input loginform-form-submit"
          type="submit"
          value="LOGIN"
          onClick={() => onLogin()}
        />
      </form>

      <div
        onClick={() => signUpClicked()}
        className="loginsc-leftside-text-con loginsc-leftside-signup-con"
      >
        <p className="loginsc-leftside-text">
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
