import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Frame625038 from "pages/Frame625038";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "frame625038",
      element: <Frame625038 />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
