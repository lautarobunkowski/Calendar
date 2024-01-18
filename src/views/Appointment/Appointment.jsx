import { useLocation } from "react-router-dom";

const Appointment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get("date");
  return <div></div>;
};

export default Appointment;
