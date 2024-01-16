import { useAuth0 } from "@auth0/auth0-react";
import { faker } from "@faker-js/faker";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Tooltip,
  Typography,
  Select,
  Option,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass, FaPlus, FaPencil } from "react-icons/fa6";
import { IoMdCloseCircleOutline, IoMdArrowDropdown } from "react-icons/io";
import { formatDate } from "../helpers/dates";
const API_URL = import.meta.env.VITE_API_URL;
const TABLE_HEAD = ["Member", "Last Login", "Role", "Action"];
const TABLE_HEAD_POPUP = ["Member", "Role", "Last Login"];
const DUMMY_DATA = () => {
  let results = [];
  for (let index = 0; index < 9; index++) {
    const username = faker.person.fullName();
    const email = faker.internet.email({ firstName: username });
    const last_login = faker.date.between({
      from: "2024-01-01T00:00:00.000Z",
      to: new Date(),
    });
    const role = faker.helpers.arrayElements(["User", "Developer", "Guest"])[0];
    results.push({ username, email, last_login, role });
  }

  return {
    message: "list all member",
    results: results,
    total: results.length,
  };
};
const ROLE = "User";

export function Member() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [data, setData] = useState(null);
  const [dumpdata, setDumpdata] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [role, setRole] = useState(() => (
    <div className="flex items-center w-24 gap-2">
      <Typography variant="lead" className="text-xs">
        Select Role
      </Typography>
      <span>
        <IoMdArrowDropdown className="w-3 h-3" />
      </span>
    </div>
  ));
  const handleAddMemberDialog = (e) => {
    console.log("Add Member!");
    setOpenDialog(!openDialog);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(API_URL + `/api/v1/member/?role=${ROLE}`, {
          method: "GET",
        });

        const result = await response.json();
        const dump = DUMMY_DATA();
        setData(result.results);
        setDumpdata(dump.results);
      } catch (err) {
        console.error("Error", err);
      }
    };

    if (data == undefined) {
      loadData();
    }

    return () => setData(null);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Typography variant="h3" color="gray" className="px-2 mt-8 lg:px-10">
        Member
      </Typography>

      <Dialog
        open={openDialog}
        handler={handleAddMemberDialog}
        size="md"
        className="bg-transparent relative shadow-none"
      >
        <Card className="max-h-[40rem]">
          <CardBody className="divide-y-2 divide-gray-200 space-y-2">
            <div className="flex justify-between items-center py-3">
              <Typography variant="h5" color="blue-gray" className="font-bold">
                Add Member
              </Typography>
              <a href="#" onClick={() => handleAddMemberDialog(null)}>
                <IoMdCloseCircleOutline className="w-6 h-6 text-red-400" />
              </a>
            </div>
            <div className="py-3">
              <Typography variant="h6" className="font-normal">
                Email
              </Typography>
              <div className="flex w-full bg-transparent justify-between items-center space-x-2">
                <div className="flex w-3/4">
                  <Menu placement="bottom-start">
                    <MenuHandler>
                      <Button
                        ripple={false}
                        variant="text"
                        color="blue-gray"
                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                      >
                        {role}
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-[20rem] z-[10000]">
                      <MenuItem onClick={() => setRole("User")}>User</MenuItem>
                      <MenuItem onClick={() => setRole("Admin")}>
                        Administrator
                      </MenuItem>
                      <MenuItem onClick={() => setRole("Publisher")}>
                        Publisher
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Input
                    placeholder="Input Email"
                    className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                </div>

                <Button
                  variant="gradient"
                  type="button"
                  color="indigo"
                  className="flex items-center flex-1 justify-center"
                >
                  Send Invite
                </Button>
              </div>
            </div>

            <div className="py-3 max-h-[24rem] ">
              <Typography variant="h6" className="font-normal">
                Latest Members
              </Typography>
              {data && (
                <div className="mt-2">
                  <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead className="flex w-full">
                      <tr className="flex w-full">
                        {TABLE_HEAD_POPUP.map((head, index) => (
                          <th
                            key={index}
                            className={`${
                              index !== 0 ? "w-1/4" : "w-2/4"
                            } py-4 px-2 border-y border-blue-gray-50/50`}
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal leading-none opacity-70"
                            >
                              {head}
                            </Typography>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody
                      className="bg-grey-light flex flex-col items-center overflow-y-auto overflow-x-auto"
                      style={{ height: "10vh" }}
                    >
                      {dumpdata.map(
                        ({ email, username, last_login, role }, index) => {
                          const [first, last] = username.split(" ");
                          const lastLogin = new Date(last_login);
                          const formatLastLogin = formatDate(lastLogin);

                          return (
                            <tr key={index} className="flex w-full mb-2">
                              <td className="w-2/4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 aspect-square bg-blue-gray-500 rounded-full flex items-center justify-center">
                                    <span className="text-white">
                                      {/* {first?.charAt(0) + last?.charAt(0)} */}
                                      M
                                    </span>
                                  </div>
                                  <div className="flex flex-col -space-y-1">
                                    <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                    >
                                      {username}
                                    </Typography>
                                    <Typography
                                      variant="small"
                                      color="light-blue"
                                      className="font-normal opacity-70"
                                    >
                                      {email}
                                    </Typography>
                                  </div>
                                </div>
                              </td>
                              <td className="w-1/4">{role}</td>
                              <td className="w-1/4">{formatLastLogin}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="py-3">
              <Typography variant="small" color="gray" className="font-normal">
                Copy Link
              </Typography>
              <div className="flex items-center space-x-2">
                <Input
                  value={"techplatform.org/saas/U76yghth"}
                  disabled
                  color="orange"
                />
                <Button variant="filled" type="button" color="green">
                  copy
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Dialog>

      <div className="flex-1 p-10">
        {data && (
          <Card
            variant="gradient"
            color="white"
            shadow={false}
            className="h-full"
          >
            <CardHeader
              shadow={false}
              color="transparent"
              floated={false}
              className="flex items-center justify-between p-2 rounded-none"
            >
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<FaMagnifyingGlass className="w-3 h-3" />}
                />
              </div>
              <Button
                type="button"
                variant="gradient"
                color="indigo"
                className="flex items-center gap-2"
                onClick={handleAddMemberDialog}
              >
                <FaPlus className="w-3 h-3" />
                Add Member
              </Button>
            </CardHeader>
            <CardBody className="p-4">
              <>
                <table className="mt-4 w-full min-w-max table-auto text-left">
                  <thead className="flex w-full">
                    <tr className="flex w-full">
                      {TABLE_HEAD.map((head, index) => (
                        <th
                          key={index}
                          className={`${
                            index !== 0 ? "w-1/5" : "w-2/5"
                          } border-y border-blue-gray-50 bg-blue-gray-50/50 py-4 px-2`}
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody
                    className="bg-grey-light flex flex-col items-center overflow-y-auto overflow-x-auto"
                    style={{ height: "60vh" }}
                  >
                    {data.map(
                      ({ username, email, last_login, role }, index) => {
                        const isLast = index === data.length - 1;
                        const classes = isLast
                          ? "py-4"
                          : "py-4 border-b border-blue-gray-50";
                        const [first, last] = username.split(" ");
                        const lastLogin = new Date(last_login);
                        const formatLastLogin = formatDate(lastLogin);

                        return (
                          <tr key={index} className="flex w-full mb-2">
                            <td className={`${classes} w-2/5`}>
                              <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-blue-gray-500 rounded-full flex items-center justify-center">
                                  <span className="text-white">
                                    {/* {first?.charAt(0) + last?.charAt(0)} */}
                                    M
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {username}
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="light-blue"
                                    className="font-normal opacity-70"
                                  >
                                    {email}
                                  </Typography>
                                </div>
                              </div>
                            </td>
                            <td className={`${classes} w-1/5`}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal p-0"
                              >
                                {formatLastLogin}
                              </Typography>
                            </td>
                            <td className={`${classes} w-1/5`}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {role}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Tooltip content="Edit User">
                                <IconButton variant="text">
                                  <FaPencil className="w-4 h-4" />
                                </IconButton>
                              </Tooltip>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>

                <nav
                  className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
                  aria-label="Table navigation"
                >
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1-10
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1000
                    </span>
                  </span>
                  <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Previous
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Member;
