import { Component } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import { NavbarProps } from "../interface/Interface";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar {...(this.props as NavbarProps)} />
        <Outlet />
      </>
    );
  }
}
