import React from "react";
import { CauseItemProps } from "./types";

export const CauseItem: React.FC<CauseItemProps> = ({ label, isChecked, onToggle }) => (
  <div
    className={`flex flex-col flex-1 justify-center p-4 rounded-md border-2 ${
      isChecked ? "border-blue-500" : "border-gray-400"
    } border-solid min-h-[52px] cursor-pointer`}
    onClick={onToggle}
  >
    <div className="flex gap-3 items-center w-full">
      <div
        className={`flex shrink-0 gap-2.5 self-stretch my-auto w-4 h-4 rounded border border-solid ${
          isChecked ? "bg-blue-500 border-blue-500" : "bg-white border-neutral-500"
        }`}
      />
      <div className="flex-1 shrink self-stretch my-auto basis-0">{label}</div>
    </div>
  </div>
);
