import { Calendar as CalendarComp } from "../../../components/Calendar";
import {
  useLocation,
  useNavigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Appointment from "../Appointment/Appointment";
import { useState } from "react";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(utc);

const Calendar = () => {
  const navigate = useNavigate();
  const location = decodeURIComponent(useLocation().pathname);

  const [selectDate, setSelectDate] = useState();

  const handlerClick = (value) => {
    const currentDate = dayjs("00:00:00", "HH:mm:ss").toDate();
    const inputDate = dayjs.utc(value);
    if (inputDate < currentDate) {
      // console.log("no se puede acceder a una fecha anterior");
    } else {
      setSelectDate(value);
      navigate(`schedules?date=${inputDate.format("YYYY-MM-DD")}`);
    }
  };

  return (
    <div
      className={`pt-6 w-full flex-col border-t lg:border-t-0 lg:border-l lg:h-full flex justify-start lg:w-[50%] flex-1 `}
    >
      <div className="flex-1 flex flex-row">
        <div
          className={`${
            location.split("/")[location.split("/").length - 1] !== "calendar"
              ? "hidden sm:block w-[60%]"
              : "w-full"
          }`}
        >
          <div
            className={`${
              location.split("/")[location.split("/").length - 1] !== "calendar"
                ? "sm:max-w-full"
                : "max-w-[400px]"
            } w-full mx-auto`}
          >
            <h3 className="ml-8 font-semibold text-xl pt-2 mb-5 mx-auto text-left">
              Selecciona fecha y hora
            </h3>
            <CalendarComp
              selected={selectDate}
              mode="single"
              onSelect={handlerClick}
              initialFocus
              // disabledDays={service.days}
              className="max-w-[340px] sm:max-w-full sm:mx-[19px] mx-auto px-[10px] sm:px-0 mb-20"
            />
          </div>
        </div>
        <Routes>
          <Route path="/schedules" element={<Appointment />} />
          <Route path="*" element={<Appointment />} />
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
    </div>
  );
};

export default Calendar;
