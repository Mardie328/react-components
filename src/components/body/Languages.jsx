import "./Languages.css";

const Languages = (props) => {
  return (
    <div className="top-div">
      <p>Google offered in:</p>
      <div className="languages-container">
        <a href="#" className="languages-link">
          {props.Language1}
        </a>
        <a href="#" className="languages-link">
          {props.Language2}
        </a>
        <a href="#" className="languages-link">
          {props.Language3}
        </a>
        <a href="#" className="languages-link">
          {props.Language4}
        </a>
      </div>
    </div>
  );
};

export default Languages;
