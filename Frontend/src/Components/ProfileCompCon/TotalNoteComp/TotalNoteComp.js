import "./TotalNoteComp.css";

function TotalNoteComp(props) {
  const { total_notes, title } = props;

  return (
    // <div
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "aqua",
    //   }}
    // >
    <div className="totalnote-comp">
      <div className="totalnote-h1-con">
        <h1 className="totalnote-h1">{total_notes}</h1>
      </div>

      <div className="totalnote-p-con">
        <p className="totalnote-p">{title}</p>
      </div>
    </div>
    // </div>
  );
}

export default TotalNoteComp;
