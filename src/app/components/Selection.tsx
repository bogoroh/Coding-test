import React from "react";

export default function Selection() {
  return (
    <div className="flex gap-3 items-center py-5 px-[70px] border-b-[1px] border-[#E1E1E1]"> 
        <div className="text-sm font-normal" >LABEL</div>
      <select className="w-[618px] bg-secondary p-[6px] border-[1px] border-[#E1E1E1]">
        <option value="">Nunc luctus vel tortor quis sodales</option>
      </select>
      <button className="w-[181px] h-[48px] bg-[#B9B9B9] rounded-[60px] text-white ml-4" >SUBMIT</button>
    </div>
  );
}