
import { Home } from "./components/Home";
import { About } from "./components/pages/About";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/fetch-data',
    element: <About/>
  }
];

export default AppRoutes;
