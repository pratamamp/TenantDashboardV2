import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const usernameRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  return (
    <>
      <form className="px-6 py-10">
        <div className="mb-4">
          <label
            className="block text-gray-300 text-xs mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Please type name / email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-300 text-xs mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <div className="flex justify-between items-center text-xs">
            {/* <p className="text-red-500 italic">Your password is invalid.</p> */}
            <p className="text-blue-500">Forgot Password ?</p>
          </div>
        </div>
        <button className="w-full rounded bg-primary py-3 text-white/80 my-6">
          Submit
        </button>
      </form>
      <div className="flex items-center justify-center mb-3 text-xs">
        Don't have an account?
        <span className="ml-1 text-blue-500">
          <Link to="/auth/register">Register</Link>
        </span>
      </div>
    </>
  );
}

export default Login;
