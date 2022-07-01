import { NavLink } from "react-router-dom";

export default function AccountContent({ accountNumber }: any): JSX.Element {
  return (
    <div className="account">
      <h1>
        Account{" "}
        {accountNumber === "2" ? "Two" : accountNumber === "1" ? "One" : "Three"}
      </h1>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
}
