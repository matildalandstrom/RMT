import React from "react";
import { Budget } from "../types/types";

type Props = {
  budgets: Array<Budget>;
  handleRemoveBudget: (index: number) => void;
  handleEditBudget: (index: number) => void;
  editIndex: number;
};

export const SavedBudgets = ({
  budgets,
  handleRemoveBudget,
  handleEditBudget,
  editIndex,
}: Props) => {
  const handleEdit = (index: number) => {
    handleEditBudget(index);
  };

  const listItems = budgets.map((item, index) => (
    <div className="py-1" key={index}>
      <li
        className={`grid text-left rounded grid-cols-4 ${
          editIndex === index ? "border-blue-500 border-2" : ""
        }`}
        value={item.market}
      >
        <div>{item.market + " kr"}</div>
        <div> {item.development + " kr"}</div>
        <div> {item.sell + " kr"}</div>

        <div className="text-white">
          <button
            className="bg-blue-500 rounded ml-5 p-2 disabled:opacity-50 "
            onClick={() => handleEdit(index)}
            disabled={editIndex === index}
          >
            Edit
          </button>
          <button
            className="bg-red-500 rounded disabled:opacity-50 ml-5 p-2"
            onClick={() => handleRemoveBudget(index)}
            disabled={editIndex === index}
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  ));

  return (
    <div className="col-span-2 p-3 border-black border-2">
      <h2 className="text-2xl pb-5 font-bold">Saved budgets</h2>
      <div className="overflow-y-scroll max-h-[400px]">
        {listItems.length === 0 ? (
          "No saved budgets. Add a new one!"
        ) : (
          <div className="grid grid-cols-4 text-left pb-2 font-bold">
            <p>Market</p>
            <p>Development</p>
            <p>Sales</p>
          </div>
        )}
        <ul className="col-span-2">{listItems}</ul>
      </div>
    </div>
  );
};
