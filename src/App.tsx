import { Routes, Route } from "react-router-dom";
import Main from "../src/app/Main";
import AccountContent from "../src/app/AccountContent";

import "./App.css";

function App(): JSX.Element {
  const accountIndex = {
    accountOne: 1,
    accountTwo: 2,
    accountThree: 3,
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/account1"
          element={<AccountContent accountNumber={accountIndex.accountOne} />}
        />
        <Route
          path="/account2"
          element={<AccountContent accountNumber={accountIndex.accountTwo} />}
        />
        <Route
          path="/account3"
          element={<AccountContent accountNumber={accountIndex.accountThree} />}
        />
      </Routes>
    </div>
  );
}

export default App;
