import "./Header.css";

const MenuItem = (props) => {
  return (
    <a className="menu" href="#">
      {props.value}
    </a>
  );
};

export default MenuItem;
