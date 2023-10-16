import {
  ChevronDownIcon,
  PresentationChartBarIcon,
  HomeIcon,
  GlobeAltIcon,
  FolderIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <aside className="hidden w-full max-w-[20rem] p-4 bg-white lg:block  lg:h-screen">
      <div className="w-36 m-6">
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
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={1.5}
              className={`mx-auto h-4 w-4 transition-transform ${
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
              <ListItem>
                <ListItemPrefix>
                  <img
                    src="/icons/settingsicon.svg"
                    alt="setting-icon"
                    className="w-4"
                  />
                </ListItemPrefix>
                Settings
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
      <div className="absolute bottom-10 px-6">Profile</div>
    </aside>
  );
}

export default Sidebar;
