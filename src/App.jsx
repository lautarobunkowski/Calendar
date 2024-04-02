import { renderRoutes, routes } from "./routes/index";
import { Routes } from "react-router-dom";
import { Suspense } from "react";
import BackButton from "./components/BackButton";

const App = () => {
  return (
    <div className="min-h-screen min-w-full bg-[#FBFCFD] sm:pt-16">
      <div className="sm:mb-8 relative sm:border max-w-[680px] lg:max-w-[800px] lg:min-h-[700px] sm:w-[95%] mx-auto sm:shadow-md sm:rounded-lg lg:flex bg-white">
      <BackButton />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
      </div>
    </div>
  );
};

export default App;
