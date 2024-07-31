import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";
import { GiShoppingCart } from "react-icons/gi";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <GiShoppingCart size={40} />
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}

export default Sidebar;
