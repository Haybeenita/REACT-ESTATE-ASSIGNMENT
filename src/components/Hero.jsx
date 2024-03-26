const LeftSideOfHero = () => {
  return (
    <section>
      <div>
        <p className="text-[#4361EE] font-medium text-xl">REAL ESTATE</p>
        <h1 className="font-semibold text-6xl text-[#0B090A] w-[35rem] leading-[4.063rem] mt-4 mb-10">Find a perfect home you love..!</h1>
        <p className="font-normal text-base text-[#64748B] w-[36.25rem] leading-7">
          Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
          Integer a dolor eu sapien sodales vulputate ac in purus.
        </p>
      </div>
      <Carousel/>
    </section>
  );
};

const Carousel = () => {
  return (
    <div className="flex items-center justify-center w-[36.25rem] h-[22rem] mt-10 relative">
       <figure className="absolute -top-9 -right-7">
            <img src="/Ecllipseicon.svg"/>
       </figure>
      <div className="carousel size-full rounded-[1.25rem]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="bedroom0.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-white border-none hover:bg-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-white border-none hover:bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="Bedroom2.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-white border-none hover:bg-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-white border-none hover:bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="Bedroom3.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-white border-none hover:bg-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-white border-none hover:bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="bedroom4.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-white border-none hover:bg-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-white border-none hover:bg-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const RightSideOfHero = () => {
  return (
    <section>
         
       
        <div className="mt-[6rem] w-[26.25rem]  h-[36.375rem] bg-white rounded-[1.25rem] ">
          <div className="border-b-[0.125rem]">
            <ul className="flex flex-row- gap-28 justify-center  text-[#64748B] font-semibold ">
              <li className=" hover:text-[#03AEFD] hover:border-b-[#03AEFD] hover:border-b-[0.188rem] h-[100%] pt-10 pb-6 w-[30%] flex justify-center">
                For Sale
              </li>
              <li className="hover:text-[#03AEFD] hover:border-b-[#03AEFD] hover:border-b-[0.188rem] h-[100%] pt-10 pb-6 w-[30%] flex justify-center">
                For Rent
              </li>
            </ul>
          </div>

          <div className="flex pt-12 flex-col justify-center items-center">
            <input
              type="text"
              className="w-[21.25rem] h-[3.75rem] rounded-full flex items-center justify-center text-center bg-[#68585820]"
              placeholder="New York, San Francisco, etc"
            />

            <form className="flex items-center justify-center text-center h-[3.688rem] pt-10">
              <select
                id="property"
                name="property"
                className="text-[#6D6A7550] w-[21.25rem] h-[3.75rem] rounded-full flex items-center justify-center text-center bg-[#653e3e20]"
              >
                <option value="" disabled selected>
                  Select Property Type
                </option>
                <option value="volvo">Select 1</option>
                <option value="mercedes">Select 2</option>
                <option value="audi">Select 3</option>
              </select>
            </form>

            <div>
              <form className="h-[3.75rem] w-[21.25rem] pt-20 rounded-full flex items-center justify-center text-center">
                <select
                  id="cars"
                  name="cars"
                  className="h-[3.75rem] w-[21.25rem] rounded-full flex items-center justify-center text-center bg-[#9c5b5b20]"
                >
                  <option value="" disabled selected>
                    Select Rooms
                  </option>
                  <option value="volvo">Rooms 1</option>
                  <option value="mercedes">Room 2</option>
                  <option value="audi">Room 3</option>
                </select>
              </form>
            </div>
           </div>
            <div className="flex gap-1 mt-11 w-[100%] ml-[2.5rem] mb-[3.813rem]">
              <img src="/settingicon.svg" alt="icon" />
              <p className="text-[#03AEFD]">Advanced Search</p>
            </div>

            <button className="ml-[2.5rem] flex gap-2 justify-center items-center bg-[#03AEFD] w-[340px] h-[60px] rounded-[30px] text-white">
              <img src="searchicon.svg" alt="search icon" />
              <p>Search</p>
            </button>
          
        </div>
    </section>
  );
};








const BottomHero = () => {
  return <>
  </>;
};

const Hero = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-b from-[#4CC9F000] to-[#8d8d8e70]">
      <div className="max-w-[90rem] w-full flex items-center justify-center px-40 pt-[5.5rem] pb-[7.25rem] gap-[7.5rem] relative">
        <LeftSideOfHero/>
        <RightSideOfHero />
        <BottomHero />
      </div>
    </section>
  );
};

export default Hero;
