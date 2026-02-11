import React from "react";
import { CiHeart, CiBookmark, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import img1 from "../../public/images/img1.webp";
import img2 from "../../public/images/img2.gif";
import img3 from "../../public/images/img3.webp"
import img4 from "../../public/images/img4.webp"
import img5 from "../../public/images/img5.webp"
import img6 from "../../public/images/img6.webp"
import img7 from "../../public/images/img7.gif"
import img8 from "../../public/images/img8.webp"
import img9 from "../../public/images/img9.webp"
import img10 from "../../public/images/img10.gif"
import img11 from "../../public/images/img11.webp"
import img12 from "../../public/images/img12.webp"
import img13 from "../../public/images/img13.webp"
import img14 from "../../public/images/img14.webp"






export default function Dribble() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 overflow-x-hidden">
      <div className="mt-14">
        <h1 className="text-2xl font-semibold">
          Ticketing - Capacity Helpdesk
        </h1>
        <div className="mt-8 flex justify-between">
          <div className="flex items-center gap-4 text-[10px] font-semibold">
            <img src={img1} alt="profile" className="rounded-full w-10 sm:w-12" />
            <button className="text-[12px] sm:text-[15px]">Danny Amacher</button>
            <button className="text-red-400">Available for work</button>
            <button className="hidden text-blue-400">Follow</button>
          </div>
          <div className="flex items-center gap-3 md:gap-4 font-semibold">
            <div className="rounded-full px-2 py-2 border border-gray-300 text-xl">
              <CiHeart />
            </div>
            <div className="rounded-full px-2 py-2 border border-gray-300 text-xl">
              <CiBookmark />
            </div>
            <div className="flex sm:hidden bg-[#0D0C22] text-white rounded-full px-2 py-2 border border-gray-300 text-xl">
              <CiMail />
            </div>
            <button className="hidden md:flex bg-[#0D0C22] text-white px-4 py-2 rounded-full">
              Work with me
            </button>
          </div>
        </div>
      </div>
      <main>
        <div className="text-[20px] max-w-3xl mx-auto mt-8">
          <p>
            I designed a Helpdesk product during my time as design director at
            Capacity.
          </p>

          <p className="my-6">
            Helpdesk is a core part of the Capacity platform because support
            issues that cannot be resolved with automation must be escalated to
            a [human] agent. We spent a lot of effort building personas around
            the helpdesk agents so we could understand their needs.
          </p>

          <p className="mb-6">
            This wasn't a time-boxed project with a clear end date. Rather, this
            was work that evolved over time as we released an MVP to the market,
            observed how customers used it, and adjusted and iterated over time.
          </p>
        </div>
      </main>

      {/* FRAME SECTION */}
      <div className="w-full mt-16">
        <div className="max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-white">
          <div className="relative w-full aspect-video">
            <img
              src={img2}
              alt="Helpdesk product preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


   <div className="mt-20">
    <img src={img3} className="rounded-2xl"/>
   </div>

 <div className="my-20 text-[20px] max-w-2xl mx-auto">
  <p>Helpdesk agents can add new Q&A to a knowledge base without leaving the helpdesk. The inquiry and response cards are the same component used in the <span className="underline">knowledge base</span>.</p>
 </div>

<div className="">
  <img src={img4} alt="" className="rounded-2xl"/>
</div>

<div className="mt-20">
  <img src={img5} alt="" className="rounded-2xl"/>
</div>

<div className="mt-14 max-w-3xl mx-auto pt-8">
  <p className="text-[20px]"><span className="font-semibold">Helpdesk Message Composer UI</span> - This part of the UI is a great example of when you need to pack a ton of important functionality in a relatively small space—all while making it look clean and enjoyable to use.</p>
  <p className="text-[20px] my-10">Voice of Customer and competitor analysis made it clear that we were going to need to support <span className="font-semibold">public</span> and <span className="font-semibold">private</span> messages. There were concerns about mixing public and private messages in the same space because it may be hard to orient yourself in the conversation. I opted to use the <span className="font-semibold">tab</span> component to bifurcate the experience at the highest level. User testing confirmed that this decision cut down on cognitive load because users can trust that everything in one area is public, and everything in another area is all private.</p>
</div>

<div className="mt-20">
  <img src={img6} alt="" className="rounded-2xl"/>
</div>

<div className="my-14 w-3xl mx-auto">
  <p className=" text-[20px]"><span className="font-semibold">@mentions</span> - Search and tag users in helpdesk comments so that the recipient can be notified.</p>
</div>


<div className="">
  <img src={img7} alt="" className="rounded-2xl"/>
</div>

<div className="max-w-3xl mx-auto text-[20px]">
  <p className="mt-20 mb-8"><span className="font-semibold">Live Editing</span> - Some user pain we uncovered was that there was no visibility into what agent(s) were working on a specific ticket. This often led to agents unknowingly editing a ticket at the same time, and that experience was confusing and frustrating if their work was undone or not saved.</p>

  <p>
    I designed options for how we might show user attribution during live editing of fields and situations where someone is actively typing in the message composer.
  </p>
</div>


<div className="mt-20">
  <img src={img8} alt=""/>
</div>

<div className="max-w-2xl mx-auto mt-22">
  <img src={img9} alt=""/>
</div>


<div className="text-[20px] max-w-2xl mx-auto mt-14">
  <h1 className="font-semibold">Reorder and Rename Custom Views</h1>
  <p>As we interviewed helpdesk support agents we kept hearing a similar theme. In addition to the default filtered ticket views provided, agents wanted to create their own custom filtered views and be able to save the views.</p>
  <p className="mt-6">Not having to reconfigure special views several times a day gave a lot of time back to support agents.</p>
</div>

<div className="mt-20">
  <img src={img10} alt="" className="rounded-2xl"/>
</div>

<div className="mt-20">
  <img src={img10} alt="" className="rounded-2xl"/>
</div>

<div className="max-w-2xl mx-auto mt-20">
  <h3 className="text-[25px] font-bold">That's it! Thanks for reading this far.</h3>
  <div className="flex items-center gap-2 mt-4">
  <p className="text-lg">If you like this project, please hit that</p>
  <FaGithub/>  
  </div>
</div>

<div className="lg:hidden flex justify-center gap-4 mx-w-2xl mx-auto my-14">
 <div className="rounded-full px-2 py-2 border border-gray-300 text-xl">
 <CiHeart />
 </div>
 <div className="rounded-full px-2 py-2 border border-gray-300 text-xl">
  <CiBookmark />
</div>
 <div className="rounded-full px-2 py-2 border border-gray-300 text-xl">
  <CiBookmark />
</div>
 <div className="rounded-full px-2 py-2 border border-gray-300 text-xl">
  <CiBookmark />
</div>
</div>


<div className="flex items-center gap-4 mt-20">
  <div className="flex-1 h-px bg-gray-300" />

  <img
    src={img1}
    alt=""
    className="w-18 h-18 rounded-full object-cover"
  />

  <div className="flex-1 h-px bg-gray-300" />
</div>


<div className="text-center space-y-4">
  <button className="font-semibold">Danny Amacher</button>
  <p>SaaS Product Design + Design Systems 👋🏼 ✨</p>
   <button className="bg-[#0D0C22] text-white px-4 py-2 rounded-full">
  Work with me
  </button>
</div>


<div className="mt-16">
  <h3 className="font-semibold lg:ml-14">More by Danny Amacher</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 mt-4 cursor-pointer">
    <div>
      <img src={img11} alt="" className="rounded-2xl"/>
    </div>
      <div>
      <img src={img12} alt="" className="rounded-2xl"/>
    </div>
      <div>
      <img src={img13} alt="" className="rounded-2xl"/>
    </div>
      <div>
      <img src={img14} alt="" className="rounded-2xl"/>
    </div>
  </div>
</div>

    </section>
  );
}
