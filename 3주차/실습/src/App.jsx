import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CustomButton from "./components/custom-button";
import Homepage from "./components/Homepage";
import Errorpage from "./components/Errorpage";
import Moviepage from "./components/Moviepage";
import RootLayout from "./layout/root-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "movies/:movieId",
        element: <Moviepage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <CustomButton />
      <p>-----------------------------------------------------</p>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
