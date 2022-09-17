import "./LoginScreen.css";
import logo_black_img from "../../Assets/logo_black_img.png";
import LoginFormComp from "../../Components/AuthenticationCompCon/LoginFormComp/LoginFormComp";
import LoginSlideComp from "../../Components/AuthenticationCompCon/LoginSlideComp/LoginSlideComp";
import sign_in_img from "../../Assets/sign_in_img.png";

function LoginScreen() {
  const loginsc_title = "Welcome Back";
  const loginsc_text =
    "Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.";

  return (
    <div className="loginsc-con">
      <div className="loginsc-leftside-con">
        <div className="loginsc-leftside-logo-con">
          <img
            className="loginsc-leftside-logo"
            src={logo_black_img}
            alt="90. Calendar Logo"
          />
        </div>
        <div
          style={{
            width: 350,
            height: 660,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="loginsc-leftside-h1-con">
            <h1
              className="loginsc-leftside-h1"
              style={{
                fontFamily: "Nunito",
                color: "#002834",
              }}
            >
              Sign in to
            </h1>
            <h1
              className="loginsc-leftside-h1"
              style={{
                fontFamily: "Kantumruy",
                color: "#002834",
              }}
            >
              &nbsp;90
            </h1>
            <h1 className="loginsc-leftside-h1" style={{ color: "#D83B3B" }}>
              .
            </h1>
          </div>

          <div className="loginsc-leftside-text-con">
            <p className="loginsc-leftside-text">Please enter your details.</p>
          </div>

          <LoginFormComp />
        </div>
      </div>

      <div className="loginsc-rightside-con">
        <LoginSlideComp
          img_src={sign_in_img}
          title={loginsc_title}
          text={loginsc_text}
        />
      </div>
    </div>
  );
}

export default LoginScreen;
