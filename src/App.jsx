import { Button } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import AuthLayout from "./layout/authlayout";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot";
import RequiredLayout from "./layout/requiredlayout";
import Overview from "./pages/overview";
import Unauthorized from "./pages/unauthorized";
import DashboardLayout from "./layout/dashboardlayout";
import Member from "./pages/member";
import Application from "./pages/applications";
import License from "./pages/license";
import Home from "./pages/home";
import { useAuth0 } from "@auth0/auth0-react";
import Setting from "./pages/setting";

function App() {
  const ROLES = {
    Admin: 33001,
    User: 9083,
    Editor: 7909,
    Publisher: 8080,
  };
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message} </div>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/about" />
    //   <Route path="auth" element={<AuthLayout />}>
    //     <Route path="log/in" element={<Login />} />
    //     <Route path="register" element={<Register />} />
    //     <Route path="forgot" element={<ForgotPassword />} />
    //   </Route>
    //   <Route element={<DashboardLayout />}>
    //     <Route element={<RequiredLayout allowedRoles={[ROLES.Admin]} />}>
    //       <Route path="overview" element={<Overview />} />
    //     </Route>
    //     <Route
    //       element={
    //         <RequiredLayout allowedRoles={[ROLES.Admin, ROLES.Editor]} />
    //       }
    //     >
    //       <Route path="member" element={<Member />} />
    //     </Route>
    //     <Route element={<RequiredLayout allowedRoles={[ROLES.Admin]} />}>
    //       <Route path="application" element={<Application />} />
    //     </Route>
    //     <Route
    //       element={
    //         <RequiredLayout allowedRoles={[ROLES.Admin, ROLES.Editor]} />
    //       }
    //     >
    //       <Route path="license" element={<License />} />
    //     </Route>
    //   </Route>
    //   <Route path="unauthorized" element={<Unauthorized />} />
    // </Routes>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<DashboardLayout />}>
        <Route path="overview" element={<Overview />} />
        <Route path="application" element={<Application />} />
        <Route path="member" element={<Member />} />
        <Route path="license" element={<License />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;
