import { Routes, Route } from "react-router-dom";
import Main from "./app/Main";
import AccountContent from "./app/AccountContent";
import { TitleTypes } from "./app/types";

import "./App.css";

function App(): JSX.Element {
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
    <div className="App">
      <Routes>
        <Route path="/" element={<Main accounts={accounts} />} />
        <Route
          path={`account${accounts[0].id}`}
          element={<AccountContent accountNumber={accounts[0].id} />}
        />
        <Route
          path={`account${accounts[1].id}`}
          element={<AccountContent accountNumber={accounts[1].id} />}
        />
        <Route
          path={`account${accounts[2].id}`}
          element={<AccountContent accountNumber={accounts[2].id} />}
        />
      </Routes>
    </div>
  );
}

export default App;
