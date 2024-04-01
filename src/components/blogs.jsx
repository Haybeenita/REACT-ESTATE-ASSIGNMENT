import { BlogsArray } from "./blogArray"

const Blog = () => {
    return (
        <section className="mt-[11.25rem]">
        <div className="bg-[#03AEFD] flex flex-col items-center pb-20">
      <div className="mt-20 flex flex-col items-center">
        
        <p className="text-[white] text-[19.4px]">WHAT’S TRENDING</p>
        <p className="text-[white] text-[39.8px]">Latest Blogs & Posts</p>
      </div>
      <div className="flex items-center mt-16 gap-11">
        {BlogsArray.map((item, i) => (
          <div key={i} className="w-[100%] items-center">
            <div className="h-[240px] w-[340px] shadow-[rgba(0, 0, 0, 0.2)] bg-[rgba(0, 0, 0, 0.3)]">
            <div className="flex flex-col w-[3.063rem] h-[3.125rem] absolute bg-white justify-center items-center rounded-b-lg ml-[3.125rem]">
                <span className="font-medium text-[#2B2B2B] text-xl">{item.Date}</span>
                <span className="font-normal text-base text-[#2B2B2B]">{item.day}</span>
                </div>
              <img
                className="h-[240px] w-[340px] rounded-[10%]"
                
                src={item.imgsrc}
              />
            </div>
            <p className="text-white text-[27.6px] w-[340px] mt-5">{item.topic}</p>
            <p className="text-[16px] w-[340px] text-[#D4D4D4]">{item.content}</p>
            <div className="w-[100%] mt-3 h-[50px] flex justify-end">
              <img className="w-[50px] h-[50px] hover:cursor-pointer" src="/arrowGroup33.svg" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
        </section>
    )
}
export default Blog