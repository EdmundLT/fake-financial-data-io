import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Try from "./Try.jsx";
import Introduction from "./Introduction.jsx";
import Footer from "./Footer.jsx";
import Update from "./VersionUpdate/Update.jsx";
import React from 'react'

const Home = () => {
  return (
    <div className=" bg-gray-800 text-white">
    <Navbar />
    <Header />
    <Try />
    <Introduction />

    <Update />
    <Footer />
  </div>
  )
}

export default Home

