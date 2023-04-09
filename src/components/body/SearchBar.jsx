import "./SearchBar.css";
import { useState } from "react";
import searchBarIcon from "../../Images/search-bar.svg";
import microphoneIcon from "../../Images/microphone-icon.png";
import googleLensIcon from "../../Images/google-lens.png";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setInputValue(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <div className="top-container">
      <img src={searchBarIcon} className="search-icon" alt="search bar icon" />
      <form>
        <input
          type="text"
          className="input"
          onKeyDown={handleEnterKeyPress}
        ></input>
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

      {inputValue && (
        <div className="newInputContainer">
          <p className="newInput">{inputValue}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
