import React from "react";
import { Outlet } from "react-router-dom";
import TeacherSidebar from "../Sidebar";
import { useSelector } from "react-redux";
import { commonSelector } from "../../../store/features/common/commonSlice";

function TeacherLayout() {
  const { isSidebarOpen } = useSelector(commonSelector);

  return (
    <div className="h-screen w-screen flex">
      <aside
        className={`${
          isSidebarOpen ? "w-52" : "w-15"
        } h-full border-r transition-all`}>
        <TeacherSidebar />
      </aside>

      <main className="flex-1 overflow-auto">
        <nav className="h-16 bg-blue-500 top-0 sticky">header</nav>
        <div className="p-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default TeacherLayout;
