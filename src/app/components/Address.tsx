import React from "react";
import Contact from "./Contact";
import { SetValuesFunction, Values } from "./type/address";
type Props = {
  values: Values;
  updateValues: SetValuesFunction;
};
export default function Address({ values, updateValues }: Props) {
  return (
    <div>
      <div className="text-[20px] font-bold leading-[28px] mb-4">ADDRESS </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">STREET</div>
          <input
            type="text"
            value={values.street}
            onChange={(e) => updateValues("street", e.target.value)}
            className="bg-[#FCFCFC] w-[316px] p-[6px] border-[1px] border-[#E1E1E1]"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">CITY</div>
          <input
            type="text"
            value={values.city}
            onChange={(e) => updateValues("city", e.target.value)}
            className="bg-[#FCFCFC] w-[316px] p-[6px] border-[1px] border-[#E1E1E1]"
          />
        </div>
        <div className="flex gap-[30px]">
          <div className="flex items-center gap-3">
            <div className="w-[137px] text-right">UNIQUE ID</div>
            <select
              className="w-[171px] bg-[#FCFCFC] p-[6px] border-[1px] border-[#E1E1E1]"
              value={values.uniqueId}
              onChange={(e) => updateValues("uniqueId", e.target.value)}
            >
              <option value="CA">CA - California</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">ZIP</div>
            <input
              type="text"
              value={values.zip}
              onChange={(e) => updateValues("zip", e.target.value)}
              className="bg-[#FCFCFC] w-[80px] p-[6px] border-[1px] border-[#E1E1E1]"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[137px] text-right">COUNTRY</div>
          <select
            className="w-[259px] bg-[#FCFCFC] p-[6px] border-[1px] border-[#E1E1E1]"
            value={values.country}
            onChange={(e) => updateValues("country", e.target.value)}
          >
            <option value="USA">UNITED STATES</option>
            <option value="UK">UNITED KINGDOM</option>
          </select>
        </div>
      </div>
      <div className="mt-[70px]">
        <Contact   values={values} updateValues={updateValues} />
      </div>
    </div>
  );
}
