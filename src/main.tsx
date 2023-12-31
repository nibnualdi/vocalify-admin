import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SidebarWithHeader from "./components/Layout";
import { AddANewSong, ArtistDetail, ArtistsPage, Dashboard, ErrorPage, Profile, SongsPage } from "./pages";
import { store } from "./redux/store";
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarWithHeader />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/songs", element: <SongsPage /> },
      { path: "/artists", element: <ArtistsPage /> },
      { path: "/artist/:id", element: <ArtistDetail /> },
      { path: "/songs/new", element: <AddANewSong /> },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
