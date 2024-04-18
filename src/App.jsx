import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

const BookingWrapper = lazy(
  async () => await import("./views/BookingWrapper/BookingWrapper.jsx")
);
const Admin = lazy(async () => await import("./views/Admin/Admin.jsx"));
const NotFound = lazy(
  async () => await import("./views/NotFound/NotFound.jsx")
);

const App = () => {
  const username = decodeURIComponent(useLocation().pathname).split("/")[1];

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={`/admin/*`} element={<Admin />} />
          <Route path={`/${username}/*`} element={<BookingWrapper />} />
          <Route path={`/*`} element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
