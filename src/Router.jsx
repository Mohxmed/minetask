import { createBrowserRouter, RouterProvider } from "react-router";
import LandingRoutes from "./routes/LandingRoutes";

const router = createBrowserRouter([LandingRoutes]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
