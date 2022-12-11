import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll'
import './Header.css'

const Header = () => {

    return (
        <div className="navbar text-white lg:fixed bg-glass " style={{ zIndex: '100' }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        <li><Link
                            className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2'

                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Home
                        </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2'
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2'
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2'
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-250}
                                duration={500}
                            >Contact</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-primary">//S.Dev </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link
                        className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2'

                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Home
                    </Link>
                    </li>
                    <li>
                        <Link
                            className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2'
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2'
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2'
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-250}
                            duration={500}
                        >Contact</Link></li>
                </ul>
            </div>
            <div className="lg:navbar-end">
                <a role="button" tabindex="0" href="https://github.com/MdSalman2022" target="_blank" className="btn btn-primary btn-outline transition-colors duration-300"><FaGithub /> &nbsp; GitHub</a>
            </div>
        </div>
    );
};

export default Header;