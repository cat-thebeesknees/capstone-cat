
//Details Button
import { Link, useNavigate } from 'react-router-dom';
// import SingleProductCard from './SingleProductCard';
import PropTypes from 'prop-types';
import '../CSS/DetailsButton.css';
const DetailsButton = ({ selectedProduct }) => {
    const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate('single-product-card');
  };

  return (
    <div className="details-button">
      <nav className='dbutton'>
        {selectedProduct && (
          <Link to={selectedProduct.id} className="singleProductCardLink">
            <button className="rainbow-button" onClick={handleClick}>
              See Details
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};
DetailsButton.propTypes = {
  selectedProduct: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    
  }),
};

export default DetailsButton;

