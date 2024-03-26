const TopNavbar = () => {
  return (
    <section className="bg-[#03AEFD] flex items-center justify-center ">
      <div className="max-w-[90rem] px-24 py-3 text-white flex w-full">
        <div className="flex items-center gap-2 mr-auto">
          <img
            className="flex items-center justify-center size-4"
            src="/locationicon.svg"
            alt="location icon"
          />
          <span className="font-normal text-sm">
            Rezilla, 18 Grattan St, Brooklyn
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="flex items-center justify-center size-4"
            src="/phoneicon.svg"
            alt="Phone icon"
          />
          <span className="font-normal text-sm"> +1 206-214-2298 </span>
        </div>
        <div className="flex items-center gap-2 ml-7">
          <img
            className="flex items-center justify-center size-4"
            src="/mailicon.svg"
            alt="Mail icon"
          />
          <span className="font-normal text-sm">support@rezilla.com</span>
        </div>
      </div>
    </section>
  );
};

const BottomNavbar = () => {
  return (
    <section className="flex items-center justify-center bg-white">
      <nav className="w-full max-w-[90rem] flex px-24 py-4 justify-between">
        <ul className=" text-[#2B2B2B] flex items-center justify-center">
          <li className=" h-9 w-20 items-center justify-center flex text-base font-medium hover:bg-[rgba(67,97,238,0.3)] hover:rounded-full cursor-pointer">
            Home
          </li>
          <li className=" h-9 w-20 items-center justify-center flex text-base font-medium hover:bg-[rgba(67,97,238,0.3)] hover:rounded-full cursor-pointer">
            About
          </li>
          <li className=" h-9 w-20 items-center justify-center flex text-base font-medium hover:bg-[rgba(67,97,238,0.3)] hover:rounded-full cursor-pointer">
            Listings
          </li>
          <li className=" h-9 w-20 items-center justify-center flex text-base font-medium hover:bg-[rgba(67,97,238,0.3)] hover:rounded-full cursor-pointer">
            Services
          </li>
          <li className=" h-9 w-20 items-center justify-center flex text-base font-medium hover:bg-[rgba(67,97,238,0.3)] hover:rounded-full cursor-pointer">
            Blogs
          </li>
        </ul>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center size-12 bg-[#03AEFD] rounded-full">
            <img src="/houseicon.svg" alt="House icon" />
          </div>
          <span className="text-[#1E1E1E] font-semibold text-xl">Rezilla</span>
        </div>
        <div className="flex items-center justify-center gap-5 ">
          <a className="flex items-center justify-center gap-2.5"  href="#">
            <div className="flex items-center justify-center size-5">
                <img src="/user-profileicon.svg" alt="USER ICON" />
            </div>
            <span className="text-[#2B2B2B] font-medium text-base">Login/Register</span>
          </a>
          <button className="h-12 flex items-center justify-center w-[10.5rem] gap-2.5 bg-[#03AEFD] rounded-[3rem]">
            <div className="flex items-center justify-center size-5">
             <img  src="/houseicon.svg" alt="House icon" />
            </div>
            <span className="text-white font-medium text-base">Add listing</span>
          </button>
        </div>
      </nav>
    </section>
  );
};


const Navbar = () => {
  return (
    <div>
      <TopNavbar />
      <BottomNavbar />
    </div>
  );
};

export default Navbar;
