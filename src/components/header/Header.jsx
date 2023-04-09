import "./Header.css";
import MenuItem from "./MenuItem";
import AppsIcon from "./AppsIcon";
import AvatarIcon from "./AvatarIcon";
const Header = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <MenuItem value={"Gmail"} />
      <MenuItem value={"Images"} />
      <AppsIcon />
      <AvatarIcon />
    </div>
  );
};

export default Header;
