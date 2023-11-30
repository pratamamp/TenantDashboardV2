import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 960) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex w-full bg-[#F6F8F9] h-screen">
      {/* {showNav && <Sidebar showNav={showNav} />} */}
      <Sidebar />
      <div className="flex-auto">
        <Outlet />
      </div>
    </section>
  );
}

export default DashboardLayout;
