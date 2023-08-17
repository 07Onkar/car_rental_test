
import { Hero } from "./components/Hero";
import { About } from "./pages/About";

const AppRoutes = [
  {
    index: true,
    element: <Hero />
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
