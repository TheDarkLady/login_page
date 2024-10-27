import React from "react";

function AboutUs() {
  return (
    <div className="w-[100%] max-w-[1200px] mx-auto h-full my-5 px-5 py-8 lg:py-24 lg:p-6">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-[100%] h-[100%] lg:w-[50%] flex flex-col justify-center items-start">
          <div className="w-[100%] border-b border-[#e5e7eb]">
            <h6 className="text-[#7e3af3] text-[18px] mb-2 font-bold">
              Trusted Worldwide
            </h6>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
              Trusted by over 600 million users and 10,000 teams
            </h1>
            <p className="mb-8 font-light lg:text-xl text-[#6b7280]">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
          </div>
          <div className="w-[100%] ">
            <div className="mt-4 gap-2 flex flex-col justify-start items-start">
              <a
                href=""
                className="flex flex-row justify-start items-center gap-2 text-[#7e3af3] text-[18px]font-bold"
              >
                Explore Legality Guide
                <svg
                  class="w-5 h-5 ml-1"
                  fill="#7e3af3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href=""
                className="flex flex-row justify-start items-center gap-2 text-[#7e3af3] text-[18px]font-bold"
              >
                Visit the Trust Center
                <svg
                  class="w-5 h-5 ml-1"
                  fill="#7e3af3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%]"></div>
      </div>
    </div>
  );
}

export default AboutUs;
