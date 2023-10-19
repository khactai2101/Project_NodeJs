import React, { useEffect, useState } from "react";
import "flowbite";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SideBarItem } from "../../Utils/SidebarItem";
import { getOneUser } from "../../../../API/user";
import logo from "../../../../assets/images/logo-kyo.png";

const Sidebar = () => {
  const getData = localStorage.getItem("asscessToken");
  // const isCheck = JSON.parse(getData || "");

  const [users, setUsers] = useState<any>([]);
  // const [userEmail, setUserEmail] = useState<string>("");
  const [isCheck, setIsCheck] = useState(getData);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("asscessToken");
    setIsCheck(null);
  };

  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {SideBarItem.map((item) => {
              return (
                <>
                  <li>
                    <NavLink
                      to={`/admin${item.path}`}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="ml-3 flex gap-1 items-center text-center font-bold text-l">
                        {item.icon}
                        {item.title}
                      </span>
                    </NavLink>
                  </li>
                </>
              );
            })}
            <li className="font-bold ml-5 flex gap-1 text-center">
              <i className="fa-solid fa-right-from-bracket"></i>
              <NavLink to={"/login"} onClick={handleLogout}>
                Đăng xuất
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      {/* <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Table />
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
