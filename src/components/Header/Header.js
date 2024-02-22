import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  const { page } = useParams();
  let pages = [
    {
      id: "1",
      name: "Home",
      Offset: -450,
    },
    {
      id: "2",
      name: "About",
      Offset: -100,
    },
    {
      id: "3",
      name: "Skills",
      Offset: -100,
    },
    {
      id: "4",
      name: "Projects",
      Offset: -100,
    },
    {
      id: "5",
      name: "Contact",
      Offset: -250,
    },
  ];

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 150) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [pageName, setPageName] = useState("home");

  useEffect(() => {
    console.log("pathname", pathname);
    if (pathname?.includes("projects")) {
      setPageName("projects");
    }
  }, [pathname]);
  console.log("pathname", pathname);

  let navPages = [
    {
      id: "1",
      name: "Home",
      link: "/home",
      Offset: -450,
    },
    {
      id: "2",
      name: "About",
      link: "/about",
      Offset: -100,
    },
    {
      id: "3",
      name: "Skills",
      link: "/skills",
      Offset: -100,
    },
    {
      id: "4",
      name: "Projects",
      link: "/projects",
      Offset: -100,
    },
    {
      id: "5",
      name: "Contact",
      link: "/contact",
      Offset: -250,
    },
  ];

  console.log("navPages", navPages[1].link);

  console.log("page", page);
  useEffect(() => {
    const currentPage = navPages.find(
      (navPage) => navPage.link.slice(1) === pathname.slice(1)
    );
    if (currentPage) {
      const element = document.getElementById(currentPage.name);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);
  return (
    <div
      className={`navbar min-h-12 py-0 bg-neutral w-full sticky top-0 z-50 text-white ${
        isFixed
          ? " rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40"
          : ""
      }`}
    >
      <div className="navbar-start lg:hiddem">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 shadow bg-neutral rounded-box w-52"
          >
            {pages.map((page, index) => (
              <li>
                {pageName === "projects" ? (
                  <Link
                    className="hover:text-primary transition-all duration-100  mx-2 "
                    to={`${navPages[index].link}`}
                  >
                    {navPages[index].name}
                  </Link>
                ) : (
                  pageName !== "projects" && (
                    <ScrollLink
                      className="hover:text-primary transition-all duration-100  mx-2 "
                      activeClass="transition-all duration-200 border-b-2 border-primary bg-transparent text-primary"
                      to={page.name}
                      spy={true}
                      smooth={true}
                      offset={page.Offset}
                      duration={500}
                    >
                      {page.name}
                    </ScrollLink>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
        <Link
          className="btn btn-ghost normal-case text-2xl text-primary"
          to="/"
        >
          {" "}
          //Salman{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal   ">
          {pages.map((page, index) => (
            <li key={index}>
              {pageName === "projects" ? (
                <NavLink
                  // className={`hover:text-primary transition-all duration-100  mx-2 py-4`}
                  className={({ isActive }) =>
                    isActive
                      ? "transition-all duration-500 ease-in-out border-b-4 border-primary bg-transparent text-primary"
                      : "hover:text-primary transition-all duration-100  mx-2 py-4"
                  }
                  to={`${navPages[index].link}`}
                >
                  {navPages[index].name}
                </NavLink>
              ) : (
                pageName !== "projects" && (
                  <ScrollLink
                    className="hover:text-primary transition-all duration-100  mx-2 py-4"
                    activeClass="transition-all duration-500 ease-in-out border-b-4 border-primary bg-transparent text-primary"
                    to={page.name}
                    spy={true}
                    smooth={true}
                    offset={page.Offset}
                    duration={500}
                  >
                    {page.name}
                  </ScrollLink>
                )
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className=" navbar-end">
        <a
          role="button"
          tabindex="0"
          href="https://github.com/MdSalman2022"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-outline transition-colors duration-300"
        >
          <FaGithub /> &nbsp; GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;
