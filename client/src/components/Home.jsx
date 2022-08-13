import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Try from "./Try.jsx";
import Introduction from "./Introduction.jsx";
import Footer from "./Footer.jsx";
import Update from "./VersionUpdate/Update.jsx";
import React from 'react'
import Route from "./Route.jsx";
const Home = () => {
  return (
    <div className=" bg-gray-800 text-white">
    <Navbar />
    <Header />
    <Try />
    <Introduction />
    <Route />
    <Update />
    <Footer />
  </div>
  )
}

export default Home

