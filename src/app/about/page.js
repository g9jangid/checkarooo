"use client";
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="gradeint-bg relative h-full min-h-screen w-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 z-[1]">
        <svg
          width="143"
          height="165"
          viewBox="0 0 143 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.7"
            cx="17.5"
            cy="39.5"
            r="110.5"
            stroke="#9955B9"
            strokeWidth="30"
          />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 z-[1]">
        <svg
          width="155"
          height="251"
          viewBox="0 0 155 251"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.36"
            cx="125.5"
            cy="125.5"
            r="125.5"
            fill="#8B55C6"
          />
        </svg>
      </div>

      <div className="w-full relative z-10 flex flex-col h-screen max-w-[500px] items-center">
        <div className="px-7 flex flex-col w-full pb-12">
          <Header isMenu={true} isModify={false} pageName={"About"} />
          <div className="absolute top-0 left-0 z-[1] opacity-75">
            <svg
              width="143"
              height="165"
              viewBox="0 0 143 165"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.7"
                cx="17.5"
                cy="39.5"
                r="110.5"
                stroke="#9955B9"
                strokeWidth="30"
              />
            </svg>
          </div>
          <img
            src="/images/about.jpg"
            alt="Landing screen image"
            className="w-full absolute top-0 left-0 z-[-1]"
          />
        </div>
        <div className="flex-1 min-h-[70vw] xl:min-h-96 xl:flex-none"></div>

        <div className="bg-white flex-1 w-full flex flex-col rounded-t-[40px] relative z-[2]">
          <div className="w-full flex justify-center mt-3">
            <span className="h-1.5 w-14 bg-[#D1E1ED] rounded-md inline-block"></span>
          </div>

          <div className="w-full flex justify-start flex-col mt-3 px-8">
            <p className="font-bold text-2xl text-[#301549] mt-2">About</p>
            <p className="text-sm text-[#7F8E9D] leading-relaxed my-3">
              Thank you for using this app and taking a step towards better
              health. Please always consult your physician to know more about
              screening suggestions that apply to you. This app is created by
              Musa Kiyani, a physician with interests in global and public
              health. For further guidelines and clarification, please see the
              U.S. Preventive Services Task Force screening suggestions.
            </p>
          </div>

          <div className="w-full flex justify-center mt-3 px-8">
            <span className="h-[1px] w-full bg-[#EFEFEF] rounded-md inline-block"></span>
          </div>
          <div className="flex-1 w-full"></div>
          <div className="w-full px-8 mb-20 mt-6">
            <button
              onClick={() => router.push("/")}
              className="bg-[#FE9535] cursor-pointer flex w-full py-5 justify-center items-center text-white font-bold text-sm rounded-2xl"
            >
              Back to home{" "}
              <span className="ml-4">
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
