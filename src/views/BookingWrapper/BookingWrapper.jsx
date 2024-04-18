import { Routes, Route, useLocation } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import AppointmentDetails from "../AppointmentDetails/AppointmentDetails";
import SidePanel from "../../components/SidePanel";
import Home from "../Home/Home";
import Confirmation from "../Confirmation/Confirmation";
import BackButon from "../../components/BackButton";

import { useEffect } from "react";
import axios from "axios";
import useStore from "../../zustand/store";

const ServiceWrapper = () => {
  const location = decodeURIComponent(useLocation().pathname);
  const serviceType = decodeURIComponent(useLocation().pathname).split("/")[2];
  const setService = useStore((state) => state.setService);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/service?name=${serviceType}`);
        setService(data);
      } catch (error) {
        console.error("Error al obtener los datos del servicio:", error);
      }
    };
    fetchData();
  }, [serviceType, setService]);

  return (
    <div className="min-h-screen min-w-full h-full bg-[#FBFCFD] sm:pt-16 flex sm:px-[5%] flex-col">
      <div
        className={`${
          location.split("/")[location.split("/").length - 1] !== "calendar"
            ? "lg:max-w-[1060px]"
            : "lg:max-w-[800px]"
        } sm:mb-8 relative sm:border max-w-[680px] sm:w-[95%] w-full mx-auto sm:shadow-md sm:rounded-lg lg:flex bg-white transition duration-300 min-h-[700px] h-full`}
      >
        <div className="fixed sm:absolute z-50 -right-[5px] -top-[5px] overflow-hidden w-[105px] h-[105px] hover:scale-105 transition-all group">
          <div className="bg-[#505960] relative w-[160px] text-white top-[21px] -left-[11px] rotate-45 text-center leading-[1.2] pt-[9px] pb-[6px] shadow-md group-hover:bg-[#40474c] transition-all">
            <p className="uppercase font-bold text-[8px]">powered by</p>
            <p className="font-bold text-[14px]">Lautly</p>
          </div>
        </div>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route
            path={"corte de pelo/calendar/*"}
            element={
              <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
                <BackButon />
                <SidePanel />
                <Calendar />
              </div>
            }
          />
          <Route
            path={"corte de pelo/details/:appointmentDate"}
            element={
              <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
                <BackButon />
                <SidePanel />
                <AppointmentDetails />
              </div>
            }
          />
          <Route
            path={"corte de pelo/invitees/:appointmentId"}
            element={<Confirmation />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default ServiceWrapper;
