import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import CardComponent from "./Card";
import Modesa from "./Modesa";
import {
  Nav,
  NavItem,
  Dropdown,
  NavLink,
  Card,
} from 'reactstrap';

function Principal() {
  return (
    <div>
      <CardComponent/>
    </div>
  );
}
function Peliculas() {
  return (
    <div>
      <Modesa/>
    </div>
  );
}


function Barran(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Nav tabs
          justified
          pills>
        <NavItem>
          <NavLink><Link to='/'>PRINCIPAL</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to='/pag2'>PELICULAS</Link></NavLink>
        </NavItem>
      </Nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Principal></Principal>}></Route>
          <Route path="/pag2" element={<Peliculas></Peliculas>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Barran;