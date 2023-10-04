//SingleProductCard.jsx
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AddNewCart from "./AddNewCart";
import "../CSS/SingleProductCard.css";
function SingleProductCard({ selectedProduct }) {
  const navigate = useNavigate();

  if (!selectedProduct) {
    return null;
  }

  const handleReturnToProducts = () => {
    // Navigate back to the all products
    navigate("all-products");
  };
  return (
    <div className="product-container">
      <div
        id="single-product-card"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="single-card">
              <div className="row">
                <div className="col-md-6 text-center align-self-center">
                  <img
                    className="img-fluid"
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  ></img>
                </div>
                <div className="col-md-6 info">
                  <div className="row title">
                    <div className="col">
                      <h2 className="single-title">{selectedProduct.title}</h2>
                      <h4 className="single-category">
                        {selectedProduct.category}
                      </h4>
                    </div>
                    <div className="col text-right">
                      <a href="#">
                        <i className="fa fa-heart-o"></i>
                      </a>
                    </div>
                  </div>
                  <p>{selectedProduct.description}</p>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star-half-full"></span>
                  <span id="reviews">1590 Reviews</span>
                  <div className="row price">
                    <div className="row">
                      <i className="fa fa-usd" aria-hidden="true"></i>
                      {selectedProduct.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row lower">
                <div className="col"></div>
                <div className="col text-right align-self-center">
                  <Link to="add-new-cart">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleReturnToProducts} className="return-button">
        Return to All Products
      </button>

      <Link to="add-new-cart" className="add-to-cart-link">
        Add to cart
      </Link>

      <AddNewCart />
      
    </div>
  );
}

SingleProductCard.propTypes = {
  selectedProduct: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default SingleProductCard;