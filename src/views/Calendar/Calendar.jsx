import { Avatar } from "flowbite-react";

const Calendar = () => {
  return (
    <div className="w-full px-10">
      <div className="pt-8">
        <Avatar rounded size="lg" />
        <div className="font-medium mt-2">
          <h1 className="text-sm text-gray-500 dark:text-gray-400">
            Juan Da Rosa
          </h1>
          <div className="text-lg">Corte de Pelo</div>
        </div>
      </div>
      <div className=" w-full text-left mt-4 font-semibold border-b pb-6">
        <div className="flex w-full gap-2">
          <svg
            className="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-primary">45 min</p>
        </div>
        <div className="flex w-full gap-2 mt-4">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 21"
          >
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
            </g>
          </svg>
          <p className="text-primary">{`San Martin 1043 - "Urban Identi"`}</p>
        </div>
      </div>
      <div className="pt-4"></div>
    </div>
  );
};

export default Calendar;
