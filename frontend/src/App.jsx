import React from "react";
import reactDOM from "react-dom/client"
import Home from "./pages/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Layout from "./components/Layout";
import AddNoteCard from "./components/AddNoteCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/addNote" element={<AddNoteCard />}></Route>
      </Route>

    </Routes>

  )
}

export default App;