import React from "react";
import DownArrow from "../svgs/DownArrow";

export default function BottomFooter() {
  return (
    <div className="h-11 bg-[#CCCCCC] flex items-center justify-between px-[80px]">
      <div className="text-base font-normal leading-6">
        © 20XX All Rights Reserved.
      </div>

      <div className="flex gap-[34px]">
        <div className="text-[14px] font-normal leading-5 underline underline-offset-auto cursor-pointer">
          CONTACT
        </div>
        <div className="text-[14px] font-normal leading-5 underline underline-offset-auto cursor-pointer">
          HELP
        </div>
      </div>
    </div>
  );
}
