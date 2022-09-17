import "./SignUpScreen.css";
import logo_white_img from "../../Assets/logo_white_img.png";
import SignUpFormComp from "../../Components/AuthenticationCompCon/SignUpFormComp/SignUpFormComp";
import LoginSlideComp from "../../Components/AuthenticationCompCon/LoginSlideComp/LoginSlideComp";
import sign_up_img from "../../Assets/sign_up_img.png";

function SignUpScreen() {
  const signupsc_title = "Join us to make your life more exciting!";
  const signupsc_text =
    "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.";

  return (
    <div className="signupsc-con">
      <div className="signupsc-leftside-con">
        <LoginSlideComp
          img_src={sign_up_img}
          title={signupsc_title}
          text={signupsc_text}
        />
      </div>
      <div className="signupsc-leftside-logo-con">
        <img
          className="signupsc-leftside-logo"
          src={logo_white_img}
          alt="90. Calendar Logo"
        />
      </div>

      <div className="signupsc-rightside-con">
        <div
          style={{
            width: 350,
            height: 660,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="signupsc-rightside-h1-con">
            <h1
              className="signupsc-rightside-h1"
              style={{
                fontFamily: "Nunito",
                color: "#002834",
              }}
            >
              Create Account
            </h1>
          </div>

          <div className="signupsc-rightside-text-con">
            <p className="signupsc-rightside-text">
              Please enter your details.
            </p>
          </div>

          <SignUpFormComp />
        </div>
      </div>
    </div>
  );
}

export default SignUpScreen;
