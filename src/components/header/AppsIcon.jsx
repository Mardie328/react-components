import appLauncherIcon from "../../Images/apps-launcher-icon.svg";

const AppsIcon = () => {
  return (
    <img
      src={appLauncherIcon}
      alt="app launcher icon"
      style={{
        backgroundColor: "white",
        height: "25px",
        marginLeft: "20px",
        cursor: "pointer",
      }}
    />
  );
};

export default AppsIcon;
