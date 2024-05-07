import React from "react";
import { SetValuesFunction, Values } from "./type/address";
type Props = {
  values: Values;
  updateValues: SetValuesFunction;
};
export default function About({ values, updateValues }: Props) {
  return (
    <div>
      <div className="text-[20px] font-bold leading-[28px] mb-4">ABOUT </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-[68px]">
          <div className="flex items-center gap-3">
            <div className="w-[137px] text-right">UNIQUE ID</div>
            <input
              type="text"
              value={values.uniqueSerialId}
              onChange={(e) => updateValues("uniqueSerialId", e.target.value)}
              className="bg-secondary w-[144px] p-[6px] border-[1px] border-[#E1E1E1]"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">ALT ID</div>
            <input
              type="text"
              value={values.altId}
              onChange={(e) => updateValues("altId", e.target.value)}
              className="bg-secondary w-[144px] p-[6px] border-[1px] border-[#E1E1E1]"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">DLN</div>
          <input
            type="text"
            value={values.dln}
            onChange={(e) => updateValues("dln", e.target.value)}
            className="bg-secondary w-[144px] p-[6px] border-[1px] border-[#E1E1E1]"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">LAST NAME</div>
          <input
            type="text"
            value={values.lastName}
            onChange={(e) => updateValues("lastName", e.target.value)}
            className="bg-secondary w-[294px] p-[6px] border-[1px] border-[#E1E1E1]"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">GIVEN NAME</div>
          <input
            type="text"
            value={values.givenName}
            onChange={(e) => updateValues("givenName", e.target.value)}
            className="bg-secondary w-[294px] p-[6px] border-[1px] border-[#E1E1E1]"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">GENDER</div>
          <select
            className="w-[112px] bg-secondary p-[6px]"
            value={values.gender}
            onChange={(e) => updateValues("gender", e.target.value)}
          >
            <option value="male">M - MALE</option>
            <option value="female">F - FEMALE</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">DOB</div>
          <input
            type="date"
            className="bg-secondary w-[144px] p-[6px] border-[1px] border-[#E1E1E1]"
            value={values.dateOfBirth}
            onChange={(e) => updateValues("dateOfBirth", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
