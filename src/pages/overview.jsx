import {
  Typography,
  Card,
  CardBody,
  Button,
  CardHeader,
  Progress,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

function Overview() {
  return (
    <>
      {/* content */}
      <Typography variant="h3" color="gray" className="mt-8 px-2 lg:px-10 ">
        Overview
      </Typography>
      <div className="flex-auto overflow-auto space-y-5 lg:space-y-0 p-10 lg:py-14 lg:grid grid-cols-6 grid-rows-4 grid-flow-col gap-6">
        <Card
          variant="gradient"
          color="white"
          className="row-span-4 lg:col-span-2 overflow-hidden"
        >
          <CardHeader
            shadow={false}
            color="transparent"
            floated={false}
            className="m-0 rounded-none overflow-visible"
          >
            <img src="/imgplanet.png" alt="" className="w-full" />
            <div className="rounded-full w-[23%] aspect-square flex items-center justify-center bg-blue-500 -bottom-[20%] left-1/2 absolute -translate-x-1/2">
              <Typography variant="h1" color="white">
                EI
              </Typography>
            </div>
          </CardHeader>
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mt-10 text-center"
            >
              Esri Indonesia
            </Typography>
            <Typography variant="h6" color="blue-gray" className="text-center">
              esriid
            </Typography>

            <ul className="space-y-2 mt-10">
              <li className="flex justify-between">
                <Typography variant="h6" color="blue-gray">
                  Subscription ID
                </Typography>
                <Typography variant="h6" color="blue-gray">
                  XXXXX-XXXX-XXX
                </Typography>
              </li>
              <li className="flex justify-between">
                <Typography variant="h6" color="blue-gray">
                  Created
                </Typography>
                <Typography variant="h6" color="blue-gray">
                  12 Oktober 2020
                </Typography>
              </li>
              <li className="flex justify-between">
                <Typography variant="h6" color="blue-gray">
                  Regional Data Hosting
                </Typography>
                <Typography variant="h6" color="blue-gray">
                  Jakarta, Indonesia
                </Typography>
              </li>
              <li className="flex justify-between">
                <Typography variant="h6" color="blue-gray">
                  Renewal Date
                </Typography>
                <Typography variant="h6" color="blue-gray">
                  12 Oktober 2023
                </Typography>
              </li>
            </ul>
            <Button
              variant="outlined"
              color="blue"
              className="w-full capitalize rounded-md mt-20"
            >
              Renew Subscription
            </Button>
          </CardBody>
        </Card>

        <Card className="divide-y divide-gray-300 p-6 lg:row-span-2 lg:col-span-4">
          <div className="flex justify-between items-center h-14">
            <Typography color="gray" variant="h5">
              Members
            </Typography>
            <Link to={"/"} className="text-blue-400">
              Manage Member
            </Link>
          </div>
          <div className="">
            <Typography variant="h6" color="gray" className="my-3 font-medium">
              Total Members
            </Typography>
            <div className="flex">
              <Typography variant="h3" color="green">
                7
              </Typography>
              <Typography variant="h3" color="black">
                /10
              </Typography>
            </div>
          </div>
          <div className="">
            <Typography variant="h6" className="my-3 font-medium">
              Members per user type
            </Typography>
            <div>
              <Typography variant="h6">Creator</Typography>
              <div className="flex items-center space-x-2">
                <Typography color="green" variant="h6">
                  4 Assigned
                </Typography>
                <Progress value={50} color="light-green" className="w-1/3" />
                <Typography
                  variant="h6"
                  color="black"
                  className="font-extralight"
                >
                  51 | 100
                </Typography>
              </div>
              <Typography variant="h6">Viewer</Typography>
              <div className="flex items-center space-x-2">
                <Typography color="green" variant="h6">
                  2 Assigned
                </Typography>
                <Progress value={50} color="light-green" className="w-1/3" />
                <Typography
                  variant="h6"
                  color="black"
                  className="font-extralight"
                >
                  51 | 100
                </Typography>
              </div>
            </div>
          </div>
        </Card>
        <Card className="divide-y divide-gray-300 p-6 lg:row-span-2 lg:col-span-4 ">
          <div className="flex justify-between items-center h-14">
            <Typography color="gray" variant="h5">
              Licenses
            </Typography>
            <Link to={"/"} className="text-blue-400">
              Manage License
            </Link>
          </div>
          <div className="divide-y-2">
            <div className="flex items-center space-x-2 py-3">
              <img src="/appicon/appstudio.svg" alt="esri-app-studio" />
              <div className="flex flex-col flex-auto">
                <Typography variant="h6" className="font-semibold">
                  ArcGIS App Studio
                </Typography>
                <div className="flex items-center space-x-3">
                  <Typography
                    variant="h6"
                    color="light-green"
                    className="font-medium"
                  >
                    233 assigned
                  </Typography>
                  <Progress value={50} color="light-green" className="w-1/3" />
                  <Typography variant="h6" className="font-extralight">
                    54 | 90
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 py-3">
              <img src="/appicon/agol.svg" alt="esri-app-studio" />
              <div className="flex flex-col flex-auto">
                <Typography variant="h6" className="font-semibold">
                  ArcGIS Online
                </Typography>
                <div className="flex items-center space-x-3">
                  <Typography
                    variant="h6"
                    color="light-green"
                    className="font-medium"
                  >
                    233 assigned
                  </Typography>
                  <Progress value={25} color="light-green" className="w-1/3" />
                  <Typography variant="h6" className="font-extralight">
                    54 | 90
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 py-3">
              <img src="/appicon/storymaps.png" alt="esri-app-studio" />
              <div className="flex flex-col flex-auto">
                <Typography variant="h6" className="font-semibold">
                  ArcGIS Story Maps
                </Typography>
                <div className="flex items-center space-x-3">
                  <Typography
                    variant="h6"
                    color="light-green"
                    className="font-medium"
                  >
                    233 assigned
                  </Typography>
                  <Progress value={75} color="light-green" className="w-1/3" />
                  <Typography variant="h6" className="font-extralight">
                    54 | 90
                  </Typography>
                </div>
              </div>
            </div>
            <div className="py-3">
              <Link to="/application">
                <Typography color="blue">+ 15 more licenses</Typography>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Overview;
