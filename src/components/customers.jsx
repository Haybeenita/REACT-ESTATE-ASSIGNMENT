export const Customers = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-11 items-center justify-center pt-20 pb-20">
        <div>
          <p className="text-[19.4px] text-[#4361EE] ">TESTIMONIALS</p>
          <p className="text-[39.8px] text-[#2B2B2B] w-[415px]">
            Look What Our Customers Say!
          </p>
          <p className=" text-[16px] text-[#2B2B2B] w-[415px]">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.
          </p>
          <div className="flex items-center justify-start gap-20 mt-32">
            <img src="/arrow1.svg" alt="" />
            <img src="/arrow2.svg" alt="" />
          </div>
        </div>
        <div>
          <div className="h-[60px]  w-[60px] absolute -ml-8 -mt-6 rounded-full -rotate-45 bg-gradient-to-b from-[#4361EE] to-[#4361EE00]"></div>
          <div className=" h-[385px] w-[500px] shadow-xl rounded-[30px] border-[1px]  bg-[#FFFFFF] relative"></div>
        </div>
      </div>
      <div className="bg-[#03AEFD] h-[260px] w-[1200px] rounded-[30px] mt-20 flex flex-col justify-start items-center mb-[250px]">
        <div className="h-[100px] w-[100px] absolute ml-[1050px] -mt-[40px] rounded-full rotate-45 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF00]"></div>
        <img
          className="h-[340px] w-[500px] absolute -mt-20 -ml-[900px]"
          src="/public/agent.png"
          alt=""
        />
        <p className="text-[39.8px] text-white">Become a Agent.</p>
        <p className="text-[16px] text-white w-[344px]">
          Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis
          scelerisque.
        </p>
        <div className="flex items-center rounded-3xl justify-center bg-white h-[49px] w-[165px]">
        <button>Register</button>
        </div>
      </div>

      
    </div>
  );
};
