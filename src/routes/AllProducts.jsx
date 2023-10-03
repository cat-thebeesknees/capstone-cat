//AllProducts.jsx
import { useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";
 import { Route, Routes, useNavigate, Outlet } from "react-router-dom";
import GetInCategory from "./GetInCategory";




export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))

      .catch((error) => console.error("Error pulling data", error));
    console.log(setProducts);
  }, []);
  const handleProductClick = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setSelectedProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );

    navigate(`single-product-card/${productId}`);
  };

  return (
    <div className="all-products">
      <h1>Hilton</h1>
      <GetInCategory products={products} setProducts={setProducts} />
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} onClick={() => handleProductClick(product.id)}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
      <Routes>
        <Route
          path="single-product-card/:productId"
          element={<SingleProductCard selectedProduct={selectedProduct} />}
        />
      </Routes>

      <Outlet />
    </div>
  );
}