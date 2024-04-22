import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useAuth } from "./context/authContext.jsx";

const BookingWrapper = lazy(
  async () => await import("./views/Client/BookingWrapper/BookingWrapper.jsx")
);
const Admin = lazy(async () => await import("./views/Admin/Home/Home.jsx"));
const NotFound = lazy(
  async () => await import("./views/NotFound/NotFound.jsx")
);
const Login = lazy(async () => await import("./views/Login/Login.jsx"));
const Landing = lazy(async () => await import("./views/Landing/Landing.jsx"));

const App = () => {
  const username = decodeURIComponent(useLocation().pathname).split("/")[1];
  const auth = useAuth();

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={`/login`} element={<Login />} />
          {auth.user && (
            <Route path={`/event_types/user/me`} element={<Admin />} />
          )}
          <Route path={`/${username}/*`} element={<BookingWrapper />} />
          <Route path={`/`} element={<Landing />} />
          <Route path={`/*`} element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
