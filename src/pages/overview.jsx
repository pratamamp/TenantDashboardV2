import {
  Typography,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";

function Overview() {
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="flex w-full bg-[#F6F8F9] h-screen">
      <Sidebar />
      <div className="flex-auto p-3">
        <Card className="mt-6 w-full" color="white">
          <CardBody></CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Overview;
