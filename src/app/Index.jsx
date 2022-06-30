import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

export default function Index() {
  const titleColumns = [
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

  const accounts = [
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
        {titleColumns.map((e) => {
          return <li>{e.title}</li>;
        })}
      </ul>
      <div className="tableUsers">
        {accounts.map((e) => {
          return (
            <ul>
              <li>{e.id}</li>
              <li>{e.name}</li>
              <li>{e.createdOn}</li>
              <li>{e.owner}</li>
              <li>
                <NavLink to={`account${e.id}`}>View</NavLink>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
