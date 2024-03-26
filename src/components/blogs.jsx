import { Blogs } from "./Blogs";

export const Blog = () => {
  return (
    <div className="bg-[#03AEFD] flex flex-col items-center pb-20">
      <div className="mt-20 flex flex-col items-center">
        <p className="text-[white] text-[19.4px]">WHAT’S TRENDING</p>
        <p className="text-[white] text-[39.8px]">Latest Blogs & Posts</p>
      </div>
      <div className="flex items-center mt-16 gap-11">
        {Blogs.map((item, i) => (
          <div key={i} className="w-[100%] items-center">
            <div className="h-[240px] w-[340px]">
              <img
                className="h-[240px] w-[340px] rounded-[10%]"
                
                src={item.imgsrc}
              />
            </div>
            <p className="text-white text-[27.6px] w-[340px] mt-5">{item.topic}</p>
            <p className="text-[16px] w-[340px] text-[#D4D4D4]">{item.content}</p>
            <div className="w-[100%] mt-3 h-[50px] flex justify-end">
              <img className="w-[50px] h-[50px] hover:cursor-pointer" src="/public/Group 33.svg" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
