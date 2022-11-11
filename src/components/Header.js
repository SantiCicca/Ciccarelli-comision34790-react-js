import React from "react";
import NavBar from "./NavBar";
import RenderItems from "./RenderItems";
import { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { DropdownButton } from "react-bootstrap";

function Header() {
  return (
    <header id="header-index">
      <h1>CICCOMMERCE</h1>
      <RenderItems nombre="Santiago" apellido="Ciccarelli" />

      <NavBar />
    </header>
  );
}

export default Header;
