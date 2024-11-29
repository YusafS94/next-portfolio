"use client";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { useRef } from "react";

// const hamburger = document.getElementById("hamburger-button");
// const menu = document.getElementById("topnav");

// hamburger?.addEventListener("click", () => {
//   console.log("hamburger icon clicked");
//   //   menu.style.display = "none";
//   //   document.getElementById("topnav")?.style.display = "none";
//   //   LOOK UP IN REACT DOCS HOW TO DO THIS
//   //   MAY BE HOOK, REF, USEREF ETC
// });

export default function HamburgerIcon() {
  const inputRef = useRef(null);
  function handleClick() {
    // inputRef.current.focus();
    console.log("clicked");
  }
  return <Bars2Icon onClick={handleClick} ref={inputRef} />;
}
