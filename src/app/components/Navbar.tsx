import React from "react";
import NavItem from "./NavItem";

export default function Navbar() {
  const navItems = [
    {
      title: "Dashboard",
    },
    {
      title: "Lorem Ipsum",
    },
    {
      title: "Dolor",
    },
    {
      title: "Sit Amet",
      children: [],
    },
    {
      title: "Ullamcorper",
      children: [],
    },
    {
      title: "Morbi Rutrum",
      children: [],
    },
  ];
  return (
    <div className="flex justify-between items-center px-[80px] h-[95px] border-b-2 border-[#E5E5E5]">
      <div className="w-[241px] bg-[#D9D9D9] py-[23px] text-center text-lg font-semibold">
        WEB PORTAL LOGO
      </div>
      <div className="flex gap-5">
        {navItems.map((item) => {
          return (
            <NavItem
              title={item?.title}
              isSelected={item.title == "Lorem Ipsum"}
              hasArrow={!!item.children || false}
            />
          );
        })}
      </div>
    </div>
  );
}
