"use client";

export default function Tag({ label, active = false, onClick }) {
  return (
    <span
      onClick={onClick}
      className={`px-5 cursor-pointer py-2 rounded-full text-sm font-semibold whitespace-nowrap justify-center items-center m-1.5 flex flex-nowrap
        ${active ? "bg-[#FE9535] text-[#FFF]" : "bg-[#F1F6FB] text-[#301549]"}
      `}
    >
      {active && (
        <svg
          className="mr-1"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 1.5C4.63403 1.5 1.5 4.63403 1.5 8.5C1.5 12.3662 4.63403 15.5 8.5 15.5C12.3662 15.5 15.5 12.3662 15.5 8.5C15.5 4.63403 12.3662 1.5 8.5 1.5ZM8.5 14.6388C5.12272 14.6388 2.375 11.8773 2.375 8.49997C2.375 5.12269 5.12272 2.37497 8.5 2.37497C11.8773 2.37497 14.625 5.1227 14.625 8.49997C14.625 11.8772 11.8773 14.6388 8.5 14.6388ZM11.2937 5.93866L7.18661 10.0715L5.33708 8.22197C5.16624 8.05113 4.8893 8.05113 4.71824 8.22197C4.54739 8.39281 4.54739 8.66975 4.71824 8.84059L6.88364 11.0062C7.05449 11.1768 7.33142 11.1768 7.50249 11.0062C7.52217 10.9865 7.53903 10.9651 7.55434 10.9428L11.9127 6.55749C12.0833 6.38664 12.0833 6.1097 11.9127 5.93866C11.7417 5.76781 11.4647 5.76781 11.2937 5.93866Z"
            fill="white"
          />
        </svg>
      )}

      {label}
    </span>
  );
}
