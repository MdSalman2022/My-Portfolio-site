import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='' to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-primary">WebTechnosys</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2' to='/home'>Home</Link></li>
                    <li><Link className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2' to='/about'>About</Link></li>
                    <li><Link className='hover:text-primary transition-colors duration-500 border-b-2 border-primary mx-2' to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary btn-outline transition-colors duration-300">Get started</a>
            </div>
        </div>
    );
};

export default Header;