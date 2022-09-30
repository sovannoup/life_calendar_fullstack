import { BeatLoader, FadeLoader } from "react-spinners";
import "./LoadingIndicatorComp.css";

function LoadingIndicatorComp() {
  return (
    <div className="loadingIndicator-con">
      {/* <FadeLoader height="10" color="#0799A6" /> */}
      <BeatLoader size="10" color="#ffffff" />
    </div>
  );
}

export default LoadingIndicatorComp;
