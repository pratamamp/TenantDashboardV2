import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <form className="px-6 py-10">
        <div className="mb-4">
          <label className="text-gray-300 text-xs mb-2" htmlFor="fullname">
            Name
          </label>
          <div className="flex space-x-3">
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="firstname"
            />
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="lastname"
            />
          </div>
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-300 text-xs mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border  rounded w-full p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Type Username"
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-300 text-xs mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border  rounded w-full p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Type Email address"
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-300 text-xs mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********************************************"
          />
        </div>

        <button className="w-full rounded bg-primary py-3 text-white/80 my-6">
          Register
        </button>
      </form>

      <div className="flex items-center justify-center mb-3 text-xs">
        Already have an account?
        <span className="ml-1 text-blue-500">
          <Link to="/auth/log/in">Login</Link>
        </span>
      </div>
    </>
  );
}

export default Register;
