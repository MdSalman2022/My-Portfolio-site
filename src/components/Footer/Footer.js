import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer lg:p-10 bg-neutral text-secondary mx-auto border-t-2 border-primary lg:flex lg:gap-96 gap-5 lg:justify-center p-5 " data-aos="fade-down" data-aos-duration="1000" id="footer">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Frontend development</a>
                <a className="link link-hover">Backend Development</a>
                <a className="link link-hover">Website design</a>
                <a className="link link-hover">Bug Fixing</a>
                <a className="link link-hover">Database Management</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href="https://www.facebook.com/MD.MehediHasanSalman" target="_blank"><FaFacebookF className='hover:text-primary' /></a>
                    <a href="https://www.linkedin.com/in/mehedihasan-salman/" target="_blank"><FaLinkedinIn className='hover:text-primary' /></a>
                    <a href="https://github.com/MdSalman2022" target="_blank"><FaGithub className='hover:text-primary' /></a>


                </div>
            </div>
        </footer>
    );
};

export default Footer;