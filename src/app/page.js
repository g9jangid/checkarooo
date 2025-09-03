"use client";
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="gradeint-bg relative h-full w-screen flex items-center justify-center">
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

      <div className="pt-[15vh] pb-[5vh] relative z-10 flex flex-col justify-between h-full min-h-screen max-w-[500px] items-center">
        <img
          src="/images/landing.svg"
          alt="Landing screen image"
          className="w-[80vw] mx-[10vw]"
        />
        <div className="px-7">
          <h1 className="heading-h1 xl:!text-3xl text-white">
            Don&apos;t let disease catch <br />
            you off guard.
          </h1>
          <p className="para-p text-[#F1F6FB] mt-6 xl:!text-lg">
            Get personalized screening recommendations
            <br /> and take control of your health.
          </p>
        </div>
        <div className="px-7 w-full mb-12 mt-6">
          <button
            onClick={() => router.push("/app")}
            className="bg-[#FE9535] cursor-pointer flex w-full py-5 justify-center items-center text-white font-bold text-sm xl:text-lg rounded-2xl"
          >
            Let’s Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
