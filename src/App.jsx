import { renderRoutes, routes } from "./routes/Routes";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {
        renderRoutes(routes)
      }
    </Routes>
  )
}

export default App
