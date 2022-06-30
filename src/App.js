import Index from "./app/Index.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AccountOne from "./app/AccountOne.jsx";
import AccountTwo from "./app/AccountTwo.jsx";
import AccountThree from "./app/AccountThree.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/account1" element={<AccountOne />} />
        <Route path="/account2" element={<AccountTwo />} />
        <Route path="/account3" element={<AccountThree />} />
      </Routes>
    </div>
  );
}

export default App;
