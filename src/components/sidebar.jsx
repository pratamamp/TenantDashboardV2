import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPowerOff, FaChevronDown, FaCog } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

function Sidebar() {
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);
  const { logout } = useAuth0();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-screen rounded-none w-full max-w-[20rem] p-4 shadow-xl shadow-blue-700/50">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img
          src="/Esriindologo.svg"
          alt="logo-esri"
          className="max-w-full h-auto align-middle"
        />
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <img src="/icons/homeicon.svg" alt="home-icon" className="w-4" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <img
              src="/icons/contenticon.svg"
              alt="content-icon"
              className="w-4"
            />
          </ListItemPrefix>
          Content
        </ListItem>

        <Accordion
          open={open === 0}
          icon={
            <FaChevronDown
              className={`mx-auto h-4 w-4 transition-transform text-gray-500 ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <img
                  src="/icons/globeicon.svg"
                  alt="organization-icon"
                  className="w-4"
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Organization
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="px-3">
              <Link to="overview">
                <ListItem>
                  <ListItemPrefix>
                    <img
                      src="/icons/overviewicon.svg"
                      alt="overview-icon"
                      className="w-4"
                    />
                  </ListItemPrefix>
                  Overview
                </ListItem>
              </Link>
              <Link to="member">
                <ListItem>
                  <ListItemPrefix>
                    <img
                      src="/icons/peopleicon.svg"
                      alt="member-icon"
                      className="w-4"
                    />
                  </ListItemPrefix>
                  Member
                </ListItem>
              </Link>
              <Link to="application">
                <ListItem>
                  <ListItemPrefix>
                    <img
                      src="/icons/gridicon.svg"
                      alt="application-icon"
                      className="w-4"
                    />
                  </ListItemPrefix>
                  Application
                </ListItem>
              </Link>
              <Link to="license">
                <ListItem>
                  <ListItemPrefix>
                    <img
                      src="/icons/licenseicon.svg"
                      alt="license-icon"
                      className="w-4"
                    />
                  </ListItemPrefix>
                  License
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <FaCog className="w-4 h-4 text-gray-400" />
          </ListItemPrefix>
          Setting
        </ListItem>
        <ListItem onClick={() => logout()}>
          <ListItemPrefix>
            <FaPowerOff className="w-4 h-4 text-gray-400" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>

      <div className="absolute bottom-0 left-0 h-28 w-full flex  mx-2.5 items-center space-x-2">
        <div className="rounded-full bg-blue-900 w-12 h-12 flex justify-center items-center">
          <p className="text-white font-bold">EI</p>
        </div>
        <div className="-space-y-2">
          <Typography color="gray" variant="h6" className="font-body">
            Esri Indonesia
          </Typography>
          <Typography color="blue-gray" className="font-extralight">
            esriid
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default Sidebar;
