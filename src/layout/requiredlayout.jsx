import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequiredLayout({ allowedRoles }) {
  const [auth, setAuth] = useState({
    roles: [33001],
    accessToken: "$#849859594849",
  });
  const location = useLocation();

  useEffect(() => {
    console.log("page permission");
  }, []);

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="auth/log/in" state={{ from: location }} replace />
  );
}

export default RequiredLayout;
