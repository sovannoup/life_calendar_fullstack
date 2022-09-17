import "./LoginSlideComp.css";

function LoginSlideComp(props) {
  const { img_src, title, text } = props;

  return (
    <div className="loginslide-comp">
      <div className="loginslide-img-con">
        <img
          className="loginslide-img"
          src={img_src}
          alt="Sign In Side Illustration"
        />
      </div>

      <div className="loginslide-h1-con">
        <h1 className="loginslide-h1">{title}</h1>
      </div>

      <div className="loginslide-p-con">
        <p className="loginslide-p">{text}</p>
      </div>
    </div>
  );
}

export default LoginSlideComp;
