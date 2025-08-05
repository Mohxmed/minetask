import { Outlet } from "react-router";
import Home from "../pages/landing/Home";

const LandingRoutes = {
  name: "landing",
  path: "/",
  element: (
    <>
      <Outlet />
    </>
  ),
  children: [
    { index: true, element: <Home /> },
    { path: "about", element: <h1>About Page</h1> },
    { path: "faq", element: <h1>FAQ Page</h1> },
    { path: "contribute", element: <h1>Contribute Page</h1> },
  ],
};

export default LandingRoutes;
