import { NavLink } from "react-router-dom";
import { AccountTypes } from "./types";

import "./style.scss";

export default function Main(): JSX.Element {
  const titleColumns: AccountTypes[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      key: "createdOn",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },

    {
      title: "Action",
      key: "action",
      dataIndex: "action",
    },
  ];

  const accounts: AccountTypes[] = [
    {
      id: "1",
      name: "Account 1",
      createdOn: "5-8-2021",
      owner: "User 1",
    },
    {
      id: "2",
      name: "Account 2",
      createdOn: "5-8-2021",
      owner: "User 2",
    },
    {
      id: "3",
      name: "Account 3",
      createdOn: "5-8-2021",
      owner: "User 3",
    },
  ];

  return (
    <div className="contentSection">
      <ul className="tableTitles">
        {titleColumns.map((account: AccountTypes) => (
          <li>{account.title}</li>
        ))}
      </ul>
      <div className="tableUsers">
        {accounts.map((account: AccountTypes) => (
          <ul>
            <li>{account.id}</li>
            <li>{account.name}</li>
            <li>{account.createdOn}</li>
            <li>{account.owner}</li>
            <li>
              <NavLink to={`account${account.id}`}>View</NavLink>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
