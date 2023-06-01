import React from "react";
import { Budget } from "./types";
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
        key={index}
        value={item.market}
      >
        <div className="">
          {item.market}

          <label> kr</label>
        </div>
        <div>
          {item.development}

          <label>kr</label>
        </div>
        <div>
          {item.sell}
          <label> kr</label>
        </div>
        <div>
          <button
            className="bg-blue-500 rounded ml-5 p-1 disabled:opacity-50 text-white"
            onClick={() => handleEdit(index)}
            disabled={editIndex === index}
          >
            Editera
          </button>
          <button
            className="bg-red-500 rounded disabled:opacity-50  ml-5 p-1 text-white"
            onClick={() => handleRemoveBudget(index)}
            disabled={editIndex === index}
          >
            Radera
          </button>
        </div>
      </li>
    </div>
  ));
  return (
    <div className="col-span-2 p-3 border-black border-2">
      <h2 className="text-2xl pb-5 font-bold">Sparade budgetar</h2>
      <div className="overflow-y-scroll max-h-[400px]">
        <div className="grid grid-cols-4 text-left pb-2 font-bold">
          <p>Marknad</p>
          <p>Utveckling</p>
          <p>Sälj</p>
        </div>

        <ul className="col-span-2">{listItems}</ul>
      </div>
    </div>
  );
};
