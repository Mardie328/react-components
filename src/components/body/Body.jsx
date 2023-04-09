import GoogleLogo from "./Logo";
import SearchBar from "./SearchBar";
import Buttons from "./Buttons";
import Languages from "./Languages";

const Body = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      <GoogleLogo />
      <SearchBar />
      <Buttons Button1={"Google Search"} Button2={"I'm Feeling Lucky"} />
      <Languages
        Language1={"Hausa"}
        Language2={"Igbo"}
        Language3={"Èdè Yorùbá"}
        Language4={"Nigerian Pidgin"}
      />
    </div>
  );
};

export default Body;
