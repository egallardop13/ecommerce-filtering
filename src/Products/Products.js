import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

function products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shoe"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-stars" />
              <AiFillStar className="rating-stars" />
              <AiFillStar className="rating-stars" />
              <AiFillStar className="rating-stars" />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                $<del>300</del> $200
              </div>
              <div className="bag">
                <BsFillBagFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default products;
