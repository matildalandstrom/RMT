import React from "react";
import { AddEditBudget } from "./AddEditBudget";

export const BudgetAllocation = () => {
  return (
    <div className="px-20 py-40">
      <h1 className="text-4xl pb-20 font-bold">Budget Allocation Program</h1>
      <AddEditBudget />
    </div>
  );
};
