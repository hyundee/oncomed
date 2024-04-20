import { createBrowserRouter } from "react-router-dom";
import { Movie } from "./components/Movie";
import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Movie />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

export default router;
