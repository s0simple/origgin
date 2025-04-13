import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Company from "../pages/company/Company";
import HowItWorks from "../pages/howitworks/HowItWorks";
import Feature from "../pages/features/Feature";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Feature />} />
        <Route path="HowItWorks" element={<HowItWorks />} />
        <Route path="Company" element={<Company />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
