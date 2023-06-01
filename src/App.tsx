import React from "react";

import "./App.css";
import { BudgetRow } from "./BudgetRow";

function App() {
  return (
    <div className="App h-screen w-screen bg-gray-200">
      <header className="App-header"></header>
      <BudgetRow />
    </div>
  );
}

export default App;
