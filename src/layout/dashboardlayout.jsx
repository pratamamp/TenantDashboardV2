import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

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
      {showNav && <Sidebar />}
      <div className="flex-auto">
        <div className="flex flex-col h-screen bg-gray-200">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default withAuthenticationRequired(DashboardLayout, {
  onRedirecting: () => <p>Loading...</p>,
});
