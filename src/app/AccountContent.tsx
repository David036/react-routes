import { NavLink, useParams } from "react-router-dom";

export default function AccountContent(): JSX.Element {
  let { id } = useParams();

  return (
    <div className="account">
      <h1>Account {id === "1" ? "One" : id === "2" ? "Two" : "Three"}</h1>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
}
