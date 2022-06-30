import React from "react";
import { NavLink } from "react-router-dom";

export default function AccountTwo() {
  return (
    <div className="account">
      <h1>Account Two</h1>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
}
