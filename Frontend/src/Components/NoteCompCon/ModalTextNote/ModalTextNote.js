import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import "./ModalTextNoteStyle.css";
import Modal from "react-modal";
import JoditEditor from "jodit-react";

import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const SAVE_INTERVAL_MS = 2000;
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

export default function ModalTextNote(props) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  // Open modal
  useEffect(() => {
    const setProps = async () => {
      setOpen(props.open);
    };
    setProps();
  });

  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log(content);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(65, 55, 60, 0.8)",
    },
    content: {
      position: "absolute",
      width: 800,
      position: "relative",
      left: "25%",
      border: "1px solid #ccc",
      background: "#ffffff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "5px",
      outline: "none",
      padding: "0px",
    },
  };

  const copyStringToClipboard = function (str) {
    var el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const facilityMergeFields = [
    "FacilityNumber",
    "FacilityName",
    "Address",
    "MapCategory",
    "Latitude",
    "Longitude",
    "ReceivingPlant",
    "TrunkLine",
    "SiteElevation",
  ];

  const inspectionMergeFields = [
    "InspectionCompleteDate",
    "InspectionEventType",
  ];
  const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
    let optionGroupElement = document.createElement("optgroup");
    optionGroupElement.setAttribute("label", optionGrouplabel);
    for (let index = 0; index < mergeFields.length; index++) {
      let optionElement = document.createElement("option");
      optionElement.setAttribute("class", "merge-field-select-option");
      optionElement.setAttribute("value", mergeFields[index]);
      optionElement.text = mergeFields[index];
      optionGroupElement.appendChild(optionElement);
    }
    return optionGroupElement;
  };

  const buttons = [
    "|",
    "font",
    "fontsize",
    "|",
    "bold",
    "underline",
    "italic",
    "brush",
    "paragraph",
    "|",
    "superscript",
    "subscript",
    "|",
    "align",
    "|",
    "ul",
    "ol",
    "|",
    "image",
    "link",
    "table",
    "|",
    "print",
  ];

  const config = {
    zIndex: 0,
    readonly: false,
    toolbar: true,
    spellcheck: true,
    language: "en",
    toolbarButtonSize: "medium",
    toolbarAdaptive: false,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    buttons: buttons,
    uploader: {
      insertImageAsBase64URI: true,
    },
    imageDefaultWidth: 500,
    removeButtons: [],
    disablePlugins: [],
    extraButtons: [],
    width: 800,
    height: 842,
    sizeLG: 900,
    sizeMD: 700,
    sizeSM: 400,
    sizeSM: 400,
  };

  return (
    <Modal 
      isOpen={open} 
      onRequestClose={props.changeOpen} 
      style={customStyles}>
      <div id="container" className="ModalTextContainer" style={{zIndex: open ? 4 : 0}}>
        <div className="modal-header">
          <div className="modal-header-left">
            <p className="modal-header-left-text">Today, 28 August 2022</p>
          </div>
          <div className="modal-header-right">
            <button className="modal-header-left-btn">X</button>
          </div>
        </div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {
            console.log(newContent);
          }}
        />
      </div>
    </Modal>
  );
}
