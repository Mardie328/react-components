import Country from "./Country";
import BottomMenu from "./BottomMenu";
import "./BottomMenu.css";

const Footer = () => {
  return (
    <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
      <Country />
      <BottomMenu
        BottomMenuLeft1={"About"}
        BottomMenuLeft2={"Advertising"}
        BottomMenuLeft3={"Business"}
        BottomMenuLeft4={"How Search works"}
        BottomMenuText={"Carbon neutral since 2007"}
        BottomMenuRight1={"Privacy"}
        BottomMenuRight2={"Terms"}
        BottomMenuRight3={"Settings"}
      />
    </div>
  );
};

export default Footer;
