import {
     Link,
      Outlet,
      useLoaderData,
      NavLink,
    } from "react-router-dom";
import { fetchAllProducts } from "../API";


export async function loader() {
    const products = await fetchAllProducts();
    return { products };
        
}


export default function Root() {
    const { products } = useLoaderData();   
      
    
    return (
      <>
        <div id="sidebar">
          <h1>Menu</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={`products/${products}`}>Guest</NavLink>
              </li>
              <li>
                <Link to={`/login/profile`}>Login</Link>
              </li>
              <li>
                <Link to={`/register/profile`}>Guest</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
        <Outlet />
      </>
    );
  }