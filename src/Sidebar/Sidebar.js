import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";
import { GiShoppingCart } from "react-icons/gi";
import { ImRocket } from "react-icons/im";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <ImRocket size={40} style={{ top: "20px" }} />
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
