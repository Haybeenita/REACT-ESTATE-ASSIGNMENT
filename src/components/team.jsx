import { teamArray } from "./teamarray";

const Team = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <div className="max-w-[90rem] w-full justify-center items-center text-center">
      
        <p className=" text-[#4361EE] text-xl font-medium uppercase">
          Introduce yourself to
        </p>
        <h2 className="pt-7 pb-20 font-semibold text-[2.375rem] text-[#2B2B2B]">Our Team of Experts</h2>
      </div>
      <div className="flex flex-row gap-[4.188rem]">
        {teamArray.map((item, i) => (
          <div key={i} className="">
            <img className="w-[200px] h-[280px] flex items-center justify-center rounded-tl-[120px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px]" src={item.imgsrc} />
            <p className="text-[#0B090A] font-normal text-2xl flex items-center justify-center pt-7 pb-7"> {item.name}</p>
            <p className="text-base font-normal text-[#4361EE] flex items-center justify-center "> {item.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;



