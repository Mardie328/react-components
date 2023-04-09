import leafImage from "../../Images/leaf-image.png";

const BottomMenu = (props) => {
  return (
    <div className="bottomMenu">
      <div className="bottomMenuLeft">
        <a href="#" className="bottomMenuLink">
          {props.BottomMenuLeft1}
        </a>
        <a href="#" className="bottomMenuLink">
          {props.BottomMenuLeft2}
        </a>
        <a href="#" className="bottomMenuLink">
          {props.BottomMenuLeft3}
        </a>
        <a href="#" className="bottomMenuLink">
          {props.BottomMenuLeft4}
        </a>
      </div>
      <a href="#" className="bottomMenuText leaf-cont">
        <img src={leafImage} className="leaf" />
        {props.BottomMenuText}
      </a>
      <div className="bottomMenuRight">
        <a href="#" className="bottomMenuLink">
          {props.BottomMenuRight1}
        </a>
        <a href="#" className="bottomMenuLink">
          {props.BottomMenuRight2}
        </a>
        <a href="#" className="bottomMenuLink">
          {props.BottomMenuRight3}
        </a>
      </div>
    </div>
  );
};

export default BottomMenu;
