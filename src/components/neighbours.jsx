

const Neighbours= () => {
  return (
    <div className=" flex flex-col items-center pb-32">
      <div className="absolute mt-[70px] rounded-full rotate-45 bg-gradient-to-b from-[#4361EE99] to-[#4361EE00]">
      </div>
      <div className="flex flex-col items-center mt-[5rem] w-[1100px] pb-36">
      <figure className="absolute mt-[0.1rem] ml-[0.5rem]">
            <img src="/eclipse2.svg" />
        </figure>
        <div className="w-[100%]">
          <p className="text-[19.4px] text-[#4361EE]">AREAS ACROSS THE TOWN</p>
          <p className="text-[39.8px] text-[#2B2B2B]">
            Neighborhood Properties
          </p>
        </div>
        <div className="flex flex-wrap mt-20 gap-6">
          <div className="h-[320px] rounded-[30px] w-[300px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">216</p>
              <p className="text-[19.4]">New York City, NY</p>
            </div>
            <img
              className="h-[320px] object-fill flex items-center justify-center"
              src="/neighbour1.jpeg"
              alt=""
            />
          </div>

          <div className="h-[320px] rounded-[30px] w-[300px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">141</p>
              <p className="text-[19.4]">Houston, TX</p>
            </div>
            <img
              className="h-[380px] object-fill flex items-center justify-center"
              src="/neighbour2.jpeg"
              alt=""
            />
          </div>
          <div className="h-[320px] rounded-[30px] w-[420px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">212</p>
              <p className="text-[19.4]">San Diego, CA</p>
            </div>
            <img
              className="h-[320px] w-[420px] flex items-center justify-center"
              src="/neighbour3.jpeg"
              alt=""
            />
          </div>
          <div className="h-[320px] rounded-[30px] w-[412px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">183</p>
              <p className="text-[19.4]">Philadelphia, PA</p>
            </div>
            <img
              className=" object-fill flex items-center justify-center h-[320px] w-[412px]"
              src="/neighbour4.jpeg"
              alt=""
            />
          </div>
          <div className="h-[320px] rounded-[30px] w-[658px] overflow-hidden">
            <div className="flex flex-col mt-[180px] ml-16 absolute text-[white] bg-transparent">
              <p className="text-[57.3px]">112</p>
              <p className="text-[19.4]">San Francisco, CA</p>
            </div>
            <img
              className="w-[685px] object-fill flex items-center justify-center"
              src="/neighbour5.jpeg"
              alt=""
            />
          </div>
          <div className="h-[100px] w-[100px] absolute mt-[700px] ml-[65%] rounded-full -rotate-45 bg-gradient-to-b from-[#4361EE99] to-[#4361EE00]"></div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Neighbours