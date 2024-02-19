"use client"; // we cann'nt directly use this hooks of react js , since it is an full fledge framwork so it requires a identification that this file is used for client side and we want to use react hooks , so we always mark use-client , for any DOM manipulation
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      Navbar
    </div>
  );
};

export default Navbar;
