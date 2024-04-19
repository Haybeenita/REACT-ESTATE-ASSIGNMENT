import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const TopFooter = () => {
  return (
    // <div className="h-[20rem]">

    <footer className="footer p-10 h-[22rem] bg-[#4361EE40] px-[7rem] text-black">
      <nav>
        <div className="flex items-center justify-center gap-2 mt-[2rem]">
          <div className="flex items-center justify-center size-12 bg-[#03AEFD] rounded-full">
            <img src="/houseicon.svg" alt="House icon" />
          </div>
          <span className="text-[#1E1E1E] font-semibold text-xl">Rezilla</span>
        </div>

        <a className="link link-hover capitalize w-[10rem] my-[1.5rem]">
          2728 hickory streetsalt lake city, UT 84104
        </a>

        <div className="flex items-center gap-2 mb-[1rem]">
          <img
            className="flex items-center justify-center size-4 "
            src="/phoneicon.svg"
            alt="Phone icon"
          />
          <span className="font-normal text-sm link link-hover">
            {" "}
            +1 206-214-2298{" "}
          </span>
        </div>
        <div className="flex items-center gap-2 ">
          <img
            className="flex items-center justify-center size-4"
            src="/mailicon.svg"
            alt="Mail icon"
          />
          <span className="font-normal text-sm link link-hover">
            support@rezilla.com
          </span>
        </div>
      </nav>
      <nav className="mt-[2.5rem]">
        <h6 className="text-[#2B2B2B] font-semibold text-lg">Quick Links</h6>
        <a className="link link-hover text-[#2B2B2B] ">Listings</a>
        <a className="link link-hover text-[#2B2B2B] ">About</a>
        <a className="link link-hover text-[#2B2B2B] ">Become a Agent</a>
        <a className="link link-hover text-[#2B2B2B] ">Services</a>
        <a className="link link-hover text-[#2B2B2B] ">Blogs</a>
        <a className="link link-hover text-[#2B2B2B] ">Home</a>
      </nav>
      <nav className="mt-[2.5rem]">
        <h6 className="text-[#2B2B2B] font-semibold text-lg">Discovery</h6>
        <a className="link link-hover capitalize text-[#2B2B2B]">
          united states
        </a>
        <a className="link link-hover capitalize text-[#2B2B2B]">Canada</a>
        <a className="link link-hover capitalize text-[#2B2B2B]">germany</a>
        <a className="link link-hover capitalize text-[#2B2B2B]">africa</a>
        <a className="link link-hover capitalize text-[#2B2B2B]">india</a>
      </nav>

      <nav className="mt-[2.5rem]">
        <h6 className="text-[#2B2B2B] font-semibold text-lg w-[10rem]">
          Subscribe to our Newsletter!
        </h6>
        <input
          type="text"
          className=" relative bg-white p-[1rem] w-[20rem] h-[3rem] rounded-full"
          placeholder="Email Address"
        />
        <div className="absolute w-[2.6rem] h-[2.6rem] bg-[#03AEFD] rounded-full ml-[17.1rem] mt-[4.2rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6 mx-auto mt-[0.5rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        <span className="font-semibold text-lg text-[#2B2B2B] mt-[0.8rem]">Follow Us on</span>
        <div className="flex gap-2 mt-[0.5rem]">
        <FaLinkedinIn className="fill-[#03AEFD] w-6 h-6" />
        <FaFacebookF className="fill-[#03AEFD] w-5 h-5 mt-[0.1rem]" />
        <FaInstagram className="fill-[#03AEFD] w-6 h-6"/>


        </div>
      </nav>
    </footer>
    // </div>
  );
};

const BottomFooter = () =>{
  return (
    <div className="h-[3rem] bg-black flex pl-[5.5rem] p-3 font-light">
      <div className="flex gap-1">
      <FaRegCopyright className="mt-[0.2rem]"/>
      <span className="mr-[32rem]">Rezilla - All rights reserved</span>
      </div>

      <div className="flex gap-[5rem]">
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
        <span>Disclaimer</span>
      </div>

      

    </div>
  );
};



const Footer = () => {
  return(
    <>
    <TopFooter/>
    <BottomFooter/>
    </>
    
  );
};
export default Footer;
