import { Button } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import AuthLayout from "./layout/authlayout";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot";
import RequiredLayout from "./layout/requiredlayout";
import Overview from "./pages/overview";
import Unauthorized from "./pages/unauthorized";

function App() {
  const ROLES = {
    Admin: 33001,
    User: 9083,
    Editor: 7909,
    Publisher: 8080,
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about" />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="log/in" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<ForgotPassword />} />
      </Route>
      <Route element={<RequiredLayout allowedRoles={[ROLES.Admin]} />}>
        <Route path="overview" element={<Overview />} />
      </Route>
      <Route path="unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}

function Home() {
  return <div>HomePage</div>;
}
export default App;
