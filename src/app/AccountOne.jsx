import React from "react";
import { NavLink } from "react-router-dom";

export default function AccountOne() {
  return (
    <div className="account">
      <h1>Account One</h1>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
}
