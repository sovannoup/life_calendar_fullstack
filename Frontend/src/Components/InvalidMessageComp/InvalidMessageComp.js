import "./InvalidMessageComp.css";

function InvalidMessageComp(props) {
  const { status, message } = props;
  // console.log(status);
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
    status && (
      <div className="invalidmessage-p-error-con">
        <p className="invalidmessage-p-error">{message}</p>
      </div>
    )
    // </div>
  );
}

export default InvalidMessageComp;
