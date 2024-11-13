import { useState } from "react";
import "./App.css";
import Movies from "./mocks/movies.jsx";
import Layout from "./layout/Layout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routering from "./Routering.jsx"


function App() {
  

  return (
    <>
      <RouterProvider router = {Routering} />
    </>
  );
}

export default App;
