import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import { useAuth } from "./context/authContext.jsx";
import Loader from "./components/Loader/Loader.jsx";

//Client
const BookingWrapper = lazy(
  async () => await import("./views/Client/BookingWrapper/BookingWrapper.jsx")
);
const NotFound = lazy(
  async () => await import("./views/NotFound/NotFound.jsx")
);
const Login = lazy(async () => await import("./views/Login/Login.jsx"));
const Landing = lazy(async () => await import("./views/Landing/Landing.jsx"));

//Admin
const DashboardWrapper = lazy(
  async () => await import("./views/Admin/DashboardWrapper.jsx")
);
const EventTypes = lazy(
  async () => await import("./views/Admin/EventTypes/EventTypes.jsx")
);

const App = () => {
  const auth = useAuth();
  const [isAuth, setIsAuth] = useState()

  useEffect(() => {
    console.log(auth)
    if(auth.user){
      setIsAuth(true)
    }
  }, [auth])
  

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {
          isAuth ? (
            <Routes>
              <Route path={`/login`} element={<Login />} />
              <Route
                path={`/event_types/user/me`}
                element={
                  <DashboardWrapper>
                <EventTypes />
                  </DashboardWrapper>
                }
              />
              <Route
                path={`/app/:setting/user/me`}
                element={<DashboardWrapper />}
              />
            </Routes>
          ) : (
            <Routes>
              <Route path={`/:username/*`} element={<BookingWrapper />} />
              <Route path={`/`} element={<Landing />} />
              <Route path={`/*`} element={<NotFound />} />
            </Routes>
          )
        }
      </Suspense>
    </div>
  );
};

export default App;
