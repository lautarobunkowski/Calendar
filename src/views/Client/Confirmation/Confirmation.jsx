import { Button } from "../../../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);

const Confirmation = () => {
  const { appointmentId } = useParams();
  const [appointmentDetails, setAppointmentDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(`appointment/${appointmentId}`);
        setAppointmentDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [appointmentId]);

  return (
    appointmentDetails && (
      <div className="w-full flex items-center justify-center">
        <div className="max-w-[450px] py-[30px] mx-auto w-full">
          <h1 className="text-xl font-bold flex items-center justify-center">
            <span className="w-5 h-5 text-[#038164] mr-3">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.012 10.012 0 0 0 10 0Zm4.884 8.384-5.5 5.5a1.251 1.251 0 0 1-1.768 0l-2.5-2.5a1.25 1.25 0 0 1 1.768-1.768L8.5 11.232l4.616-4.616a1.25 1.25 0 1 1 1.768 1.768Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Tu cita está agendada
          </h1>
          <div className="w-full pt-4">
            <p>
              Se ha enviado una invitación de calendario a su dirección de
              correo electrónico.
            </p>
            <Button
              variant={"outline"}
              className="min-h-[30px] py-1 px-3 my-4 rounded-[44px] border-black font-light text-black"
            >
              <span className="flex items-center gap-1">
                Abrir Invitación
                <span className="w-4 h-4 flex">
                  <svg
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <path
                      d="M4 .5H1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6M7 .5h2.5V3M9.5.5 5 5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </span>
            </Button>
          </div>
          <div className="p-5 w-full rounded-lg border border-[#CCCCCC]">
            <div className="mb-3 flex items-center text-left">
              <h2 className="text-[#1A1A1A] text-xl font-bold">
                {appointmentDetails.Service.name}
              </h2>
            </div>
            <div className="mb-3 flex items-center text-left font-bold text-[#1A1A1A99]">
              <span className="w-5 h-5 mr-2">
                <svg
                  data-id="details-item-icon"
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <path
                    d="M2.75 2.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 1 0-4.5 0ZM9.244 9.5a4.5 4.5 0 0 0-8.488 0Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span>{appointmentDetails.User.name}</span>
            </div>
            <div className="mb-3 flex items-center text-left font-bold text-[#1A1A1A99]">
              <span className="w-5 h-5 mr-2">
                <svg
                  data-id="details-item-icon"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 0.999512C6 0.447227 5.55229 -0.000488281 5 -0.000488281C4.44772 -0.000488281 4 0.447227 4 0.999512V1.99951H3C2.20435 1.99951 1.44129 2.31558 0.87868 2.87819C0.316071 3.4408 0 4.20386 0 4.99951V7.99951V16.9995C0 17.7952 0.316071 18.5582 0.87868 19.1208C1.44129 19.6834 2.20435 19.9995 3 19.9995H17C17.7957 19.9995 18.5587 19.6834 19.1213 19.1208C19.6839 18.5582 20 17.7952 20 16.9995V7.99951V4.99951C20 4.20386 19.6839 3.4408 19.1213 2.87819C18.5587 2.31558 17.7957 1.99951 17 1.99951H16V0.999512C16 0.447227 15.5523 -0.000488281 15 -0.000488281C14.4477 -0.000488281 14 0.447227 14 0.999512V1.99951H6V0.999512ZM18 6.99951V4.99951C18 4.7343 17.8946 4.47994 17.7071 4.29241C17.5196 4.10487 17.2652 3.99951 17 3.99951H15.001L15 3.99951L14.999 3.99951H5.00099L5 3.99951L4.99901 3.99951H3C2.73478 3.99951 2.48043 4.10487 2.29289 4.29241C2.10536 4.47994 2 4.7343 2 4.99951V6.99951H18ZM2 8.99951H18V16.9995C18 17.2647 17.8946 17.5191 17.7071 17.7066C17.5196 17.8942 17.2652 17.9995 17 17.9995H3C2.73478 17.9995 2.48043 17.8942 2.29289 17.7066C2.10536 17.5191 2 17.2647 2 16.9995V8.99951Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span>
                {dayjs(appointmentDetails.time, "HH:mm:ss").format("HH:mm")} -{" "}
                {dayjs(`${appointmentDetails.time}`, "HH:mm:ss")
                  .add(
                    dayjs(
                      appointmentDetails.Service.duration,
                      "HH:mm:ss"
                    ).format("mm"),
                    "minutes"
                  )
                  .format("HH:mm")}
                {", "}
                {dayjs(`${appointmentDetails.date}`, "YYYY-MM-DD").format(
                  "dddd, MMMM D, YYYY"
                )}
              </span>
            </div>
            {/* <div className="mb-3 flex items-center text-left font-bold text-[#1A1A1A99]">
            <span className="w-5 h-5 mr-2">
              <svg
                data-id="details-item-icon"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  d="M.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M.846 6.731h1.212a1.212 1.212 0 0 0 1.211-1.212V4.481a1.212 1.212 0 0 1 1.212-1.212 1.211 1.211 0 0 0 1.211-1.211V.553M9.5 4.929a2.469 2.469 0 0 0-1.117-.275H6.9a1.212 1.212 0 1 0 0 2.423.865.865 0 0 1 .865.865v.605"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span>Buenos Aires Time</span>
          </div> */}
            <div className="flex items-center text-left font-bold text-[#1A1A1A99]">
              <span className="w-5 h-5 mr-2">
                <svg
                  data-testid="location-marker-icon"
                  data-id="details-item-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 10"
                  role="img"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 3.5c0 2.5-3 6-3 6S2 6 2 3.5a3 3 0 1 1 6 0v0Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    d="M5 4a.5.5 0 0 1 0-1M5 4a.5.5 0 0 0 0-1"
                  ></path>
                </svg>
              </span>
              <span>{appointmentDetails.Service.location}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Confirmation;
