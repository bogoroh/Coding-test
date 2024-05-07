import React from "react";
import DownArrow from "../svgs/DownArrow";
type Props = {
  title: string;
  hasArrow?: boolean;
  isSelected: boolean;
};
export default function NavItem({
  title,
  hasArrow = false,
  isSelected,
}: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-1 cursor-pointer text-base font-semibold ${
        isSelected ? "underline underline-offset-8 decoration-4" : ""
      }`}
    >
      {title}
      {hasArrow && <DownArrow color="#000000" />}
    </div>
  );
}
