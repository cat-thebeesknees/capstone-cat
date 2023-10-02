//Guest.jsx
import { useEffect, useState } from "react";
import AllProducts from "./AllProducts";



const Guest = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <div className="guestProducts">
        <AllProducts products={products} />

         </div>
    </>
  );
};
export default Guest;
