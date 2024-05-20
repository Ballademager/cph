import { useState, useRef, useEffect } from "react";
import DropDown from "./DropDown";
import InnerList from "./InnerList";
import "./Header.css";

export default function Header() {
  const [showDropDown, setShowDropDown] = useState(null);
  const timeoutRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [active, setActive] = useState(false);

  const mouseEnter = (item) => {
    setShowDropDown(item);
    clearTimeout(timeoutRef.current);
  };

  const mouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropDown(null);
    }, 300);
  };

  const dropDownEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const dropDownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropDown(null);
    }, 300);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <header>
      {screenWidth > 1024 ? (
        <>
      <ul className="upper-nav">
        <li className="upper-li" onMouseEnter={() => mouseEnter("Flyinformation")} onMouseLeave={mouseLeave}>
          <a href="">Flyinformation</a>
          {showDropDown === "Flyinformation" && <DropDown item="Flyinformation" onMouseEnter={dropDownEnter} onMouseLeave={dropDownLeave} />}
        </li>
        <li className="upper-li" onMouseEnter={() => mouseEnter("Praktisk")} onMouseLeave={mouseLeave}>
          <a href="">Praktisk</a>
          {showDropDown === "Praktisk" && <DropDown item="Praktisk" onMouseEnter={dropDownEnter} onMouseLeave={dropDownLeave} />}
        </li>
        <li className="upper-li" onMouseEnter={() => mouseEnter("Parkering")} onMouseLeave={mouseLeave}>
          <a href="">Parkering</a>
          {showDropDown === "Parkering" && <DropDown item="Parkering" onMouseEnter={dropDownEnter} onMouseLeave={dropDownLeave} />}
        </li>
        <li className="upper-li" onMouseEnter={() => mouseEnter("Butikker & Spisesteder")} onMouseLeave={mouseLeave}>
          <a href="">Butikker & Spisesteder</a>
          {showDropDown === "Butikker & Spisesteder" && <DropDown item="Butikker & Spisesteder" onMouseEnter={dropDownEnter} onMouseLeave={dropDownLeave} />}
        </li>
      </ul>
      <div className="flex-right">
        <img className="taxfree" src="images/taxfree.webp" alt="" />
        <a href="">Log ind</a>
        <button className="language">
          <div></div>
          <div>&#x25BC;</div>
        </button>
            <div className="search">
              <img src="src/images/search.svg" alt="search on site" />
            </div>
          </div>
        </>
      ) : (
        <div className="flex-right">
          <div className="search">
            <img src="src/images/search.svg" alt="search on site" />
          </div>
          <div className={"burger-menu " + (active ? "active" : "")} onClick={handleBurgerClick}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
          <nav className={"mobile-menu " + (active ? "active" : "")}>
            <div className="top-row">
              <button className="language">
                <div></div>
                <div>&#x25BC;</div>
              </button>
            </div>
            <ul className="outer-list">
              <li className={"menu-item " + (liOneActive ? "active" : "")} onClick={handleLiOneClick}>
                <p>Flyinformation</p>
                <CSSTransition in={liOneActive} timeout={300} classNames="inner-list" unmountOnExit>
                  <InnerList itemKey="flyinformationContent" />
                </CSSTransition>
              </li>
              <li className={"menu-item " + (liTwoActive ? "active" : "")} onClick={handleLiTwoClick}>
                <p>Praktisk</p>
                <CSSTransition in={liTwoActive} timeout={300} classNames="inner-list" unmountOnExit>
                  <InnerList itemKey="praktiskContent" />
                </CSSTransition>
              </li>
              <li className={"menu-item " + (liThreeActive ? "active" : "")} onClick={handleLiThreeClick}>
                <p>Parkering</p>
                <CSSTransition in={liThreeActive} timeout={300} classNames="inner-list" unmountOnExit>
                  <InnerList itemKey="parkeringContent" />
                </CSSTransition>
              </li>
              <li className={"menu-item " + (liFourActive ? "active" : "")} onClick={handleLiFourClick}>
                <p>Butikker & Spisesteder</p>
                <CSSTransition in={liFourActive} timeout={300} classNames="inner-list" unmountOnExit>
                  <InnerList itemKey="butikkerSpisestederContent" />
                </CSSTransition>
              </li>
            </ul>
          </nav>
      </div>
      )}
    </header>
  );
}
