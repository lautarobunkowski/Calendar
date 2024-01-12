import { renderRoutes, routes } from "./routes/Routes";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen min-w-full">
      <Routes>{renderRoutes(routes)}</Routes>
    </div>
  );
};

export default App;
