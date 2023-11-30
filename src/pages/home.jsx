import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@material-tailwind/react";
import { FaChartSimple } from "react-icons/fa6";
import { TbAffiliate } from "react-icons/tb";

function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <section className="relative z-10 overflow-hidden pb-[100px] bg-[#27183f] h-screen">
      <div className="container">
        <header className="flex items-center justify-between py-10">
          <div className="h-10 flex items-center">
            <TbAffiliate className="w-full h-full text-theme" />
            <Typography variant="h6" className="text-theme">
              Saas
            </Typography>
          </div>

          <nav>
            <ul className="flex items-center gap-5 text-p">
              <li>Home</li>
              <li>About</li>
              <li>Organization</li>
              <li>Projects</li>
            </ul>
          </nav>

          <div className="flex gap-5">
            <Button
              variant="filled"
              type="button"
              className="inline-block px-[20px] py-[5px] rounded-md bg-theme font-medium text-green-100 transition-all duration-300 hover:bg-hover"
              onClick={loginWithRedirect}
            >
              Log in
            </Button>
          </div>
        </header>
      </div>

      {/* -- Hero Section Start -- */}
      <div className="container pt-[120px]">
        <div className="wrapper grid grid-cols-12 gap-[30px]">
          <div className="col-span-6">
            <div>
              <Typography variant="h2" className="text-purple-100">
                We`re here to Increase your spatial productivity
              </Typography>
              <br />
              <div>
                <svg
                  width="487"
                  height="34"
                  viewBox="0 0 487 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 30C73.6307 10.398 266.914 -17.0885 483 30"
                    stroke="rgb(225, 190, 231)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="mt-[30px] text-base text-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                delectus reprehenderit eum numquam ut. Sint consequatur mollitia
                veniam esse{" "}
              </p>
              <br />
            </div>
          </div>

          <div className="col-span-6">
            <div className="wrapper relative">
              <div>
                <img src="/herobg.png" alt="" className="ml-auto" />
              </div>
              {/* shape box */}
              <div className="slide-top absolute left-[-60px] top-[100px] flex gap-[60] rounded-lg bg-gray-300/80 p-[15px] drop-shadow-md">
                <div>
                  <span className="text-p">Enter Location</span>
                  <h3 className="mt-1 font-medium text-h">
                    Lat 0.456 Lon 3.445
                  </h3>
                </div>
                <div>
                  <div className="ml-4 rounded-md bg-theme px-[20px] py-[5px] text-base font-medium text-white">
                    Send
                  </div>
                </div>
              </div>

              <div className="absolute left-[-10px] bottom-[-50px] flex items-center gap-[30px] rounded-lg bg-blue-gray-200 p-[15px] drop-shadow-md">
                <div>
                  <span>Total POI</span>

                  <Typography variant="h6" className="font-medium mt-1 text-h">
                    42.574.909
                  </Typography>
                </div>
                <div className="text-[40px] text-theme">
                  <FaChartSimple className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
