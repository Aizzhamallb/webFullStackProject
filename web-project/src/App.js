import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
