import React from 'react';
import './index.css'
import './App.css'
import icons from './images/icons-bar.png';

function Footer () {
  return (
    <div className="main-footer bg-[#58585b] m-0 p-0 flex justify-center">
      <div className="footer mt-4">
        <div className="footer-satu flex justify-center gap-[640px] mr-[120px]">
          <div className="satu flex gap-[205px]">
            <div className="kursus">
              <ul>
                <li><a href="" className="text-white no-underline text-[14px] hover:underline">Courses</a></li>
                <li><a href="" className="text-white no-underline text-[14px] hover:underline">About Us</a></li>
                <li><a href="" className="text-white no-underline text-[14px] hover:underline">Find an Academy</a></li>
                <li><a href="" className="text-white no-underline text-[14px] hover:underline">Support</a></li>
              </ul>
            </div>
            <div className="mengajar">
              <ul>
                <li><a href="" className="text-white no-underline text-[14px] hover:underline">Teach with us</a></li>
                <li><a href="" className="text-white no-underline text-[14px] hover:underline">Hire with us</a></li>
                <li><a href="" className="text-white no-underline text-[14px] hover:underline">Partner with us</a></li>
              </ul>
            </div>
          </div>
          <div className="dua flex gap-[20px] mt-[20px]">
            <div className="ikuti ">
              <p className="text-[14px] text-white">Follow us</p>
            </div>
            <div className="icon">
              <img src={icons} alt="" className="hover:cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="footer-dua">
          <div className="one max-w-[1100px] mt-[70px] mb-[10px] flex justify-center">
            <p className="italic text-[12px] text-white leading-[1.5]">
              Cisco Networking Academy is a global IT and cybersecurity education program that partners with learning institutions around the world to empower all people with career opportunities. It is Cisco’s largest and longest-running
              <a href="" className="text-white hover:text-[#049fd9]"> Cisco Corporate Social Responsibility</a> program.
            </p>
          </div>
          <div className="two">
            <ul className="flex gap-[44px] my-0 mb-[20px]">
              <li className="text-[14px] text-white hover:cursor-pointer">Terms and Conditions</li>
              <li className="text-[14px] text-white hover:cursor-pointer">Privacy Statement</li>
              <li className="text-[14px] text-white hover:cursor-pointer">Cookie Policy</li>
              <li className="text-[14px] text-white hover:cursor-pointer">Data Protection</li>
              <li className="text-[14px] text-white hover:cursor-pointer">Accessibility</li>
              <li className="text-[14px] text-white hover:cursor-pointer">Trademarks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
