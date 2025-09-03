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
  const { formData, updateField, deviceType, filteredData } = useFormContext();
  const [screen, setScreen] = useState("one");
  const [error, setError] = useState(false);

  const toggleFactor = (factor) => {
    const updatedArr = formData?.factors.includes(factor)
      ? formData?.factors.filter((f) => f !== factor) // remove if exists
      : [...formData?.factors, factor]; // add if not
    updateField("factors", [...updatedArr]);
  };

  const handleContinue = () => {
    if (screen === "one") {
      if (!formData?.dob) {
        setError(true);
      } else {
        setScreen("two");
      }
    } else {
      //check if screenings available or not
      if (filteredData?.length === 0) {
        router.push("/app/no-screening");
      } else {
        router.push("/app/screening");
      }
    }
  };

  const factorData = [
    {
      name: "Diabetes",
      value: "diabetes",
    },
    {
      name: "Dyslipidemia",
      value: "dyslipidemia",
    },
    {
      name: "Hypertension (HTN)",
      value: "hypertension",
    },
    {
      name: "High BMI",
      value: "highBMI",
    },
    {
      name: "Overweight/Obesity",
      value: "overweight",
    },
    {
      name: "History of Falls",
      value: "historyofFalls",
    },
    {
      name: "Parental History of Hip Fracture",
      value: "hipFracture",
    },
    {
      name: "Multiple Sexual Partners",
      value: "multipleSexualPartners",
    },
    {
      name: "Sex Partner with STI",
      value: "sexPartnerwithSTI",
    },
    {
      name: "Substance Use",
      value: "substanceUse",
    },
    {
      name: "Immunosuppressive Condition",
      value: "immunosuppressive",
    },
    {
      name: "Behavioral Health Concerns",
      value: "behavioralHealthConcerns",
    },
  ];

  const onBack = () => {
    if (screen === "one") {
      router.push("/");
    } else {
      setScreen("one");
    }
  };

  return (
    <main className="gradeint-bg relative min-h-screen h-full w-screen flex items-center justify-center">
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

      {screen === "one" ? (
        <div className="pb-[5vh] w-full px-7 relative z-10 flex flex-col min-h-screen h-full max-w-[500px] items-center">
          <Header onBack={onBack} />
          <div className="px-0 w-full mt-8">
            <h1 className="heading-h1 text-white w-full !text-left">
              Enter your Date of Birth
            </h1>
            <div className="w-full mt-3">
              <DatePicker
                onChange={(value) => {
                  if (value) {
                    setError(false);
                  }
                  updateField("dob", value);
                }}
                value={formData?.dob}
                format="dd/MM/yy"
                className="datepicker-custom"
                yearPlaceholder="YYYY"
                monthPlaceholder="MM"
                dayPlaceholder="DD"
                clearIcon={null}
                calendarIcon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        d="M17 14C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12C16.7348 12 16.4804 12.1054 16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14ZM17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17C18 16.7348 17.8946 16.4804 17.7071 16.2929C17.5196 16.1054 17.2652 16 17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM7 14C7.26522 14 7.51957 13.8946 7.70711 13.7071C7.89464 13.5196 8 13.2652 8 13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14ZM7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99998 1.75C7.19889 1.75 7.38965 1.82902 7.53031 1.96967C7.67096 2.11032 7.74998 2.30109 7.74998 2.5V3.263C8.41198 3.25 9.14098 3.25 9.94298 3.25H14.056C14.859 3.25 15.588 3.25 16.25 3.263V2.5C16.25 2.30109 16.329 2.11032 16.4696 1.96967C16.6103 1.82902 16.8011 1.75 17 1.75C17.1989 1.75 17.3897 1.82902 17.5303 1.96967C17.671 2.11032 17.75 2.30109 17.75 2.5V3.327C18.01 3.347 18.2563 3.37233 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V14.056C22.75 15.894 22.75 17.35 22.597 18.489C22.439 19.661 22.107 20.61 21.359 21.359C20.61 22.107 19.661 22.439 18.489 22.597C17.349 22.75 15.894 22.75 14.056 22.75H9.94498C8.10698 22.75 6.65098 22.75 5.51198 22.597C4.33998 22.439 3.39098 22.107 2.64198 21.359C1.89398 20.61 1.56198 19.661 1.40398 18.489C1.25098 17.349 1.25098 15.894 1.25098 14.056V11.944C1.25098 10.106 1.25098 8.65 1.40398 7.511C1.56198 6.339 1.89398 5.39 2.64198 4.641C3.39098 3.893 4.33998 3.561 5.51198 3.403C5.74531 3.37233 5.99164 3.347 6.25098 3.327V2.5C6.25098 2.30126 6.32986 2.11065 6.47029 1.97002C6.61073 1.8294 6.80124 1.75026 6.99998 1.75ZM5.70998 4.89C4.70498 5.025 4.12498 5.279 3.70198 5.702C3.27898 6.125 3.02498 6.705 2.88998 7.71C2.86731 7.88 2.84798 8.05967 2.83198 8.249H21.168C21.152 8.05967 21.1326 7.87967 21.11 7.709C20.975 6.704 20.721 6.124 20.298 5.701C19.875 5.278 19.295 5.024 18.289 4.889C17.262 4.751 15.907 4.749 14 4.749H9.99998C8.09298 4.749 6.73898 4.752 5.70998 4.89ZM2.74998 12C2.74998 11.146 2.74998 10.403 2.76298 9.75H21.237C21.25 10.403 21.25 11.146 21.25 12V14C21.25 15.907 21.248 17.262 21.11 18.29C20.975 19.295 20.721 19.875 20.298 20.298C19.875 20.721 19.295 20.975 18.289 21.11C17.262 21.248 15.907 21.25 14 21.25H9.99998C8.09298 21.25 6.73898 21.248 5.70998 21.11C4.70498 20.975 4.12498 20.721 3.70198 20.298C3.27898 19.875 3.02498 19.295 2.88998 18.289C2.75198 17.262 2.74998 15.907 2.74998 14V12Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                }
              />
            </div>
            {error && (
              <p className="mt-2 pl-2 text-red-300">Enter date of birth</p>
            )}
          </div>

          <div className="px-0 w-full mt-8">
            <h1 className="heading-h1 text-white w-full !text-left">
              Select Your Sex
            </h1>
            <div className="w-full mt-3">
              <div
                className="w-auto flex items-center cursor-pointer"
                onClick={() => updateField("gender", "male")}
              >
                <span className="relative border-white/30 border w-6 h-6 rounded-full">
                  {formData?.gender === "male" && (
                    <span className="absolute bg-[#FE9535] w-3 h-3 top-[5px] left-[5px] rounded-full"></span>
                  )}
                </span>
                <p className="text-[#F1F6FB] text-sm pl-3">Male</p>
              </div>
              <div
                className="w-auto flex items-center mt-3 cursor-pointer"
                onClick={() => updateField("gender", "female")}
              >
                <span className="relative border-white/30 border w-6 h-6 rounded-full">
                  {formData?.gender === "female" && (
                    <span className="absolute bg-[#FE9535] w-3 h-3 top-[5px] left-[5px] rounded-full"></span>
                  )}
                </span>
                <p className="text-[#F1F6FB] text-sm pl-3">Female</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-8">
            <h1 className="heading-h1 text-white w-full !text-left">
              Select Your Risk Factors <br />
              and Conditions
            </h1>
            <div className="w-full mt-3 flex flex-wrap">
              <Tag
                label="Smoking"
                active={formData?.factors.includes("smoking")}
                onClick={() => toggleFactor("smoking")}
              />
              {formData?.gender === "female" && (
                <Tag
                  label="Pregnancy"
                  active={formData?.factors.includes("pregnancy")}
                  onClick={() => toggleFactor("pregnancy")}
                />
              )}
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="px-0 w-full mb-12 mt-6">
            <button
              onClick={() => handleContinue()}
              className="bg-[#FE9535] cursor-pointer flex w-full py-5 justify-center items-center text-white font-bold text-sm rounded-2xl"
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div className="pb-[5vh] w-full px-7 relative z-10 flex flex-col min-h-screen h-full max-w-[500px] items-center">
          <Header onBack={onBack} />

          <div className="w-full mt-8">
            <h1 className="heading-h1 text-white w-full !text-left">
              Select Additional Factors
            </h1>
            <div className="w-full mt-3 flex flex-wrap">
              {factorData.map((item, i) => (
                <Tag
                  key={i}
                  label={item.name}
                  active={formData?.factors.includes(item.value)}
                  onClick={() => toggleFactor(item.value)}
                />
              ))}
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="px-0 w-full mb-12 mt-6">
            <button
              onClick={() => handleContinue()}
              className="bg-[#FE9535] cursor-pointer flex w-full py-5 justify-center items-center text-white font-bold text-sm rounded-2xl"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
