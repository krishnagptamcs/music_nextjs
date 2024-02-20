"use client"; // we cann'nt directly use this hooks of react js , since it is an full fledge framwork so it requires a identification that this file is used for client side and we want to use react hooks , so we always mark use-client , for any DOM manipulation
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Service">
          
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Our Couses">
          <div className="flex flex-col gap-1">
            <HoveredLink href="/web-dev">Test 1</HoveredLink>
            <HoveredLink href="/web-dev">Test 2</HoveredLink>
            <HoveredLink href="/web-dev">Test 3</HoveredLink>
            <HoveredLink href="/web-dev">Test 4</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col gap-1">
            <HoveredLink href="/web-dev">Test 1</HoveredLink>
            <HoveredLink href="/web-dev">Test 2</HoveredLink>
            <HoveredLink href="/web-dev">Test 3</HoveredLink>
            <HoveredLink href="/web-dev">Test 4</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
