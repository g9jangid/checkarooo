"use client";
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="gradeint-bg relative h-screen w-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 z-0">
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
      <div className="absolute top-1/2 right-0 z-0">
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
          <Header isMenu={true} isModify={true} pageName={"Screening Update"} />

          <div className="w-full mt-10">
            <img
              src="/images/noscreen.svg"
              alt="Landing screen image"
              className="w-[70%] mx-[15%]"
            />
          </div>
        </div>

        <div className="bg-white flex-1 w-full flex flex-col rounded-t-[40px]">
          <div className="w-full flex justify-center mt-3">
            <span className="h-1.5 w-14 bg-[#D1E1ED] rounded-md inline-block"></span>
          </div>

          <div className="w-full flex justify-start flex-col mt-3 px-8">
            <p className="font-bold text-2xl text-[#301549] mt-2">
              Screening Update
            </p>
            <p className="text-sm text-[#7F8E9D] leading-relaxed my-3">
              Unfortunately, there are no screenings currently recommended for
              your age group. Please check back later or consult with your
              physician for personalized recommendations.
            </p>
          </div>

          <div className="w-full flex justify-center mt-3 px-8">
            <span className="h-[1px] w-full bg-[#EFEFEF] rounded-md inline-block"></span>
          </div>
          <div className="flex-1 w-full"></div>
          <div className="w-full px-8 mb-20 mt-6">
            <button
              onClick={() => router.push("/app")}
              className="bg-[#FE9535] cursor-pointer flex w-full py-5 justify-center items-center text-white font-bold text-sm rounded-2xl"
            >
              Start Over Again
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
