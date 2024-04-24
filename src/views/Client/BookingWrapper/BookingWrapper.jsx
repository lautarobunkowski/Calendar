import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../../../zustand/store";

import Calendar from "../Calendar/Calendar";
import AppointmentDetails from "../AppointmentDetails/AppointmentDetails";
import SidePanel from "../../../components/SidePanel";
import Home from "../Home/Home";
import Confirmation from "../Confirmation/Confirmation";
import BackButon from "../../../components/BackButton";

import NotFound from "../../NotFound/NotFound";
import Loader from "../../../components/Loader/Loader";

const ServiceWrapper = () => {
  const navigate = useNavigate();
  const location = decodeURIComponent(useLocation().pathname);
  const serviceUserUrl = decodeURIComponent(useLocation().pathname).split(
    "/"
  )[1];

  const serviceUser = useStore((state) => state.serviceUser);
  const setServiceUser = useStore((state) => state.setServiceUser);
  const [userFound, setUserFound] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/user?name=${serviceUserUrl}`);
        setServiceUser(data);
      } catch (error) {
        if (error.response.status === 404) {
          setUserFound(false);
        }
      }
    };
    fetchData();
  }, [serviceUserUrl, setServiceUser, navigate]);

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
        {!userFound && <NotFound />}
        {!serviceUser && userFound ? (
          <Loader />
        ) : (
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route
              path={`:service/calendar/*`}
              element={
                <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
                  <BackButon />
                  <SidePanel />
                  <Calendar />
                </div>
              }
            />
            <Route
              path={`:service/details/:appointmentDate`}
              element={
                <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
                  <BackButon />
                  <SidePanel />
                  <AppointmentDetails />
                </div>
              }
            />
            <Route
              path={`:service/invitees/:appointmentId`}
              element={<Confirmation />}
            />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default ServiceWrapper;
