import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SidebarWithHeader from "./components/Layout";
import { ArtistsPage, Dashboard, ErrorPage, Profile, SongsPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarWithHeader />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/songs", element: <SongsPage /> },
      { path: "/artists", element: <ArtistsPage /> },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
