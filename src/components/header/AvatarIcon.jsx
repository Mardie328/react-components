import avatar from "../../Images/avatar.png";

const AvatarIcon = () => {
  return (
    <img
      src={avatar}
      alt={"app launcher"}
      style={{ borderRadius: "50%", marginLeft: "20px", cursor: "pointer" }}
    />
  );
};

export default AvatarIcon;
