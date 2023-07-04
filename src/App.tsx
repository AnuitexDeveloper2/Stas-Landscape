import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/contactUs/ContactUs";
import HomePage from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-us" element={<Contacts />} />
    </Routes>
  );
}

export default App;
