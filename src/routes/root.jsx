import { Link, Outlet, Form } from "react-router-dom";

import "../CSS/LandingPage.css";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Menu</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search Products"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/guest/all-products">Guest</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
      <Outlet />
      </div>
      
    </>
  );
}
