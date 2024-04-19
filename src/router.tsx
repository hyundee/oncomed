import { createBrowserRouter } from "react-router-dom";
import { Movie } from "./components/Movie";
// import { MovieDetails } from "./components/MovieDetails";
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
          // children: [
          //   {
          //     path: ":movieId",
          //     element: <MovieDetails />,
          //   },
          // ],
        },
      ],
      // errorElement: <Error />,
    },
  ],
  {
    basename: "/",
  }
);

export default router;
