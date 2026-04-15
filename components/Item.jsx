"use client";

import { Plus } from "phosphor-react";
import { useState } from "react";

const Item = ({ item }) => {
  let [open, setOpen] = useState(false);
  return (
    <div
      className={`py-4 border-b border-neutral-500 flex flex-col gap-4 overflow-hidden ${open ? "max-h-40" : "max-h-14"} transition-all duration-800`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="font-medium">{item.question}</div>
        <Plus
          weight="bold"
          className={`${open ? "rotate-135 text-red-300" : ""} transition-all duration-400`}
        />
      </div>
      <p
        className={`${open ? "opacity-100" : "opacity-0"} transition-all duration-800 pb-6`}
      >
        {item.answer}
      </p>
    </div>
  );
};

export default Item;
