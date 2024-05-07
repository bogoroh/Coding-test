import React from "react";
import { SetValuesFunction, Values } from "./type/address";
type Props = {
  values: Values;
  updateValues: SetValuesFunction;
};
export default function Contact({values,updateValues}:Props) {
  return (
    <div>
      <div className="text-[20px] font-bold leading-[28px] mb-4">CONTACT </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">TELEPHONE</div>
          <input
            type="text"
            value={values.telephone}
            onChange={(e) => updateValues("telephone", e.target.value)}
            className="bg-[#FCFCFC] w-[167px] p-[6px] border-[1px] border-[#E1E1E1]"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">Email</div>
          <input
            type='email'
            value={values.email}
            onChange={(e) => updateValues("email", e.target.value)}
            className="bg-[#FCFCFC] w-[307px] p-[6px] border-[1px] border-[#E1E1E1]"
          />
        </div>
      
      </div>
    </div>
  );
}
