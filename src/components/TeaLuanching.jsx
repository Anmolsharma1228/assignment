import React from 'react'
import { Sparkle, Facebook, Instagram, Twitter } from "lucide-react";
import cup from "../../public/images/cup.png";

export default function TeaLuanching() {
 return (
    <section className="border rounded-sm sm:border-8 border-[#2B1B12] relative bg-[#FDF8EE] overflow-hidden">
      {/* Floral Pattern Overlay */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/foral.png')]
          bg-repeat
          bg-size-[300px]
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-1 text-center">
        <img
          src="/images/logo.png"
          alt="logo"
          className="mx-auto w-32 sm:w-36"
        />

        <p className="text-2xl sm:text-3xl -mt-6 font-semibold text-[#3E2A1F]">
          Brew The Royal Tradition
        </p>

        <p className="mt-3 max-w-md mx-auto text-[#6B4A2E] text-[17px]">
          A premium instant chai tea premix inspired by the timeless flavors
          served in royal Indian households.
        </p>

        <div className="border-2 border-[#E3C77B] w-64 mx-auto p-0.75 rounded-full mt-6">
          <button
            className="flex items-center justify-center gap-2 bg-[#6B4A2E] w-full px-4 py-2 text-lg rounded-full text-white hover:shadow-[0_0_12px_rgba(200,164,81,0.6)]
            transition cursor-pointer leter-spacing-wide"
          >
            <Sparkle className="w-5 h-5 text-[#C8A451]" />
            Launching Soon
          </button>
        </div>

        <div
          className="mt-10 border-[#6B4A2E] border max-w-3xl mx-auto py-5 rounded-2xl"
        >
          <p className="text-lg">Be the first to experience royal chai</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-0">
            <input
              type="search"
              placeholder="Enter your email"
              className="rounded-lg sm:rounded-l-lg sm:rounded-r-none px-2 py-1 border border-[#6B4A2E] outline-none"
            />
            <button
              type="submit"
              className="border border-[#6B4A2E] cursor-pointer bg-[#A97C2D] text-white  px-16 sm:px-2 py-1 rounded-lg sm:rounded-r-lg sm:rounded-l-none"
            >
              Notify Me
            </button>
          </div>
        </div>

        {/* Footer inside the section */}
        <footer className="mb-2 sm:mb-0 mt-16 sm:bg-[#2B1B12] text-white rounded-t-3xl">
          <div className="flex justify-around items-center">
            <div className="flex gap-4">
              <Facebook
                size={30}
                className="text-[#2B1B12] sm:text-[#C8A451]"
              />
              <Instagram
                size={30}
                className="text-[#2B1B12] sm:text-[#C8A451]"
              />
              <Twitter size={30} className="text-[#2B1B12] sm:text-[#C8A451]" />
            </div>
            <div className="hidden sm:block">
              <img src={cup} alt="" className="w-50 h-50" />
            </div>
          </div>
          {/* <span className="hidden sm:block border border-dashed bg-red-500" /> */}
        </footer>
      </div>
    </section>
  )
}
