import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div className="button-container">
      <button>{props.Button1} </button>
      <button>{props.Button2} </button>
    </div>
  );
};

export default Buttons;
