import { renderRoutes, routes } from "./routes/index";
import { Routes } from "react-router-dom";
import { Suspense } from "react";
import BackButton from "./components/BackButton";

const App = () => {
  return (
    <div className="min-h-screen min-w-full">
      <BackButton />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </div>
  );
};

export default App;
