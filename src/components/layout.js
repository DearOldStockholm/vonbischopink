import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-serif text-black bg-beige p-4">
      <main className="flex-1 w-full border-black border p-8 grid grid-rows-mobile md:grid-rows-desktop">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
