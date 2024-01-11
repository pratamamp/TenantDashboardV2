import { useAuth0 } from "@auth0/auth0-react";
import { faker } from "@faker-js/faker";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Input,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass, FaPlus, FaPencil } from "react-icons/fa6";
import { formatDate } from "../helpers/dates";
const API_URL = import.meta.env.VITE_API_URL;
const TABLE_HEAD = ["Member", "Last Login", "Role", "Action"];
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

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(API_URL + `/api/v1/member/?role=${ROLE}`, {
          method: "GET",
        });

        const result = await response.json();
        // const result = DUMMY_DATA();
        setData(result.results);
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

      <div className="flex-1 p-10">
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
              className="flex items-center gap-2 p-2 "
            >
              <span>
                <FaPlus className="w-4 h-4 text-blue-gray-100" />
              </span>
              <span className="font-normal text-blue-gray-100">Add Member</span>
            </Button>
          </CardHeader>
          <CardBody className="p-4">
            {data && (
              <>
                <table className="mt-4 w-full min-w-max table-auto text-left">
                  <thead className="flex w-full">
                    <tr className="flex w-full">
                      {TABLE_HEAD.map((head, index) => (
                        <th
                          key={index}
                          className={`y-4 ${
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
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Member;
