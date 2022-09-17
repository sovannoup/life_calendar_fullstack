import "./SignUpFormComp.css";
import { useFormik } from "formik";
import { signUpSchema } from "./SignUpFormSchemas";
import InvalidMessageComp from "../../InvalidMessageComp/InvalidMessageComp";
import { useState } from "react";

function SignUpFormComp() {
  const [loginFail, setLoginFail] = useState(false);
  const unsucessfulMessage =
    "Your sign up was unsuccessful, please try again later.";

  const onSignUp = () => {
    setLoginFail(true);
    console.log(loginFail);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSignUp,
  });

  //   console.log(formik.errors);
  //   console.log(formik.setTouched.email);
  console.log(formik.errors);

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
      <form onSubmit={formik.handleSubmit} className="signupform-form-comp">
        <InvalidMessageComp status={loginFail} message={unsucessfulMessage} />

        <label className="signupform-form-label" htmlFor="email">
          Name
        </label>
        <br />
        <div style={{ height: 60 }}>
          <input
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.name && formik.touched.name && formik.values.name
                ? "signupform-form-input signupform-form-input-error"
                : "signupform-form-input"
            }
            type="text"
            name="name"
            placeholder="john doe"
          />
          {formik.errors.name && formik.touched.name && formik.values.name && (
            <p className="signupform-form-text-error">{formik.errors.name}</p>
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

        <input
          className="signupform-form-input signupform-form-submit"
          type="submit"
          value="SIGN UP"
          onClick={() => onSignUp()}
        />
      </form>
    </div>
  );
}

export default SignUpFormComp;
