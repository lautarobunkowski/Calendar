import {
  useLocation,
  // useNavigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import { Calendar as CalendarComp } from "../../components/Calendar";
import Calendar from "../Calendar/Calendar";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/Avatar";
import { useEffect, useState } from "react";
import axios from "axios";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from "dayjs/plugin/utc";

// import Appointment from "../Appointment/Appointment";

dayjs.extend(customParseFormat);
dayjs.extend(utc);

const ServiceWrapper = () => {
  // const navigate = useNavigate();
  const location = decodeURIComponent(useLocation().pathname);
  const [service, setService] = useState();

  // const handlerClick = (value) => {
  //   const currentDate = dayjs("00:00:00", "HH:mm:ss").toDate();
  //   const inputDate = dayjs.utc(value);
  //   if (inputDate < currentDate) {
  //     // console.log("no se puede acceder a una fecha anterior");
  //   } else {
  //     navigate(
  //       `/corte de pelo/schedules?date=${inputDate.format("YYYY-MM-DD")}`
  //     );
  //   }
  // };

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const { data } = await axios(`/service?name=cortedepelo`);
        setService(data);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    fetchingData();
  }, []);

  return (
    service !== undefined && (
      <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
        <div
          className={`${
            location.split("/")[3] !== "schedules"
              ? "lg:w-[50%]"
              : "hidden sm:block lg:w-[35%]"
          } lg:flex flex-col lg:h-full justify-between`}
        >
          <div className="lg:mt-10">
            <div className="pt-8 px-10 lg:flex flex-col items-start lg:px-4 ">
              <Avatar className="w-16 h-16 mx-auto lg:mx-0">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-slate-500"></AvatarFallback>
              </Avatar>
              <div className="font-medium mt-2 lg:flex flex-col items-start">
                <h1 className="text-md text-gray-500 font-semibold dark:text-gray-400">
                  Juan Da Rosa
                </h1>
                <div className="text-3xl font-bold">{service.name}</div>
              </div>
            </div>
            <div className="w-fit gap-4 text-center mt-4 mb-10 font-semibold px-10 lg:pl-4 lg:mx-0 mx-auto max-w-[340px] flex flex-col sm:flex-row sm:max-w-full lg:flex-col">
              <div className="flex gap-2 items-center">
                <svg
                  className="w-5 h-5 text-primary"
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
              <div className="flex gap-2 items-center sm:mt-0">
                <svg
                  className="w-5 h-5 text-primary"
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
                <p className="text-primary">{`Salta 172 - "Al Punto"`}</p>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] w-full mx-auto lg:flex justify-between text-sm hidden pb-[25px]">
            <Link to={"#"} className="text-[#0069FF] hover:underline pl-4">
              <span>Cookie settings</span>
            </Link>
            <Link to={"#"} className="hover:underline pr-4">
              Report abuse
            </Link>
          </div>
        </div>
        <Routes>
          <Route path={"/calendar/*"} element={<Calendar/>}/>
        </Routes>
        {/* <div
          className={`pt-6 w-full flex-col border-t lg:border-t-0 lg:border-l lg:h-full flex justify-start lg:w-[50%] flex-1`}
        >
          <div className="flex-1 flex flex-row">
            <div
              className={`${
                location.split("/")[2] === undefined
                  ? "w-full"
                  : "hidden sm:block w-[60%]"
              }`}
            >
              <div
                className={`${
                  location.split("/")[2] === undefined
                    ? "max-w-[400px]"
                    : "sm:max-w-full"
                } w-full mx-auto`}
              >
                <h3 className="ml-8 font-semibold text-xl pt-2 mb-5 mx-auto text-left">
                  Selecciona fecha y hora
                </h3>
                <CalendarComp
                  mode="single"
                  onSelect={handlerClick}
                  initialFocus
                  disabledDays={service.days}
                  className="max-w-[340px] sm:max-w-full sm:mx-[19px] mx-auto px-[10px] sm:px-0 mb-20"
                />
              </div>
            </div>
            <Routes>
              <Route path="/schedules" element={<Appointment />} />
            </Routes>
          </div>
          <div className="pt-4 max-w-[350px] w-full mx-auto flex justify-between text-sm lg:hidden pb-[24px]">
            <Link to={"#"} className="text-[#0069FF] hover:underline">
              <span>Cookie settings</span>
            </Link>
            <Link to={"#"} className="hover:underline">
              Report abuse
            </Link>
          </div>
        </div> */}
      </div>
    )
  );
};

export default ServiceWrapper;
