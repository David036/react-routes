import { Routes, Route } from "react-router-dom";
import Main from "../src/app/Main";
import AccountOne from "../src/app/AccountOne";
import AccountTwo from "../src/app/AccountTwo";
import AccountThree from "../src/app/AccountThree";

import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account1" element={<AccountOne />} />
        <Route path="/account2" element={<AccountTwo />} />
        <Route path="/account3" element={<AccountThree />} />
      </Routes>
    </div>
  );
}

export default App;
