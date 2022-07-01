import { NavLink } from "react-router-dom";
import { TitleTypes } from "../../src/app/types";

import "./style.scss";

export default function Main({accounts}:any): JSX.Element {
  const titleColumns: TitleTypes[] = [
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

  

  return (
    <div className="contentSection">
      <ul className="tableTitles">
        {titleColumns.map((account: TitleTypes) => {
          return <li>{account.title}</li>;
        })}
      </ul>
      <div className="tableUsers">
        {accounts.map((account: TitleTypes) => {
          return (
            <ul>
              <li>{account.id}</li>
              <li>{account.name}</li>
              <li>{account.createdOn}</li>
              <li>{account.owner}</li>
              <li>
                <NavLink to={`account${account.id}`}>View</NavLink>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
