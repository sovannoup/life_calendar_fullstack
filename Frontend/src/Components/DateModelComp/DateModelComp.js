import "./DateModelComp.css";
import close_button from "../../Assets/close_button.png";
import bdc_icon from "../../Assets/bdc_icon.png";
import { useFormik } from "formik";
import { dateModelSchema } from "./DateModelSchemas";
import { Link } from "react-router-dom";
import { useState } from "react";

function DateModelComp({ isToken, setIsPopup }) {
  const [isOpen, setIsOpen] = useState(isToken);

  const loginClicked = () => {
    console.log("Sign Up");
  };

  const formik = useFormik({
    initialValues: {
      birthday: "",
    },
    validationSchema: dateModelSchema,
    onSubmit: (value) => {
      setIsPopup(true)
      sessionStorage.birthday = value.birthday;
      setIsOpen(!isOpen);
      // console.log("user birthday: ", sessionStorage.birthday);
    },
  });

  console.log("Error:", formik.errors.birthday);

  console.log(sessionStorage.birthday);

  return (
    <>
      {isOpen && (
        <div className="datemodel-con-outside">
          <div className="datemodel-con">
            {/* <div className="datemodel-close-button-con">
          <img
            className="datemodel-close-button"
            src={close_button}
            alt="Close Button"
          />
        </div> */}

            <div className="datemodel-img-con">
              <img
                className="datemodel-img"
                src={bdc_icon}
                alt="Birthday Icon"
              />
            </div>

            <div className="datemodel-body-con">
              <div className="datemodel-body-h1-con">
                <h1 className="datemodel-body-h1">Enter Your Date of Birth</h1>
              </div>

              <div className="datemodel-body-p-con">
                <p className="datemodel-body-p">
                  By entering your date of birth, you will be able to see the
                  time in your 90 years of life.
                </p>
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className="datemodel-body-form-con"
              >
                <div>
                  <input
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.birthday &&
                      formik.touched.birthday &&
                      formik.values.birthday
                        ? "datemodel-body-form-date datemodel-body-form-date-error"
                        : "datemodel-body-form-date"
                    }
                    style={
                      formik.values.birthday
                        ? { color: "#000000" }
                        : { color: "#83859c" }
                    }
                    type="date"
                    name="birthday"
                  />
                  {formik.errors.birthday &&
                    formik.touched.birthday &&
                    formik.values.birthday && (
                      <p className="signupform-form-text-error">
                        {formik.errors.birthday}
                      </p>
                    )}
                </div>

                <input
                  className="datemodel-body-form-submit"
                  type="submit"
                  value="Let's get started"
                  onClick={() => formik.handleSubmit}
                />
              </form>

              <div
                onClick={() => loginClicked()}
                className="datemodel-body-form-text-con"
              >
                <p className="datemodel-body-form-text">
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
          </div>
        </div>
      )}
    </>
  );
}

export default DateModelComp;
