import { createHashRouter } from "react-router-dom";
import { Movie } from "./components/Movie";
import App from "./App";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Movie />,
      },
    ],
  },
]);

export default router;
