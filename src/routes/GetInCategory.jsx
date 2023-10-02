import PropTypes from 'prop-types';

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
    <div className="searchBar">
   
<div className="min-h-screen bg-gray-100 flex justify-center items-center px-20">
  <div className="space-y-10">
    <h1 className="text-center mt-10 text-4xl font-bold">Search our catalog</h1>
    <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
      <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="bg-gray-100 outline-none" type="text" placeholder="Search by category..." />
      </div>
      <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
        

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
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
    </div>
  </div>
</div>

  )
}

// don't forget to write the propTypes
GetInCategory.propTypes = {
  products:PropTypes.arrayOf(PropTypes.object).isRequired,
  setProducts:PropTypes.func.isRequired,
};