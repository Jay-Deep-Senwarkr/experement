// components/Navbar.tsx

"use client";
import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="m-4 text-lg h-20  ">
      <Menu setActive={setActive} > 
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="#home">Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <HoveredLink href="#services">Services</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <HoveredLink href="#ContactUs">Contact Us</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <HoveredLink href="#AboutUs">About Us</HoveredLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
