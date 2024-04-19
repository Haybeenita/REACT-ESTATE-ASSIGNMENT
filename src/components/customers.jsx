import { useState } from "react";
import { customerReview } from "./customersArray";

export const Customers = () => {
  const [activeReviews, setActiveReviews] = useState(0);

  const nextToggle = () => {
      const next = activeReviews + 1;
      setActiveReviews(next > customerReview.length - 1 ? 0 : next);
    },
    prevToggle = () => {
      const next = activeReviews - 1;
      setActiveReviews(activeReviews === 0 ? customerReview.length - 1 : next);
    };

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
          <div className="flex items-center justify-start gap-20 mt-10">
            <img src="/arrow1.svg" alt="" onClick={prevToggle} />
            <img src="/arrow2.svg " alt="" onClick={nextToggle} />
          </div>
        </div>

        <div>
          <div className="h-[60px] w-[60px] absolute -ml-8 -mt-6 rounded-full -rotate-45 bg-gradient-to-b from-[#4361EE] to-[#4361EE00]"></div>
          {customerReview.map((review, idx) => (
            <div
              key={idx}
              className={`${
                activeReviews === idx ? "block" : "hidden"
              } h-[385px] w-[500px] shadow-xl rounded-[30px] border-[1px] bg-[#FFFFFF] relative animate__animated animate__fadeInRight`}
            >
              <div className="flex flex-col ">
                <img
                  className="w-[4rem] h-[4rem] mx-[3rem] mt-[2rem]"
                  src="/yellowgradient.svg"
                ></img>
                <p className="mx-[3rem] text-[#2B2B2B] text-semibold">
                  {review.text}
                </p>
                <hr className="w-[25rem] mb-[1rem] mt-[1.5rem] border-1 mx-auto"></hr>
                <div className="flex items-center mt-[1rem] mx-[3rem]">
                  <img
                    className="w-[4rem] h-[4rem] rounded-full mr-[1rem]"
                    src={review.imgsrc}
                    alt=""
                  />
                  <span className=" mr-[4rem] text-[#2B2B2B]">{review.name}</span>
                <span className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="yellow"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="yellow"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="yellow"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="yellow"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#D4D4D4"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#D4D4D4"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#03AEFD] h-[260px] w-[1200px] rounded-[30px] mt-20 flex flex-col justify-start items-center mb-[250px]">
        <div className="h-[100px] w-[100px] absolute ml-[1050px] -mt-[40px] rounded-full rotate-45 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF00]"></div>
        <div className="h-[100px] w-[100px] absolute -ml-[650px] mt-[80px] rounded-full -rotate-45 bg-gradient-to-b from-[#FFFFFF90] to-[#FFFFFF00]"></div>
        <img
          className="h-[340px] w-[500px] absolute -mt-20 -ml-[900px]"
          src="/public/agent.png"
          alt=""
        />
        <div className="flex justify-center items-center mt-[82px]">
          <div className="ml-[60px] ">
            <p className="text-[39.8px] text-white">Become a Agent.</p>
            <p className="text-[16px] text-white w-[344px]">
              Fusce venenatis tellus a felis scelerisque. venenatis tellus a
              felis scelerisque.
            </p>
          </div>

          <div className="flex items-center rounded-3xl justify-center bg-white h-[49px] w-[165px] text-[#03AEFD] font-medium ml-[80px]">
            <button>Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
