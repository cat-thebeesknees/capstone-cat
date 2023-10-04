import PropTypes from "prop-types";

//Get products in a specific category
//You can also use limit(Number) and sort(asc|desc) as a query string to get your ideal results
export default function GetInCategory({ products, setProducts }) {
  const handleSortChange = (e) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === "all") {
      setProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
      );
      const sortedProducts = filteredProducts.slice().sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });

      setProducts(sortedProducts);
    }
  };

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="sorter">
      <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <label htmlFor="category-select">Sort by Category:</label>
        <select id="category-select" onChange={handleSortChange}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="mens">Men&#39;s</option>
          <option value="womens">Women&#39;s</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// don't forget to write the propTypes
GetInCategory.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProducts: PropTypes.func.isRequired,
};
