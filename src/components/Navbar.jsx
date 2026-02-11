import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";

export default function Navbar() {

const [isopen, setOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="font-semibold flex items-center justify-between px-2 md:px-4 lg:px-6 py-3 w-full mx-auto">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="lg:hidden text-2xl cursor-pointer">
            <button onClick={()=> setOpen(!isopen)}>
              {isopen ? <ImCross/> : <HiMiniBars3BottomLeft/> }
            </button>
          </div>

          <Link to="/" className="text-2xl font-semibold italic">
            Dribbble
          </Link>
        </div>

        {/* CENTER SEARCH */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-105">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="font-semibold bg-transparent outline-none flex-1 text-sm"
          />

          <select className="bg-transparent text-sm outline-none cursor-pointer mx-4">
            <option className="">Shots</option>
            <option className="">Designers</option>
            <option className="">Services</option>
          </select>

          <button className="bg-pink-500 text-white rounded-full p-2">
            <CiSearch className="text-lg" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="hidden xl:flex gap-8">
          <Link>Explore</Link>
          <Link>Hire Talent</Link>
          <Link>Get Hired</Link>
          <Link>Community</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-2xl">
          <div className=" hidden lg:flex border border-gray-300 rounded-full items-center gap-3 text-[15px] px-4 py-3 cursor-pointer">
             <FaPlus/>
            <button>Share Work</button>
          </div>
          <IoChatbubbleEllipsesOutline className="cursor-pointer" />
          <MdOutlineNotifications className="cursor-pointer" />
          <CgProfile className="text-3xl cursor-pointer" />
        </div>
      </nav>

       {/* CENTER SEARCH */}
        <div className="lg:hidden flex items-center bg-gray-100 rounded-full px-4 py-2 w-full">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="font-semibold bg-transparent outline-none flex-1 text-sm"
          />

          <select className="bg-transparent text-sm outline-none cursor-pointer mx-4">
            <option className="">Shots</option>
            <option className="">Designers</option>
            <option className="">Services</option>
          </select>

          <button className="bg-pink-500 text-white rounded-full p-2">
            <CiSearch className="text-lg" />
          </button>
        </div>

     {/* Mobile Toggle */}
     {isopen && (
        <div className="font-bold text-xl space-y-6 flex bg-white flex-col xl:hidden py-4 pl-6 h-auto absolute top-14 w-full">
          <Link>Explore</Link>
          <Link>Hire Talent</Link>
          <Link>Get Hired</Link>
          <Link>Community</Link>
        </div>
     )}
    </header>
  );
}
