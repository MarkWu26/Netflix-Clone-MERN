import React from "react";
import netflixbg from "../assets/img/netflix-bg.jpg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.90) 12%,rgba(20,20,20,.20) 65%,rgba(0,0,0,.90) 100%, rgba(0,0,0,.100) 100%, #141414 100%), url(${netflixbg}) `
      }}
      className="absolute h-[100vh] object-fit overflow-y-hidden"
    >
      <div className="absolute w-full">
        <div className="flex flex-row justify-between items-center px-44 py-6">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
              className="h-[42px] mr-[40px] hover:cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div>
            <button className="px-4 py-[6px] flex items-center justify-center text-white bg-[#e50914] rounded-md"
            onClick={()=> navigate("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center w-full h-[100vh]">
        <div className="w-[80%] flex flex-col gap-y-5 ">
          <h1 className="text-white text-[55px]  text-center font-extrabold tracking-wide leading-[75px]">
            The biggest local and international hits. The best stories. All
            streaming here.
          </h1>
          <p className="text-white text-[22px] flex items-center justify-center">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white text-[22px] flex items-center justify-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-row items-center justify-center w-full gap-x-5">
            <input
              type="text"
              className="px-4 py-[16px] w-[30%] bg-[#161616] bg-opacity-70 border-[#2bb871] border-2 rounded-md text-white"
              placeholder="Email address"
            />
            <button
              className="px-4 py-[16px] flex items-center justify-center text-white bg-[#e50914] rounded-md w-[15%] text-xl"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
