import React from "react";
import Provider from "./Provider";
import NavBar from "./NavBar";
import Footer from "./Footer";

const LayOut = ({ children }) => {
  return (
    <Provider>
      <NavBar />
      {children}
      <Footer />
    </Provider>
  );
};

export default LayOut;
