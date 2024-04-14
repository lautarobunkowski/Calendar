import { Routes, Route } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import AppointmentDetails from "../AppointmentDetails/AppointmentDetails";
import SidePanel from "../../components/SidePanel";
import Confirmation from "../Confirmation/Confirmation";

// import dayjs from "dayjs";
// import customParseFormat from "dayjs/plugin/customParseFormat.js";
// import utc from "dayjs/plugin/utc";

// dayjs.extend(customParseFormat);
// dayjs.extend(utc);

const ServiceWrapper = () => {
  return (
    <Routes>
      <Route
        path={"/calendar/*"}
        element={
          <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
            <SidePanel />
            <Calendar />
          </div>
        }
      />
      <Route
        path={"/details/:appointmentDate"}
        element={
          <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
            <SidePanel />
            <AppointmentDetails />
          </div>
        }
      />
      {/* :appointmentId */}
      <Route path={"/invitees"} element={<Confirmation />} />
    </Routes>
  );
};

export default ServiceWrapper;
