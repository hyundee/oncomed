import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Movie } from "./components/Movie";
import { MovieDetails } from "./components/MovieDetails";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "movie",
          element: <Movie />,
          children: [
            {
              path: "movie/:movieId",
              element: <MovieDetails />,
            },
          ],
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
