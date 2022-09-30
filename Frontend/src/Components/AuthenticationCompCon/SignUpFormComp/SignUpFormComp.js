import "./SignUpFormComp.css";
import { useFormik } from "formik";
import { signUpSchema } from "./SignUpFormSchemas";
import InvalidMessageComp from "../../InvalidMessageComp/InvalidMessageComp";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAPI from "../../../api/user";
import LoadingIndicatorComp from "../../LoadingIndicatorComp/LoadingIndicatorComp";

function SignUpFormComp() {
  const navigate = useNavigate();
  const [loginFail, setLoginFail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const unsucessfulMessage = "Your sign up was unsuccessful, please try again later.";
  const [errorMessage, setErrorMessage] = useState(
    "Your sign up was unsuccessful, please try again later."
  );

  const loginClicked = () => {
    console.log("Sign Up");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      birthday: sessionStorage.birthday,
    },
    validationSchema: signUpSchema,
    onSubmit: (value) => {
      // const birthday = new Date(sessionStorage.getItem('birthday'))
      // console.log(birthday)
      setIsLoading(true);
      // const body = { ...value, birthday: "2001-05-19T05:47:08.644" };
      const body = { ...value };
      console.log(body);
      const response = UserAPI.signUp(body);
      response
        .then((result) => {
          const data = result.data;
          if (data.status === 200) {
            // console.log(data.result.token)
            // localStorage.setItem("token", data.result.token);
            navigate("/home");
          } else {
            setLoginFail(true);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          const data = error.response.data;
          if (data.status === 400) {
            // setErrorMessage(data.message);
            setLoginFail(true);
            setIsLoading(false);
          }
          console.log(data);
        });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="signupform-form-comp">
        <InvalidMessageComp status={loginFail} message={errorMessage} />

        <label className="signupform-form-label" htmlFor="email">
          Name
        </label>
        <br />
        <div style={{ height: 60 }}>
          <input
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.username &&
              formik.touched.username &&
              formik.values.username
                ? "signupform-form-input signupform-form-input-error"
                : "signupform-form-input"
            }
            type="text"
            name="username"
            placeholder="john doe"
          />
          {formik.errors.username &&
            formik.touched.username &&
            formik.values.username && (
              <p className="signupform-form-text-error">
                {formik.errors.username}
              </p>
            )}
        </div>
        <br />

        <label className="signupform-form-label" htmlFor="email">
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
                ? "signupform-form-input signupform-form-input-error"
                : "signupform-form-input"
            }
            type="email"
            name="email"
            placeholder="name@example.com"
          />
          {formik.errors.email &&
            formik.touched.email &&
            formik.values.email && (
              <p className="signupform-form-text-error">
                {formik.errors.email}
              </p>
            )}
        </div>
        <br />

        <label className="signupform-form-label" htmlFor="password">
          Password
        </label>
        <br />
        <div style={{ height: 60 }}>
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.password &&
              formik.touched.password &&
              formik.values.password
                ? "signupform-form-input signupform-form-input-error"
                : "signupform-form-input"
            }
            type="password"
            name="password"
            placeholder="min. 8 characters"
          />
          {formik.errors.password &&
            formik.touched.password &&
            formik.values.password && (
              <p className="signupform-form-text-error">
                {formik.errors.password}
              </p>
            )}
        </div>
        <br />

        <label className="signupform-form-label" htmlFor="Date of Birth">
          Date of Birth
        </label>
        <br />
        <div style={{ height: 60 }}>
          <input
            value={formik.values.birthday}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.birthday &&
              formik.touched.birthday &&
              formik.values.birthday
                ? "signupform-form-input signupform-form-input-error"
                : "signupform-form-input"
            }
            style={
              formik.values.birthday
                ? { color: "#000000" }
                : { color: "#83859c" }
            }
            type="date"
            name="birthday"
            placeholder="min. 8 characters"
          />
          {formik.errors.birthday &&
            formik.touched.birthday &&
            formik.values.birthday && (
              <p className="signupform-form-text-error">
                {formik.errors.birthday}
              </p>
            )}
        </div>
        <br />

        <div style={{ width: 350, height: 75, position: "relative" }}>
          <input
            className="signupform-form-input signupform-form-submit"
            type="submit"
            value="SIGN UP"
            onClick={formik.handleSubmit}
          />

          {isLoading && (
            <div
              style={{
                position: "absolute",
                top: 11,
                right: 145,
                backgroundColor: "#26b9b3",
              }}
            >
              <LoadingIndicatorComp />
            </div>
          )}
        </div>
      </form>

      <div
        onClick={() => loginClicked()}
        className="signupform-leftside-text-con"
      >
        <p className="signupform-leftside-text">
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <b style={{ cursor: "pointer" }}>Login</b>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpFormComp;
