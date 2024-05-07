import React from "react";
import { SetValuesFunction, Values } from "./type/address";
type Props = {
  values: Values;
  updateValues: SetValuesFunction;
  handleSubmit: () => void;
  handleReset: () => void;
};
export default function Footer({
  values,
  updateValues,
  handleSubmit,
  handleReset,
}: Props) {
  return (
    <div>
      <div className="text-[20px] font-bold leading-[28px]  border-b-[1px] border-[#E1E1E1]">
        Letter
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={values.sendALater}
            onChange={(e) => updateValues("sendALater", e.target.checked)}
          />
          <label> SEND A LETTER</label>
        </div>
        <div className="flex items-center gap-3 md:mr-[175px]">
          <div className="w-[137px] text-right">DATE</div>
          <input
            type="date"
            value={values.date}
            onChange={(e) => updateValues("date", e.target.value)}
            className="bg-[#FCFCFC] w-[140px] p-[6px] border-[1px] border-[#E1E1E1]"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-[60px]">
        <div className="text-right mt-2">COMMENTS</div>
        <textarea
          name=""
          id=""
          className="w-[694px] h-[109px] border-[1px] border-[#E1E1E1] p-4"
          value={values.comments}
          onChange={(e) => updateValues("comments", e.target.value)}
        ></textarea>
      </div>
      <div className="mt-[33px] flex items-center gap-10 px-[111px]">
        <button
          className="w-[181px] h-[48px] bg-[#2C2C2C] rounded-[60px] text-white ml-4"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
        <div
          className="text-base font-normal leading-[16px] text-[#1D29A2] underline cursor-pointer"
          onClick={handleReset}
        >
          Reset Changes
        </div>
      </div>
    </div>
  );
}
