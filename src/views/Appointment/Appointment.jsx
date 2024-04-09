import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(utc);

const Appointment = () => {
  const location = useLocation();
  const [appointments, setAppointments] = useState({});
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get("date");

  useEffect(() => {
    const fetchingData = async () => {
      const { data } = await axios(
        `/appointments?service=${location.pathname.split("/")[1]}&date=${date}`
      );
      setAppointments(data);
    };
    fetchingData();
  }, []);

  return (
    appointments.appointments && (
      <div className="my-0 mx-auto w-full relative text-center sm:w-[40%] lg:w-[40%] overflow-hidden flex flex-col items-center px-4 sm:px-0">
        <div className="top-0 fixed sm:relative bg-white w-full z-10 border-b sm:border-none py-6 sm:hidden">
          <h1 className="mt-0 mb-[5px] font-bold text-xl">
            {dayjs.utc(date).format("dddd")}
          </h1>
          <div className="mb-[10px]">
            {dayjs.utc(date).format("MMMM D, YYYY")}
          </div>
        </div>
        <div className="hidden sm:block w-full mt-[54px] mb-8">
          <h3 className="text-left">{dayjs.utc(date).format("dddd, MMMM D")}</h3>
        </div>
        <div className="mt-[115px] sm:mt-0 w-full sm:pr-[24px] sm:pb-[15px] flex-1 basis-[100px] overflow-auto">
          <h2 className="mb-[5px] font-bold text-2xl sm:hidden">
            Selecciona un Turno
          </h2>
          <div className="pb-4 mx-[10px]">
            <p className="my-3 text-sm sm:hidden">
              Duración:
              {appointments.duration[1] !== "0"
                ? dayjs
                    .utc(appointments.duration, "HH:mm")
                    .format(" HH [hora y]")
                : null}
              {dayjs.utc(appointments.duration, "HH:mm").format(" mm [min]")}
            </p>
            <ul className="flex flex-col gap-[10px]">
              {appointments.appointments.map((app, index) => {
                return (
                  <li
                    key={`appointment-${index}`}
                    className="flex group focus-within:gap-x-[4%] hover:border-[rgba(0,105,255)]"
                  >
                    <button className="transition-all duration-300 group-focus-within:duration-300 group-focus-within:w-[48%] w-full overflow-hidden border h-[52px] border-[rgba(0,105,255,0.5)] hover:border-[rgba(0,105,255)] hover:border-2 text-[#0069FF] font-bold rounded-md group-focus-within:bg-[#666666] group-focus-within:text-white group-focus-within:border-none hover:duration-0">
                      {app.time.slice(0, 5)}
                    </button>
                    <button className="group-focus-within:transition-all group-focus-within:duration-300 group-focus-within:w-[48%] w-0 bg-[rgba(0,105,255)] overflow-hidden text-white font-bold rounded-md">
                      siguiente
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
