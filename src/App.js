import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Rockets } from "./components/rockets/Rockets";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/rocket",
      element: <Rockets />,
    },
    // {
    //   path: "/user/:id",
    //   element: <UserListDetail />,
    // },
  ]);

  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
