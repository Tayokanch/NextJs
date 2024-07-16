import React from "react";
import Footer from "./footer";
import HeroPage from "./HeroPage";
import NavBar from "./NavBar";
const AdminHomePage = () => {
  return (
    <div className="w-full h-full grid grid-rows-[auto_1fr_80px]">
      <NavBar />
      <HeroPage />
      <Footer />
    </div>
  );
};

export default AdminHomePage;
