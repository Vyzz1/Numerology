import Layout from "../layout";
import Home from "../pages/Home";
import Reveal from "../pages/Reveal";
export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Reveal />,
        path: "reveal",
      },
    ],
  },
];
