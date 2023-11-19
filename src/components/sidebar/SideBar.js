import React from "react";
import { Logo } from "../../icons/logo";
import { Rockets } from "../rockets/Rockets";
import { Dashboard } from "../dashboard/Dashboard";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "./style";

export const SideBar = () => {
  const location = useLocation();
  const menus = [
    { name: "Dashboard", path: "/", component: <Dashboard />, exact: true },
    { name: "Rockets", path: "/rocket", component: <Rockets /> },
  ];
  return (
    <Sidebar>
      <Logo />
      <ul>
        {menus.map((menu, index) => {
          return (
            <li key={index}>
              <Link
                to={menu.path}
                className={`${location.pathname == menu.path && "active"}`}
              >
                {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Sidebar>
  );
};
