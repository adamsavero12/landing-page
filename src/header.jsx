import { useEffect, useRef } from "react";
import "./App.css";
import "./index.css";
import cisco from './images/cisco.png';
import search from './images/search.png';

function Header() {
    const coursesDropdownRef = useRef(null);
    const careersDropdownRef = useRef(null);
    const moreDropdownRef = useRef(null);
    const languageDropdownRef = useRef(null);
    const loginDropdownRef = useRef(null);

    useEffect(() => {
        const dropdowns = [
            coursesDropdownRef.current,
            careersDropdownRef.current,
            moreDropdownRef.current,
            languageDropdownRef.current,
            loginDropdownRef.current,
        ];

        dropdowns.forEach((dropdown) => {
            if (dropdown) {
                const showDropdown = () => {
                    const content = dropdown.querySelector('.dropdown-content');
                    if (content) content.style.display = 'block';
                };

                const hideDropdown = () => {
                    const content = dropdown.querySelector('.dropdown-content');
                    if (content) content.style.display = 'none';
                };

                dropdown.addEventListener('mouseover', showDropdown);
                dropdown.addEventListener('mouseout', hideDropdown);

                // Cleanup
                return () => {
                    dropdown.removeEventListener('mouseover', showDropdown);
                    dropdown.removeEventListener('mouseout', hideDropdown);
                };
            }
        });
    }, []);

    return (
        <header>
            <nav className="bg-white p-5 flex justify-around items-center w-full border-2 border-b-gray-300">
                <div className="nav1 flex items-center space-x-4 -ml-20">
                    <li className="list-none cursor-pointer"><img src={cisco} alt="" className="h-8"/></li>
                    <li className="network list-none text-biru cursor-pointer"><span className="text-sm">Networking <br/> Academy</span></li>
                </div>
                <div className="nav2 flex items-center space-x-7 mr-96 -ml-32">
                    <li className="dropdown relative list-none text-slate-700 hover:text-biru cursor-pointer" ref={coursesDropdownRef}>
                        Courses▾
                        <ul className="dropdown-content absolute hidden bg-white text-black mt-2 p-2 rounded shadow-lg">
                            <li className="p-2 hover:bg-biru hover:text-white">Cybersecurity</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Networking</li>
                            <li className="p-2 hover:bg-biru hover:text-white">OS & IT</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Programming</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Internet of Things</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Infrastructure Automation</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Paket Tracer</li>
                            <li className="p-2 hover:bg-biru hover:text-white">All Courses</li>
                        </ul>
                    </li>
                    <li className="dropdown relative list-none text-slate-700 hover:text-biru cursor-pointer" ref={careersDropdownRef}>
                        Careers▾
                        <ul className="dropdown-content absolute hidden bg-white text-black mt-2 p-2 rounded shadow-lg">
                            <li className="p-2 hover:bg-biru hover:text-white">Employment opportunities</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Webinars</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Career Advice</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Pathways</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Badges & Certifications</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Success Stories</li>
                        </ul>
                    </li>
                    <li className="list-none text-slate-700 hover:text-biru cursor-pointer">Support</li>
                    <li className="dropdown relative list-none text-slate-700 hover:text-biru cursor-pointer" ref={moreDropdownRef}>
                        More▾
                        <ul className="dropdown-content absolute hidden bg-white text-black mt-2 p-2 rounded shadow-lg">
                            <li className="p-2 hover:bg-biru hover:text-white">About Us</li>
                            <li className="p-2 hover:bg-biru hover:text-white">CSR Blog</li>
                        </ul>
                    </li>
                </div>
                <div className="nav3 flex items-center space-x-4 text-slate-700 -mr-16">
                    <li className="list-none cursor-pointer"><img src={search} alt="" className="h-10"/></li>
                    <li className="list-none hover:text-biru cursor-pointer"><span>|</span></li>
                    <li className="dropdown relative list-none hover:text-biru cursor-pointer" ref={languageDropdownRef}>
                        English▾
                        <ul className="dropdown-content absolute hidden bg-white text-black mt-2 p-2 rounded shadow-lg">
                            <li className="p-2 hover:bg-biru hover:text-white">English</li>
                            <li className="p-2 hover:bg-biru hover:text-white">العربية</li>
                            <li className="p-2 hover:bg-biru hover:text-white">简体中文</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Français</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Português</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Русский</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Español</li>
                        </ul>
                    </li>
                    <li className="dropdown relative list-none cursor-pointer" ref={loginDropdownRef}>
                        <div className="login hover:text-biru ml-10">Settings▾</div>
                        <ul className="dropdown-content absolute hidden bg-white text-black mt-2 p-2 rounded shadow-lg">
                            <li className="p-2 hover:bg-biru hover:text-white">Account</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Resend Activation Email</li>
                            <li className="p-2 hover:bg-biru hover:text-white">Redeem Seat Token</li>
                        </ul>
                    </li>
                </div>
            </nav>
        </header>
    );
}

export default Header;