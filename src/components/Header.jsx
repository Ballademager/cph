import { useState, useRef } from "react";
import DropDown from "./DropDown";
import "./Header.css";

export default function Header() {
  const [showDropDown, setShowDropDown] = useState(null);
  const timeoutRef = useRef(null);

  const mouseEnter = (item) => {
    setShowDropDown(item);
    clearTimeout(timeoutRef.current);
  };

  const mouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropDown(null);
    }, 600);
  };

  const dropDownEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const dropDownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropDown(null);
    }, 300);
  };

  return (
    <header>
      <img className="logo" src="images/logo.webp" alt="" />
      <ul className="upper-nav">
        <li
          className="upper-li"
          onMouseEnter={() => mouseEnter("Flyinformation")}
          onMouseLeave={mouseLeave}
        >
          <a href="">Flyinformation</a>
          {showDropDown === "Flyinformation" && (
            <DropDown
              item="Flyinformation"
              onMouseEnter={dropDownEnter}
              onMouseLeave={dropDownLeave}
            />
          )}
        </li>
        <li
          className="upper-li"
          onMouseEnter={() => mouseEnter("Praktisk")}
          onMouseLeave={mouseLeave}
        >
          <a href="">Praktisk</a>
          {showDropDown === "Praktisk" && (
            <DropDown
              item="Praktisk"
              onMouseEnter={dropDownEnter}
              onMouseLeave={dropDownLeave}
            />
          )}
        </li>
        <li
          className="upper-li"
          onMouseEnter={() => mouseEnter("Parkering")}
          onMouseLeave={mouseLeave}
        >
          <a href="">Parkering</a>
          {showDropDown === "Parkering" && (
            <DropDown
              item="Parkering"
              onMouseEnter={dropDownEnter}
              onMouseLeave={dropDownLeave}
            />
          )}
        </li>
        <li
          className="upper-li"
          onMouseEnter={() => mouseEnter("Butikker & Spisesteder")}
          onMouseLeave={mouseLeave}
        >
          <a href="">Butikker & Spisesteder</a>
          {showDropDown === "Butikker & Spisesteder" && (
            <DropDown
              item="Butikker & Spisesteder"
              onMouseEnter={dropDownEnter}
              onMouseLeave={dropDownLeave}
            />
          )}
        </li>
      </ul>
      <div className="flex-right">
        <img className="taxfree" src="images/taxfree.webp" alt="" />
        <a href="">Log ind</a>
        <button className="language">
          <div></div>
          <div>&#x25BC;</div>
        </button>
        <div className="search"></div>
      </div>
    </header>
  );
}
