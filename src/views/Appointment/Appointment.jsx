import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
  console.log(appointments);

  return (
    <div className="my-0 mx-auto w-full h-auto relative text-center">
      <div className="top-0 fixed bg-white w-full z-10 border-b py-6">
        <h1 className="mt-0 mb-[5px] font-bold text-xl">Friday</h1>
        <div className="mb-[10px]">February 16, 2024</div>
      </div>
      <div className="px-4 pt-4 mt-[115px]">
        <h2 className="mb-[5px] font-bold text-2xl">Select a Time</h2>
        <div className="pb-4">
          <p className="my-3 text-sm">Duration: {appointments.duration}</p>
          <ul className="flex flex-col gap-2">
            {appointments.appointments?.map((app, index) => {
              return (
                <li key={`appointment-${index}`}>
                  <button className="border h-[52px] w-full border-[#0069FF] text-[#0069FF] font-bold rounded-md">
                    {app.time.slice(0, 5)}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
