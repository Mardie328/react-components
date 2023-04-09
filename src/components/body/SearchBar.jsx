import "./SearchBar.css";
import searchBarIcon from "../../Images/search-bar.svg";
import microphoneIcon from "../../Images/microphone-icon.png";
import googleLensIcon from "../../Images/google-lens.png";

const SearchBar = () => {
  return (
    <div className="top-container">
      <img src={searchBarIcon} className="search-icon" alt="search bar icon" />
      <form>
        <input type="text" className="input"></input>
      </form>
      <img
        src={microphoneIcon}
        className="microphone-icon"
        alt="microphone icon"
      />

      <img
        src={googleLensIcon}
        className="googleLens-icon"
        alt="search image icon"
      />
    </div>
  );
};

export default SearchBar;
