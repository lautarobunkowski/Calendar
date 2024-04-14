import { useParams } from "react-router-dom";
import ProfileForm from "./Form";

const AppointmentDetails = () => {
  const { appointmentDate } = useParams();

  return (
    <div className="flex-1 text-left py-[30px] px-[30px] border-l h-full">
      <h1 className="text-xl leading-[1.2] font-semibold w-fit mb-[15px]">
        Ingrese detalles
      </h1>
      <ProfileForm appointmentDate={appointmentDate} />
    </div>
  );
};

export default AppointmentDetails;
