import "./SearchComp.css";
import "boxicons/css/boxicons.min.css";

export default function SearchComp() {
  return (
    <div className="search-container">
      <input className="search-input" type="search" placeholder="Search" />
      <button type="submit" className="search-button">
        <i className="bx bx-search bx-sm bx-color" />
      </button>
    </div>
  );
}
