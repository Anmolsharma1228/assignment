import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-8">
      <div className="mt-14 flex flex-col gap-6 text-center lg:flex-row md:justify-between md:items-center font-semibold">
        <button className="italic text-2xl">Dribbble</button>

      <div className="flex flex-wrap justify-center gap-8">
        <button>For Designers</button>
        <button>Hire talent</button>
        <button>Inspiration</button>
        <button>Advertising</button>
        <button>Blog</button>
        <button>About</button>
        <button>Careers</button>
        <button>Support</button>
      </div>

      <div className="flex gap-4 justify-center text-xl">
        <RiTwitterXFill />
        <FaFacebook />
        <FaInstagram />
        <FaPinterest />
      </div>
      </div>

<div
  className="
    mb-4 mt-10 text-[15px] text-gray-400
    flex flex-col gap-4 text-center items-center
    md:flex-row md:justify-between md:items-center md:text-left
  "
>
  <div className="flex flex-col gap-2 md:flex-row md:gap-2">
    <div className="space-x-2">
      <button>@2026</button>
      <button>Dribbble</button>
    </div>

    <div className="space-x-2">
      <button>Terms</button>
      <button>Privacy</button>
      <button>Cookies</button>
    </div>
  </div>

  <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
    <button>Jobs</button>
    <button>Designers</button>
    <button>Freelancers</button>
    <button>Tags</button>
    <button>Places</button>
    <button>Resources</button>
  </div>
</div>

    </footer>
  );
}


