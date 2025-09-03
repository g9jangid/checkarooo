"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Header({
  isMenu = false,
  isModify = false,
  pageName = "",
  onBack = null,
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="flex justify-between w-full pt-6 relative -left-3 z-10 xl:fixed xl:top-0 xl:left-0 xl:right-0 xl:px-16 xl:-z-10">
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 left-0 w-[80vw] xl:w-[300px] h-screen menu-grad"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="w-full flex justify-between pl-8">
              <p className="font-bold text-sm text-[#301549] uppercase pt-8">
                Menu
              </p>
              <span
                onClick={() => setOpen(false)}
                className="cursor-pointer inline-block p-8 font-bold text-sm text-[#301549] uppercase"
              >
                X
              </span>
            </div>
            <div className="w-full flex flex-col pl-8 mt-12">
              <div
                className="w-full flex items-center cursor-pointer"
                onClick={() => router.push("/")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.03 2.59C11.301 2.36026 11.6447 2.23416 12 2.23416C12.3553 2.23416 12.699 2.36026 12.97 2.59L20.47 8.953C20.6361 9.0938 20.7695 9.26906 20.861 9.46661C20.9526 9.66417 21 9.87928 21 10.097V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H13.75C13.5511 21 13.3603 20.921 13.2197 20.7803C13.079 20.6397 13 20.4489 13 20.25V14H11V20.25C11 20.4489 10.921 20.6397 10.7803 20.7803C10.6397 20.921 10.4489 21 10.25 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V10.097C3 9.657 3.194 9.238 3.53 8.953L11.03 2.59ZM12 3.734L4.5 10.097V19.5H9.5V13.25C9.5 13.0511 9.57902 12.8603 9.71967 12.7197C9.86032 12.579 10.0511 12.5 10.25 12.5H13.75C13.9489 12.5 14.1397 12.579 14.2803 12.7197C14.421 12.8603 14.5 13.0511 14.5 13.25V19.5H19.5V10.097L12 3.734Z"
                    fill="#301549"
                  />
                </svg>
                <p className="font-bold text-lg text-[#301549] pl-3">Home</p>
              </div>
            </div>
            <div className="w-full flex flex-col pl-8 mt-6">
              <div
                className="w-full flex items-center cursor-pointer"
                onClick={() => router.push("/about")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM13.5 16.5C13.5 16.6989 13.421 16.8897 13.2803 17.0303C13.1397 17.171 12.9489 17.25 12.75 17.25C12.3522 17.25 11.9706 17.092 11.6893 16.8107C11.408 16.5294 11.25 16.1478 11.25 15.75V12C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.579 10.8603 10.7197 10.7197C10.8603 10.579 11.0511 10.5 11.25 10.5C11.6478 10.5 12.0294 10.658 12.3107 10.9393C12.592 11.2206 12.75 11.6022 12.75 12V15.75C12.9489 15.75 13.1397 15.829 13.2803 15.9697C13.421 16.1103 13.5 16.3011 13.5 16.5ZM10.5 7.875C10.5 7.6525 10.566 7.43499 10.6896 7.24998C10.8132 7.06498 10.9889 6.92078 11.1945 6.83564C11.4001 6.75049 11.6263 6.72821 11.8445 6.77162C12.0627 6.81502 12.2632 6.92217 12.4205 7.0795C12.5778 7.23684 12.685 7.43729 12.7284 7.65552C12.7718 7.87375 12.7495 8.09995 12.6644 8.30552C12.5792 8.51109 12.435 8.68679 12.25 8.8104C12.065 8.93402 11.8475 9 11.625 9C11.3266 9 11.0405 8.88147 10.8295 8.6705C10.6185 8.45952 10.5 8.17337 10.5 7.875Z"
                    fill="#301549"
                  />
                </svg>

                <p className="font-bold text-lg text-[#301549] pl-3">
                  About Me
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isMenu ? (
        <span
          className="cursor-pointer flex justify-center p-3"
          onClick={() => onBack?.()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25V12.75ZM4.46967 11.4697C4.17678 11.7626 4.17678 12.2374 4.46967 12.5303L9.24264 17.3033C9.53553 17.5962 10.0104 17.5962 10.3033 17.3033C10.5962 17.0104 10.5962 16.5355 10.3033 16.2426L6.06066 12L10.3033 7.75736C10.5962 7.46447 10.5962 6.98959 10.3033 6.6967C10.0104 6.40381 9.53553 6.40381 9.24264 6.6967L4.46967 11.4697ZM18 11.25L5 11.25V12.75L18 12.75V11.25Z"
              fill="white"
            />
          </svg>
        </span>
      ) : (
        <div className="flex items-center">
          <span
            className="cursor-pointer flex justify-center p-3"
            onClick={() => setOpen(true)}
          >
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="26" height="2" rx="1" fill="white" />
              <rect y="8" width="14" height="2" rx="1" fill="white" />
              <rect y="16" width="20" height="2" rx="1" fill="white" />
            </svg>
          </span>
          <p className="text-white ml-2">{pageName}</p>
        </div>
      )}

      {isModify && (
        <span
          onClick={() => router.push("/app")}
          className="cursor-pointer flex justify-center p-3 relative -right-4"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 4C15 5.65685 13.6569 7 12 7C10.3431 7 9 5.65685 9 4M15 4C15 2.34315 13.6569 1 12 1C10.3431 1 9 2.34315 9 4M15 4L17 4M9 4H1M9 14C9 15.6569 7.65685 17 6 17C4.34315 17 3 15.6569 3 14M9 14C9 12.3431 7.65685 11 6 11C4.34315 11 3 12.3431 3 14M9 14L17 14M3 14H1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  );
}
