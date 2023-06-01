import React from "react";

import "./App.css";
import { BudgetAllocation } from "./components/BudgetAllocation";

function App() {
  return (
    <div className="App h-screen w-screen bg-gray-200 px-20">
      <header className="App-header"></header>
      <BudgetAllocation />
    </div>
  );
}

export default App;
