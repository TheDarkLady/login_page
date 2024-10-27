import React from "react";
import Image1 from "../assets/feature-1.png";
import Image2 from "../assets/feature-2.png";
function Charts() {
  return (
    <div className="w-[100%] bg-[#f9fafb] flex flex-col justify-start items-center">
      <div className="max-w-[1200px]  max-auto h-full flex flex-col justify-center items-center px-5 py-8 lg:py-24 lg:p-6 gap-20 my-8">
        <div className="w-[100%] h-[100%] flex flex-row justify-center items-center gap-10 ">
          <div className="w-[100%] h-[100%] lg:w-[50%] flex flex-col justify-center items-start">
            <div className="w-[100%] border-b border-[#e5e7eb]">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
                Work with tools you already use
              </h1>
              <p className="mb-8 font-light lg:text-xl text-[#6b7280]">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>
            </div>
            <div className="w-[100%] ">
              <ul role="list" className="py-8 space-y-5">
                <li className="flex items-center space-x-2">
                  <svg
                    class=" w-5 h-5 text-purple-500 "
                    fill="#9162f9"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium text-[#000000]">
                    Deliver great service experiences fast
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    class=" w-5 h-5 text-purple-500 "
                    fill="#9162f9"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium text-[#000000]">
                    Development workflow
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    class=" w-5 h-5 text-purple-500 "
                    fill="#9162f9"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium text-[#000000]">
                    Knowledge management
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl text-[#6b7280]">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
          </div>
          <div className="w-[50%] hidden lg:block">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="w-[100%] h-[100%] flex flex-row-reverse justify-center items-center gap-10">
          <div className="w-[100%] h-[100%] lg:w-[50%] flex flex-col justify-center items-start">
            <div className="w-[100%] border-b border-[#e5e7eb]">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
                We invest in the world’s potential
              </h1>
              <p className="mb-8 font-light lg:text-xl text-[#6b7280]">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>
            </div>
            <div className="w-[100%] ">
              <ul role="list" className="py-8 space-y-5">
                <li className="flex items-center space-x-2">
                  <svg
                    class=" w-5 h-5 text-purple-500 "
                    fill="#9162f9"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium text-[#000000]">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    class=" w-5 h-5 text-purple-500 "
                    fill="#9162f9"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium text-[#000000]">
                    Templates for everyone
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    class=" w-5 h-5 text-purple-500 "
                    fill="#9162f9"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium text-[#000000]">
                    Development workflow
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    class=" w-5 h-5 text-purple-500 "
                    fill="#9162f9"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium text-[#000000]">
                    Limitless business automation
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    class=" w-5 h-5 text-purple-500 "
                    fill="#9162f9"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium text-[#000000]">
                    Knowledge management
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl text-[#6b7280]">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
          </div>
          <div className="w-[50%] hidden lg:block">
            <img src={Image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
