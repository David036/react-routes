import { NavLink, useParams } from "react-router-dom";

export default function AccountContent(): JSX.Element {
  const { id } = useParams();

  return (
    <div className="account">
      <h1>Account {id}</h1>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
}
