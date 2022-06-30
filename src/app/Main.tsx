import { NavLink } from "react-router-dom";
import { TitleTypes } from "./types";

import "./style.scss";

export default function Index(): JSX.Element {
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

  const accounts: TitleTypes[] = [
    {
      key: "1",
      id: "1",
      name: "Account 1",
      createdOn: "5-8-2021",
      owner: "User 1",
    },
    {
      key: "2",
      id: "2",
      name: "Account 2",
      createdOn: "5-8-2021",
      owner: "User 2",
    },
    {
      key: "3",
      id: "3",
      name: "Account 3",
      createdOn: "5-8-2021",
      owner: "User 3",
    },
  ];

  return (
    <div className="contentSection">
      <ul className="tableTitles">
        {titleColumns.map((item: TitleTypes) => {
          return <li>{item.title}</li>;
        })}
      </ul>
      <div className="tableUsers">
        {accounts.map((item: TitleTypes) => {
          return (
            <ul>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.createdOn}</li>
              <li>{item.owner}</li>
              <li>
                <NavLink to={`account${item.id}`}>View</NavLink>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
