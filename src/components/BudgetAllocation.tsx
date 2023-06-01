import React, { FC, useEffect, useState } from "react";
import { SavedBudgets } from "./SavedBudgets";
import { Budget } from "../types/types";
import { BudgetRow } from "./BudgetRow";

export const BudgetAllocation: FC = () => {
  return (
    <div className="px-20 py-40">
      <h1 className="text-4xl pb-20 font-bold">Budget Allocation Program</h1>
      <BudgetRow />
    </div>
  );
};
