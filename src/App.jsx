import { renderRoutes, routes } from "./routes/index";
import { Routes } from "react-router-dom";
import { Suspense } from "react";
import BackButton from "./components/BackButton";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = decodeURIComponent(useLocation().pathname);

  return (
    <div className="min-h-screen min-w-full h-full bg-[#FBFCFD] sm:pt-16 flex sm:px-[5%] flex-col">
      <div
        className={`${
          location.split("/")[3] === "schedules"
            ? "lg:max-w-[1060px]"
            : "lg:max-w-[800px]"
        } sm:mb-8 relative sm:border max-w-[680px] sm:w-[95%] w-full mx-auto sm:shadow-md sm:rounded-lg lg:flex bg-white transition duration-300 min-h-[700px] h-full`}
      >
        <BackButton />
        <div className="fixed sm:absolute z-50 -right-[5px] -top-[5px] overflow-hidden w-[105px] h-[105px]">
          <div className="bg-[#505960] relative w-[160px] text-white top-[21px] -left-[11px] rotate-45 text-center leading-[1.2] pt-[9px] pb-[6px] shadow-md">
            <p className="uppercase font-bold text-[8px]">powered by</p>
            <p className="font-bold text-[14px]">Lautly</p>
          </div>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>{renderRoutes(routes)}</Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
