import { Outlet, useLocation, useParams } from "react-router-dom";
import logo from "../assets/EsriIndologo.svg";

function AuthLayout() {
  const location = useLocation();
  const pathname = location.pathname;
  const routeTitle = [
    {
      route: "/auth/log/in",
      name: "login",
      title: "Log in",
    },
    {
      route: "/auth/register",
      name: "register",
      title: "Register",
    },
    {
      route: "/auth/forgot",
      name: "forgotpassword",
      title: "Forgot Password",
    },
    {
      route: "/auth/reset",
      name: "resetpassword",
      title: "Reset Password",
    },
  ];

  return (
    <div className="items-center justify-center flex h-screen">
      <section className="w-2/3 max-w-md rounded-lg border overflow-clip shadow-sm">
        {pathname.slice(pathname.indexOf("auth/") + 5) === "log/in" ||
        pathname.slice(pathname.indexOf("auth/") + 5) === "register" ? (
          <div className="h-20 bg-primary flex justify-between items-center px-6">
            <h3 className="text-white/80 text-lg">
              {
                routeTitle.find((item) => item.route === location.pathname)
                  .title
              }
            </h3>
            <img src={logo} alt="esriindonesia" className="w-20 h-auto" />
          </div>
        ) : (
          <>
            <h2>blue</h2>
          </>
        )}

        <Outlet />
      </section>
    </div>
  );
}

export default AuthLayout;
