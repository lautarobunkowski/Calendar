import { Routes, Route, useLocation } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import AppointmentDetails from "../AppointmentDetails/AppointmentDetails";
import SidePanel from "../../components/SidePanel";
import Confirmation from "../Confirmation/Confirmation";
import BackButon from "../../components/BackButton";

import { useEffect } from "react";
import axios from "axios";
import useStore from "../../zustand/store";


const ServiceWrapper = () => {
  const serviceType = decodeURIComponent(useLocation().pathname).split("/")[2];
  const setService = useStore((state) => state.setService);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/service?name=${serviceType}`
        );
        setService(data);
      } catch (error) {
        console.error("Error al obtener los datos del servicio:", error);
      }
    };
    fetchData();
  }, [serviceType, setService]);
  return (
    <Routes>
      <Route
        path={"/calendar/*"}
        element={
          <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
            <BackButon />
            <SidePanel />
            <Calendar />
          </div>
        }
      />
      <Route
        path={"/details/:appointmentDate"}
        element={
          <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
            <BackButon />
            <SidePanel />
            <AppointmentDetails />
          </div>
        }
      />
      <Route path={"/invitees/:appointmentId"} element={<Confirmation />} />
    </Routes>
  );
};

export default ServiceWrapper;
