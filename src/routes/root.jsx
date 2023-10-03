import {
     Link,
      Outlet,
      
    } from "react-router-dom";

 
export default function Root() {
      
      
    
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
                <Link to={`/guest/all-products}`}>Guest</Link>
              </li>
              <li>
                <Link to={`/login/profile`}>Login</Link>
              </li>
              <li>
                <Link to={`/register/profile`}>Register</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
        <Outlet />
      </>
    );
  }