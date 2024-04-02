import { useNavigate } from "react-router-dom";
import { Calendar as CalendarComp } from "../../components/Calendar";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/Avatar";
import { useEffect, useState } from "react";
import axios from "axios";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(utc);

const Calendar = () => {
  const navigate = useNavigate();
  const [service, setService] = useState()

  const handlerClick = (value) => {
    const currentDate = dayjs("00:00:00", "HH:mm:ss").toDate();
    const inputDate = dayjs.utc(value);
    if (inputDate < currentDate) {
      console.log("no se puede acceder a una fecha anterior");
    } else {
      navigate(
        `/corte%de%pelo/schedule?date=${inputDate.format("YYYY-MM-DD")}`
      );
    }
  };
  console.log(service)

  useEffect(() => {
    const fetchingData = async() => {
      try {
        const {data} = await axios(`/service?name=cortedepelo`)
        setService(data)
      } catch (error) {
        console.log({error: error.message})
      }
    }
    fetchingData()
  }, [])
  

  return (
    service !== undefined && 
    <div className="w-full flex flex-col items-center">
      <div className="pt-8 px-10">
        <Avatar className="w-16 h-16 mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-slate-500"></AvatarFallback>
        </Avatar>
        <div className="font-medium mt-2">
          <h1 className="text-md text-gray-500 font-semibold dark:text-gray-400">
            Juan Da Rosa
          </h1>
          <div className="text-2xl font-bold">{service.name}</div>
        </div>
      </div>
      <div className=" w-full text-left mt-4 mb-10 font-semibold px-10 max-w-[340px]">
        <div className="flex w-full gap-2 items-center">
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
        <div className="flex w-full gap-2 mt-4 items-center">
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
      <div className="w-full border-t">
        <div className="w-fit mx-auto">
          <h3 className="font-semibold text-xl my-4">Selecciona un dia</h3>
          <CalendarComp mode="single" onSelect={handlerClick} initialFocus disabledDays={service.days}/>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
