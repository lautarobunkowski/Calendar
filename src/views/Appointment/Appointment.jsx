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
      console.log(data)
      setAppointments(data);
    };
    fetchingData();
  }, []);

  return (
    appointments.appointments && (
      <div className="my-0 mx-auto w-full h-auto relative text-center">
        <div className="top-0 fixed bg-white w-full z-10 border-b py-6">
          <h1 className="mt-0 mb-[5px] font-bold text-xl">
            {dayjs.utc(date).format("dddd")}
          </h1>
          <div className="mb-[10px]">
            {dayjs.utc(date).format("MMMM D, YYYY")}
          </div>
        </div>
        <div className="px-4 pt-4 mt-[115px]">
          <h2 className="mb-[5px] font-bold text-2xl">Selecciona un Turno</h2>
          <div className="pb-4">
            <p className="my-3 text-sm">
              Duración:
              {appointments.duration[1] !== "0"
                ? dayjs
                    .utc(appointments.duration, "HH:mm")
                    .format(" HH [hora y]")
                : null}
              {dayjs.utc(appointments.duration, "HH:mm").format(" mm [min]")}
            </p>
            <ul className="flex flex-col gap-2">
              {appointments.appointments.map((app, index) => {
                return (
                  <li key={`appointment-${index}`} className="flex group gap-x-[4%]">
                    <button className="transition-all duration-300 group-focus-within:w-[48%] w-full border h-[52px] border-[rgba(0,105,255,0.5)] hover:border-[rgba(0,105,255)] hover:border-2 text-[#0069FF] font-bold rounded-md group-focus-within:bg-[#666666] group-focus-within:text-white group-focus-within:border-none">
                      {app.time.slice(0, 5)}
                    </button>
                    <button className="transition-all duration-300 group-focus-within:w-[48%] w-0 hidden group-focus-within:block bg-[rgba(0,105,255)] text-white font-bold rounded-md">
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
