import { houseArray } from "./Array";
const Toplatest = () => {
  return (
    <section className="flex gap-[25.75rem] ">
      <div className="">
        <p className="font-normal text-xl text-[#4361EE]">CHECKOUT OUR NEW</p>

        <h2 className="font-semibold text-[2.5rem] py-7 text-[#2B2B2B]">
          Latest Listed Properties
        </h2>
        <p className="text-[#64748B] font-normal text-base w-[31.25rem]">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus.
        </p>
      </div>

      <div className="flex items-center justify-center ">
        <ul className="flex gap-5">
          <li className="border-2 border-[#03AEFD] text-[#03AEFD] flex items-center justify-center w-20 h-12 rounded-[1.875rem] hover:bg-[#03AEFD] hover:text-white">
            All
          </li>
          <li className="border-2 border-[#03AEFD] text-[#03AEFD] flex items-center justify-center w-20 h-12 rounded-[1.875rem] hover:bg-[#03AEFD] hover:text-white">
            Sell
          </li>
          <li className="border-2 border-[#03AEFD] text-[#03AEFD] flex items-center justify-center w-20 h-12 rounded-[1.875rem] hover:bg-[#03AEFD] hover:text-white">
            Rent
          </li>
        </ul>
      </div>
    </section>
  );
};

const Bottomlatest = () => {
  return (
    <section>
      <div className="carousel carousel-center w-[90rem] p-4 space-x-4 mt-[50px] rounded-box ">
        <div className="carousel-item pl-20">
          {houseArray.map((item, i) => (
            <div key={i} className="ml-11">
                <img
                className="w-[340px] rounded-[30px] h-[340px]"
                 src={item.imgsrc}/>
                 <p className="font-normal text-3xl text-[#2B2B2B] mt-8"> {item.price}</p>
                <p className="font-medium text-xl text-[#2B2B2B]">{item.Address}</p>
                <p className="text-base font-normal text-[#64748B] py-5">{item.Location}</p>
                <div className="flex gap-2.5">
                <img 
                className=""
                src={item.icon}/>
                <p className="font-normal text-base text-[#2B2B2B]">{item.bed}</p>
                <img 
                className=""
                src={item.bathicon}/>
                <p className="font-normal text-base text-[#2B2B2B]">{item.tub}</p>
                
                </div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

const Latestproperties = () => {
  return (
    <section className="flex justify-center items-center  mt-[8.5rem]">
      <div className="max-w-[100%] w-full flex flex-col items-center justify-center">
        <Toplatest />
        <Bottomlatest />
      </div>
    </section>
  );
};

export default Latestproperties;
