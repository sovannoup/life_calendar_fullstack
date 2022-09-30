import "./ProfileNoteComp.css";
// import flower_img from "../../../Assets/flower_img.png";

function ProfileNoteComp(props) {
  const { note_date, note_text, note_img } = props;
  // console.log(props);

  return (
    <div className="profilenote-comp">
      <div className="profilenote-title-con">
        <h1 className="profilenote-title">{note_date}</h1>
      </div>

      <div
        style={{
          width: 180,
          height: 150,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {/* <div className="profilenote-text-con profilenote-text-n-img-con">
          <p className="profilenote-text profilenote-text-n-img">
            Iste qui qui earum maiores aliquid architecto sint atque. Ad aut
            est. Esse perspiciatis excepturi sunt doloremque fugit. Iusto
            commodi voluptatem soluta repellat aspernatur. Iste qui qui earum
            maiores aliquid architecto sint atque. Ad aut est. Esse perspiciatis
            excepturi sunt mm
          </p>
        </div>
        <div className="profilenote-img-con">
          <img src={flower_img} className="profilenote-img" alt="thumbnail" />
        </div>

        <div className="profilenote-text-con">
          <p className="profilenote-text">
            Iste qui qui earum maiores aliquid architecto sint atque. Ad aut
            est. Esse perspiciatis excepturi sunt doloremque fugit. Iusto
            commodi voluptatem soluta repellat aspernatur. Iste qui qui earum
            maiores aliquid architecto sint atque. Ad aut est. Esse perspiciatis
            excepturi sunt mm
          </p>
        </div> */}

        {note_text && (
          <div
            className={
              note_img
                ? "profilenote-text-con profilenote-text-n-img-con"
                : "profilenote-text-con"
            }
          >
            <p
              className={
                note_img
                  ? "profilenote-text profilenote-text-n-img"
                  : "profilenote-text"
              }
            >
              {note_text}
            </p>
          </div>
        )}

        {note_img && (
          <div className="profilenote-img-con">
            <img src={note_img} className="profilenote-img" alt="thumbnail" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileNoteComp;
