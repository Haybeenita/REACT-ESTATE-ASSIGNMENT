import { SmartHome, User } from "../assets/icons";

export function WhoWeAre() {
  return (
    <section className="flex justify-center item-center">
      <div className="w-full max-w-[100%] items-center justify-center flex gap-36 mt-[9.375rem]">
        {renderLeftSide()}
        {renderRightSide()}
      </div>
    </section>
  );
}

function renderLeftSide() {
  return (
    <section className="">
      <div>
        <span className="font-medium text-xl uppercase text-[#4361EE]">
          who are we
        </span>

        <h2 className="font-semibold text-[2.5rem] w-[31.25rem] text-[#2B2B2B] pt-10 pb-8 ">
          Assisting individuals in locating the appropriate real estate.
        </h2>

        <p className="text-base font-normal w-[31.25rem] text-[#64748B]">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
          malesuada leo volutpat.
        </p>
      </div>

      <div className="flex flex-col mt-10 gap-7">
        <div className="flex items-center justify-center w-[25rem] h-[8.25rem] p-8 gap-6 rounded-[2rem] shadow-[4px_10px_30px_0_rgba(0,0,0,0.06)]">
          <i className="flex items-center justify-center size-11">
            <SmartHome />
          </i>
          <div className="flex flex-col items-start gap-5">
            <span className="text-xl font-medium text-[#4361EE]">
              Donec porttitor euismod
            </span>
            <p className="text-base font-normal text-[#64748B] ">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-[25rem] h-[8.25rem] p-8 gap-6 rounded-[2rem] shadow-[4px_10px_30px_0_rgba(0,0,0,0.06)]">
          <i className="flex items-center justify-center size-11">
            <User />
          </i>
          <div className="flex flex-col items-start gap-5">
            <span className="text-xl font-medium text-[#4361EE]">
              Donec porttitor euismod
            </span>
            <p className="text-base font-normal text-[#64748B] ">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderRightSide() {
  return (
    <section className="relative">
      <div className="flex gap-5 mt-[9.375rem]">
        <img src="/whoarewespan.svg" className="absolute top-14 ml-[200px]" />
        <span className="overflow-hidden shadow-[4px_10px_30px_0_rgba(0,0,0,0.015)] flex items-center justify-center rounded-[2rem] border-purple-700 h-[31.25rem] w-[17.5rem] mt-12">
          <img src="/whoarewe1.jpeg" className="object-cover size-full" />
        </span>
        <aside className="flex flex-col gap-5">
          <span className="overflow-hidden shadow-[4px_10px_30px_0_rgba(0,0,0,0.015)] flex items-center justify-center rounded-[2rem] border-purple-700 h-[17.5rem] w-[17.25rem]">
            <img src="/whoarewe2.jpeg" className="object-cover size-full" />
          </span>
          <span className="overflow-hidden shadow-[4px_10px_30px_0_rgba(0,0,0,0.015)] flex items-center justify-center rounded-[2rem] border-purple-700  h-[11.25rem] w-[17.25rem]">
            <img src="/whoarewe3.jpeg" className="object-cover size-full" />
          </span>
          <figure className="absolute bottom-7 ml-[4rem]">
            <img src="/eclipse2.svg" />
          </figure>
        </aside>
      </div>
    </section>
  );
}
