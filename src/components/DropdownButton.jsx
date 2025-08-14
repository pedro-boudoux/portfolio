"use client";

import "@/app/globals.css";

export default function DropdownButton({ isOpen, setIsOpen }) {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return <button onClick={toggleDropdown}>Dropdown</button>;
}
