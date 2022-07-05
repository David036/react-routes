import { NavLink, useParams } from "react-router-dom";

export default function AccountContent(): JSX.Element {
  const { id } = useParams();

  return (
    <div className="account">
      <h1>Account {id === "1" ? "one" : id === "2" ? "two" : "three"}</h1>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
}
