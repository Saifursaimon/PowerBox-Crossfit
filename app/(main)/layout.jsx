import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const layout = ({ children }) => {
  return (
    <div className="w-[1440px] bg-base-100 mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
