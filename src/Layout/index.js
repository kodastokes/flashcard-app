import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <div>
        <button>Create Deck</button>
        </div>
        <div>
          <h2>Rendering in React</h2>
          <p>React's component structure allows for quickly building a complex web application that relies on DOM manipulation.</p>
          <button>View</button>
          <button>Study</button>
          <button>Delete</button>
        </div>
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
