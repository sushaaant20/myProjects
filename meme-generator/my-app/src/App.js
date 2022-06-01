import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransacitonList } from "./components/TransacitonList";
import { AddTransaction } from "./components/AddTransaction";

import './App.css';

function App() {
  return (
    <div >
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransacitonList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
