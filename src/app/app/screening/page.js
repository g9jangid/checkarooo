/* eslint-disable @next/next/no-img-element */
"use client";

import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useFormContext } from "@/context/FormContext";
import Tag from "@/components/Tag";
import Header from "@/components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const {
    deviceType,
    filteredData,
    category,
    screening,
    setCategory,
    setScreening,
  } = useFormContext();
  const [screen, setScreen] = useState("one");
  const [query, setQuery] = useState("");
  // const handleContinue = () => {
  //   if (screen === "one") {
  //     if (!formData?.dob) {
  //       setError(true);
  //     } else {
  //       setScreen("two");
  //     }
  //   } else {
  //     //check if screenings available or not
  //     if (filteredData?.length === 0) {
  //       router.push("/app/no-screening");
  //     } else {
  //       router.push("/app/screening");
  //     }
  //   }
  // };

  const onBack = () => {
    if (screen === "one") {
      router.push("/");
    } else if (screen === "two") {
      setScreen("one");
    } else {
      setScreen("two");
    }
  };

  function getUniqueCategories(items) {
    return [...new Set(items.map((item) => item.category))];
  }

  return (
    <main className="gradeint-bg relative h-full min-h-screen w-screen flex items-center justify-center">
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

      {screen === "one" && (
        <div className="pb-[5vh] w-full px-7 relative z-10 flex flex-col h-full min-h-screen max-w-[500px] items-center">
          <Header isMenu={true} isModify={true} pageName="Home" />
          <div className="px-0 w-full mt-6">
            <h1 className="heading-h1 text-white w-full !text-left !normal-case !leading-10">
              Check out the screenings suggested for you
            </h1>
            <div className="w-full mt-6">
              <p className="text-white font-semibold">Categories</p>
              <div className="w-auto flex flex-col justify-start items-start mt-2 -ml-2">
                {getUniqueCategories(filteredData)?.map((item, i) => (
                  <Tag
                    key={i}
                    label={item}
                    active={category === item}
                    onClick={() => {
                      setCategory(item);
                      setScreen("two");
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {screen === "two" && (
        <div className="pb-[5vh] w-full px-7 relative z-10 flex flex-col h-full min-h-screen max-w-[500px] xl:max-w-[900px] items-center">
          <Header onBack={onBack} pageName="Screening List" isModify={true} />
          <div className="w-full mt-4">
            <div className="w-full">
              <div className="relative w-full max-w-sm">
                {/* Search icon */}
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.2227"
                    cy="11.2647"
                    r="6.19436"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.1762 15.4177L19.5 18.5002"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Input field */}
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={"Search"}
                  className="w-full pl-10 pr-4 font-medium text-sm py-4 text-white rounded-lg border-none bg-[#6D429B] focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full mt-6 flex flex-col">
              {filteredData.map((item, i) =>
                item.category === category &&
                (item.title.includes(query) ||
                  item.category.toLowerCase().includes(query.toLowerCase()) ||
                  item.ageGroup.toLowerCase().includes(query.toLowerCase()) ||
                  item.genderText.toLowerCase().includes(query.toLowerCase()) ||
                  item.chars.toLowerCase().includes(query.toLowerCase()) ||
                  item.desc.toLowerCase().includes(query.toLowerCase())) ? (
                  <div
                    className="w-full screen-card rounded-2xl p-4 mb-4 cursor-pointer"
                    key={i}
                    onClick={() => {
                      setScreening(item);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setScreen("three");
                    }}
                  >
                    <p className="w-full text-[#301549] font-bold text-sm leading-relaxed">
                      {item.title}
                    </p>
                    <div className="w-full flex flex-wrap justify-start mt-2 -ml-1">
                      <p className="bg-[#FE9535] text-white rounded-2xl font-semibold text-xs px-2 text-center py-1 m-1">
                        {item.ageGroup}
                      </p>
                      <p className="bg-[#FE9535] text-white rounded-2xl font-semibold text-xs px-2 text-center py-1 m-1">
                        {item.genderText}
                      </p>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      )}

      {screen === "three" && (
        <div className="w-full relative z-10 flex flex-col h-full min-h-screen max-w-[500px] xl:max-w-[900px] items-center">
          <div className="px-7 flex flex-col w-full pb-12">
            <Header onBack={onBack} isModify={true} />

            <div className="w-full mt-10 flex justify-center">
              <img
                src={`/images/screening/${screening.img}`}
                alt="Landing screen image"
                className="w-[70%] mx-[15%] xl:w-[300px]"
              />
            </div>
          </div>

          <div className="bg-white flex-1 w-full flex flex-col rounded-t-[40px]">
            <div className="w-full flex justify-center mt-3">
              <span className="h-1.5 w-14 bg-[#D1E1ED] rounded-md inline-block"></span>
            </div>
            <div className="w-full flex justify-start flex-col mt-3 px-8">
              <p className="font-bold text-2xl text-[#301549] mt-2">
                {screening.title}
              </p>
            </div>
            <div className="w-full flex justify-center mt-3 px-8">
              <span className="h-[1px] w-full bg-[#EFEFEF] rounded-md inline-block"></span>
            </div>

            <div className="w-full flex justify-start flex-col mt-1 px-8">
              <p className=" text-sm text-[#301549] mt-2">
                Age Group:{" "}
                <span className="text-[#7F8E9D]">{screening.ageGroup}</span>
              </p>
              <p className=" text-sm text-[#301549] mt-1">
                Gender:{" "}
                <span className="text-[#7F8E9D]">{screening.genderText}</span>
              </p>
              <p className=" text-sm text-[#301549] mt-1">
                Additional Characteristics:{" "}
                <span className="text-[#7F8E9D]">{screening.chars}</span>
              </p>
            </div>
            <div className="w-full flex justify-center mt-3 px-8">
              <span className="h-[1px] w-full bg-[#EFEFEF] rounded-md inline-block"></span>
            </div>
            <div className="w-full flex justify-start flex-col mt-1 px-8 mb-8">
              <p className="text-sm xl:text-lg text-[#7F8E9D] leading-relaxed my-3">
                {screening.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
