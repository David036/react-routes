import { Routes, Route } from "react-router-dom";
import Main from "./app/Main";
import AccountContent from "./app/AccountContent";

import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account:id" element={<AccountContent />} />
      </Routes>
    </div>
  );
}

export default App;
