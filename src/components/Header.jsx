import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import DropDown from "./DropDown";
import InnerList from "./InnerList";
import "./Header.css";

export default function Header() {
  const [showDropDown, setShowDropDown] = useState(null);
  const timeoutRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [active, setActive] = useState(false);
  const [liOneActive, setLiOneActive] = useState(false);
  const [liTwoActive, setLiTwoActive] = useState(false);
  const [liThreeActive, setLiThreeActive] = useState(false);
  const [liFourActive, setLiFourActive] = useState(false);
  const [lang, setLang] = useState("dk");
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [active]);

  function handleBurgerClick() {
    setActive((old) => !old);
  }
  function handleLiOneClick() {
    setLiOneActive((old) => !old);
  }
  function handleLiTwoClick() {
    setLiTwoActive((old) => !old);
  }
  function handleLiThreeClick() {
    setLiThreeActive((old) => !old);
  }
  function handleLiFourClick() {
    setLiFourActive((old) => !old);
  }

  const switchLanguage = (selectedLang) => {
    setLang(selectedLang);
    setIsOpen(false);
  };
  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <header>
      <img className="logo" src="src/images/logo.webp" alt="" />
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
            <a href="https://www.taxfree-heinemann.dk/da/cph/" aria-label="Taxfree">
              <img className="taxfree" src="public/taxfree.webp" alt="" />
            </a>
            <a href="">Log ind</a>
            <button
              className="language"
              onClick={() => {
                toggleOpen();
              }}
              aria-label="change language">
              <img className="flag" src={`public/${lang === "dk" ? "denmark" : "england"}.svg`} alt={lang === "dk" ? "Danish flag" : "English flag"} />
              <svg
                width={28}
                height={28}
                data-slot="icon"
                fill="none"
                stroke-width="3"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{
                  transform: isOpen ? `rotate(180deg)` : "rotate(0deg)",
                }}
                className="transition-transform duration-300 ease-in-out min-w-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
              </svg>
              {isOpen && (
                <div className="lang-drop">
                  <ul className="" role="menu">
                    {lang !== "dk" && (
                      <li>
                        <button className="inside-btn" onClick={() => switchLanguage("dk")}>
                          <img src="public/denmark.svg" alt="Danish flag" />
                          Danish
                        </button>
                      </li>
                    )}
                    {lang !== "en" && (
                      <li>
                        <button className="inside-btn" onClick={() => switchLanguage("en")}>
                          <img src="public/england.svg" alt="English flag" />
                          English
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </button>
            <div className="search">
              <img src="public/search.svg" alt="search on site" />
            </div>
          </div>
        </>
      ) : (
        <div className="flex-right">
          <div className="search">
            <img src="public/search.svg" alt="search on site" />
          </div>
          <div className={"burger-menu " + (active ? "active" : "")} onClick={handleBurgerClick}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
          <nav className={"mobile-menu " + (active ? "active" : "")}>
            <div className="top-row">
              <button
                className="language"
                onClick={() => {
                  toggleOpen();
                }}
                aria-label="change language">
                <img className="flag" src={`public/${lang === "dk" ? "denmark" : "england"}.svg`} alt={lang === "dk" ? "Danish flag" : "English flag"} />
                <svg
                  width={28}
                  height={28}
                  data-slot="icon"
                  fill="none"
                  stroke-width="3"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{
                    transform: isOpen ? `rotate(180deg)` : "rotate(0deg)",
                  }}
                  className="transition-transform duration-300 ease-in-out min-w-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
                {isOpen && (
                  <div className="lang-drop">
                    <ul className="" role="menu">
                      {lang !== "dk" && (
                        <li>
                          <button className="inside-btn" onClick={() => switchLanguage("dk")}>
                            <img src="public/denmark.svg" alt="Danish flag" />
                            Danish
                          </button>
                        </li>
                      )}
                      {lang !== "en" && (
                        <li>
                          <button className="inside-btn" onClick={() => switchLanguage("en")}>
                            <img src="public/england.svg" alt="English flag" />
                            English
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </button>
              <a className="ms-4" href="">
                Log ind
              </a>
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
              <li className="taxfree-li">
                <a href="https://www.taxfree-heinemann.dk/da/cph/" aria-label="Taxfree">
                  <img className="taxfree" src="public/taxfree.webp" alt="" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
