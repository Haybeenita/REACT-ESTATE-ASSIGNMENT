const Services = () => {
  return (
    <section className="flex justify-center items-center bg-[#D4D4D4] mt-[12.5rem] mb-[8.563rem]">
      <div className="max-w-[90rem] w-full flex items-center justify-center flex-col mt-[6.25rem] mb-[8.563rem]">
        <div>
          <span className="flex items-center justify-center text-[#2B2B2B] font-normal text-xl">
            OUR SERVICES
          </span>
          <h2 className="text-[#0B090A] font-semibold text-[2.5rem] pt-10 pb-[4.375rem]">
            Donec porttitor euismod dignissim
          </h2>
        </div>
        <div className="flex flex-row gap-12">
          <div className="w-[21.25rem] h-[22.75rem] bg-white rounded-[30px] py-[4rem] flex justify-center items-center flex-col">
            <div className="w-[90px] h-[90px]  rounded-full bg-[#4361EE] flex justify-center items-center">
              <img src="/icon-search.svg" />
            </div>
            <h4 className="font-medium text-xl text-[#2B2B2B] items-center text-center pt-3">
              Buy a New Home
            </h4>
            <p className="font-normal text-base text-[#808080] flex items-center justify-center text-center w-[13.75rem] mt-3">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.
            </p>
          </div>

          <div className="w-[21.25rem] h-[22.75rem] bg-white rounded-[30px] py-[4rem] flex justify-center items-center flex-col">
            <div className="w-[90px] h-[90px]  rounded-full bg-[#4361EE] flex justify-center items-center">
              <img src="/icon -home.svg" />
            </div>
            <h4 className="font-medium text-xl text-[#2B2B2B] items-center text-center pt-3">
              Sell a House
            </h4>
            <p className="font-normal text-base text-[#808080] flex items-center justify-center text-center w-[13.75rem] mt-3">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.
            </p>
          </div>

          <div className="w-[21.25rem] h-[22.75rem] bg-white rounded-[30px] py-[4rem] flex justify-center items-center flex-col">
          <div className="w-[90px] h-[90px]  rounded-full bg-[#4361EE] flex justify-center items-center">
            <img src="/bedicon2.svg" />
          </div>
          <h4 className="font-medium text-xl text-[#2B2B2B] items-center text-center pt-3">
          Rent a House
          </h4>
          <p className="font-normal text-base text-[#808080] flex items-center justify-center text-center w-[13.75rem] mt-3">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
