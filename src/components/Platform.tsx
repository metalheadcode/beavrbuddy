"use client";

import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { BiMoney, BiShare } from "react-icons/bi";
import { FullLogo, Logo } from "./Svgs";
import {
  IoAddOutline,
  IoCopyOutline,
  IoShareOutline,
  IoShareSharp,
} from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";

import { BsThreeDots } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { GoProject } from "react-icons/go";
import { GrFormAttachment } from "react-icons/gr";
import Image from "next/image";
import PresenceAnimation from "./PresenceAnimation";
import { SlShare } from "react-icons/sl";

type Props = {
  scrollYProgress: MotionValue;
};

type ListTypes = {
  title: string;
  desc: string;
  tags: string[];
  applications: number;
  budget: string;
  location: string;
  createdAt: string;
};

const list: ListTypes[] = [
  {
    title: "Extending Kitchen",
    desc: "I want to extend my kitchen area to include a larger cooking space and additional storage. This includes expanding the current kitchen layout, installing new cabinets, countertops, and possibly adding a small dining area.",
    tags: ["Home Extension", "Home Renovation"],
    applications: 20,
    budget: "50000",
    location: "Petaling Jaya",
    createdAt: "19-5-2024",
  },
  {
    title: "Bathroom Remodeling",
    desc: "I need a complete renovation of my bathroom, including replacing old fixtures, installing a new bathtub, modern tiles, and improving the overall layout for better functionality and aesthetics.",
    tags: ["Bathroom Renovation", "Interior Design"],
    applications: 15,
    budget: "30000",
    location: "Kuala Lumpur",
    createdAt: "20-5-2024",
  },
  {
    title: "Living Room Expansion",
    desc: "I'm looking to expand my living room to create a more open and spacious environment. This project involves knocking down a wall, installing new flooring, and updating the lighting fixtures to enhance the living space.",
    tags: ["Home Extension", "Living Room"],
    applications: 10,
    budget: "45000",
    location: "Shah Alam",
    createdAt: "18-5-2024",
  },
  {
    title: "Roof Replacement",
    desc: "I need a complete roof replacement due to wear and tear. This includes removing the old roof, repairing any structural damage, and installing new roofing materials that will ensure durability and weather resistance.",
    tags: ["Roofing", "Home Maintenance"],
    applications: 25,
    budget: "60000",
    location: "Petaling Jaya",
    createdAt: "21-5-2024",
  },
  {
    title: "Garden Landscaping",
    desc: "I want to redesign my garden to create a more appealing outdoor space. This involves landscaping, planting new trees and shrubs, creating a patio area, and installing a new irrigation system to maintain the garden.",
    tags: ["Landscaping", "Garden Design"],
    applications: 18,
    budget: "20000",
    location: "Subang Jaya",
    createdAt: "22-5-2024",
  },
  {
    title: "Garage Construction",
    desc: "I want to build a new garage on my property. The project includes constructing a standalone structure with space for two cars, adding storage areas, and ensuring the garage is equipped with the necessary electrical and lighting fixtures.",
    tags: ["New Construction", "Garage"],
    applications: 12,
    budget: "55000",
    location: "Klang",
    createdAt: "23-5-2024",
  },
];

const menus = [
  {
    id: 1,
    name: "Active Projects",
    url: "#",
    icon: <GoProject size={20} />,
  },
  {
    id: 2,
    name: "My Applications",
    url: "#",
    icon: <GrFormAttachment size={20} />,
  },
  {
    id: 3,
    name: "Inbox",
    url: "#",
    icon: <FaInbox size={20} />,
  },
  {
    id: 4,
    name: "Current Income",
    url: "#",
    icon: <BiMoney size={20} />,
  },
  {
    id: 5,
    name: "Settings",
    url: "#",
    icon: <FiSettings size={20} />,
  },
];

const SideBar = ({ openSideBar }: { openSideBar: boolean }) => {
  const [active, setActive] = useState(0);

  return (
    <div
      className={`relative bg-white rounded-2xl ${
        openSideBar ? "min-w-[230px]" : ""
      } h-full  flex flex-col justify-between py-3`}
    >
      {openSideBar ? (
        <>
          <div className="p-3 flex items-center justify-center">
            <FullLogo
              width={150}
              height={45}
            />
          </div>
          <div className="">
            {menus.map((menu, index) => (
              <div
                onClick={() => setActive(index)}
                key={index}
                className={`relative px-3 py-3 ${
                  index === menus.length - 1 ? "border-y" : "border-t"
                } ${
                  active === index ? "bg-primary-light/10" : "border-slate-100"
                }`}
              >
                <span
                  className={`flex items-center gap-3 ${
                    active === index ? "text-black" : "text-slate-500"
                  }`}
                >
                  {menu.icon}
                  <p className="text-sm">{menu.name}</p>
                </span>
                {active === index && (
                  <div className="h-full w-[3px] bg-primary-light absolute left-0 top-0 bottom-0" />
                )}
              </div>
            ))}
          </div>
          <div className="px-3 flex items-center w-full justify-between">
            <Image
              src="/images/platform-client/profile.jpg"
              alt="profile-image"
              width={1000}
              height={1000}
              className="h-7 w-7 rounded-full object-cover"
            />
            <div className="">
              <p className="text-slate-600 text-xs text-ellipsis font-semibold">
                Ibrahim Ahmad
              </p>
              <p className="text-slate-400 text-xs text-ellipsis">
                ibrahimahmad@gmail.com
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-3 flex items-center justify-center">
            <Logo
              width={30}
              height={35}
            />
          </div>
          <div className="">
            {menus.map((menu, index) => (
              <div
                onClick={() => setActive(index)}
                key={index}
                className={`relative px-3 py-3 ${
                  index === menus.length - 1 ? "border-y" : "border-t"
                } ${
                  active === index ? "bg-primary-light/10" : "border-slate-100"
                }`}
              >
                <span
                  className={`w-full flex justify-center items-center${
                    active === index ? "text-black" : "text-slate-500"
                  }`}
                >
                  {menu.icon}
                </span>
                {active === index && (
                  <div className="h-full w-[3px] bg-primary-light absolute left-0 top-0 bottom-0" />
                )}
              </div>
            ))}
          </div>
          <div className="p-3 flex justify-center items-center w-full">
            <Image
              src="/images/platform-client/profile.jpg"
              alt="profile-image"
              width={1000}
              height={1000}
              className="h-7 w-7 rounded-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
};
const Header = () => {
  return (
    <div className="w-full p-3 bg-white rounded-2xl">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl text-slate-700">
          Active Projects ⚡️
        </h3>
        <p className="text-slate-400 text-xs">Last Update : 30 February 2024</p>
      </div>
    </div>
  );
};
const Card = ({
  title,
  desc,
  tags,
  applications,
  budget,
  location,
  createdAt,
}: ListTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-3 bg-white rounded-2xl flex flex-col gap-2"
    >
      <p className="text-slate-400 text-xs">{createdAt}</p>
      <h3 className="font-bold text-md">{title}</h3>
      <p className="text-slate-700 text-xs">{desc}</p>
      <div className="text-slate-500 flex gap-1 items-center text-xs">
        <FaLocationPin />
        <p>{location}</p>
      </div>
      <div className="flex flex-wrap gap-1 overflow-hidden">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="px-5 py-2 bg-secondary rounded-full truncate text-xs"
          >
            {tag}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Filter = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [grade, setGrade] = useState<string | null>(null);

  return (
    <div className="p-3 bg-white rounded-2xl flex flex-col gap-3">
      <div className="">
        <h3 className="font-bold text-md truncate">Project Type</h3>
        <select className="text-xs mt-3 border-2 border-slate-200 px-2 py-2 rounded-lg w-full">
          {[
            {
              value: "Landscaping",
              key: "Landscaping",
            },
            {
              value: "Home Extension",
              key: "Home Extension",
            },
            {
              value: "Home Renovation",
              key: "Home Renovation",
            },
            {
              value: "Interior Design",
              key: "Interior Design",
            },
            {
              value: "Living Room",
              key: "Living Room",
            },
            {
              value: "Maintenance",
              key: "Maintenance",
            },
          ].map((item, index) => (
            <option
              key={index}
              className="truncate "
            >
              {item.key}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <h3 className="font-bold text-md truncate">Location</h3>
        {[
          "Selangor",
          "Kuala Lumpur",
          "Putrajaya",
          "Melaka",
          "Negeri Sembilan",
          "Johor",
          "Pahang",
        ].map((state, index) => (
          <div
            key={index}
            className="flex gap-3 mt-2"
          >
            <input
              type="checkbox"
              checked={location === state}
              className=" accent-secondary"
              onChange={(event) => {
                const checked = event.target.checked;
                if (checked) {
                  setLocation(state);
                } else {
                  setLocation(null);
                }
              }}
            />
            <p className="text-slate-700 text-xs truncate">{state}</p>
          </div>
        ))}
      </div>
      <div className="">
        <h3 className="font-bold text-md truncate">Contractor Grade</h3>
        {[
          { name: "G3 - Less Than RM 1 Mil", value: "E" },
          { name: "G2 - Less Than RM 500, 000", value: "F" },
          { name: "G1 - Less Than RM 200, 000", value: "G" },
        ].map((g, index) => (
          <div
            key={index}
            className="flex gap-3 mt-2"
          >
            <input
              type="checkbox"
              checked={g.value === grade}
              className=" accent-secondary"
              onChange={(event) => {
                const checked = event.target.checked;
                if (checked) {
                  setGrade(g.value);
                } else {
                  setGrade(null);
                }
              }}
            />
            <p className="text-slate-700 text-xs truncate">{g.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Platform({ scrollYProgress }: Props) {
  const listOfOrderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [output, setOutput] = useState([]);
  const startFromFiftyPercent = useTransform(scrollYProgress, [0.5, 1], [1, 5]);

  useMotionValueEvent(startFromFiftyPercent, "change", (value) => {
    if (value <= 1) {
      return setOutput([]);
    }
    const newArr: any = list.slice(0, value);
    setOutput(newArr);
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      }
      if (window.innerWidth > 1024) {
        setIsMobile(false);
      }

      if (window.innerWidth < 800) {
        setOpenFilter(false);
      }
      if (window.innerWidth > 800) {
        setOpenFilter(true);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-t from-stone-900/90 to-stone-800/90 backdrop-blur-xl rounded-t-2xl flex items-center justify-between px-5 py-2">
        <div className="flex gap-1.5 w-2/6">
          <div className="h-2.5 w-2.5 bg-red-400 rounded-full" />
          <div className="h-2.5 w-2.5 bg-lime-400 rounded-full" />
          <div className="h-2.5 w-2.5 bg-yellow-400 rounded-full" />
        </div>
        <div className="w-4/6 h-full p-1  rounded-lg border border-stone-700">
          <p className="text-stone-500 text-xs text-center">beavrbuddy.com</p>
        </div>
        <div className="w-2/6 flex justify-end gap-2">
          <IoShareOutline
            className="text-stone-500"
            size={20}
          />
          <IoAddOutline
            className="text-stone-500"
            size={20}
          />
          <IoCopyOutline
            className="text-stone-500"
            size={20}
          />
        </div>
      </div>
      <div className="bg-slate-100 rounded-b-3xl p-3 flex gap-3 w-full overflow-auto no-scrollbar shadow-inner">
        <PresenceAnimation>
          <SideBar openSideBar={!isMobile} />
        </PresenceAnimation>
        <div className="flex-1">
          <PresenceAnimation delay={0.2}>
            <Header />
          </PresenceAnimation>
          <div className="flex gap-3 mt-3 ">
            {output.length === 0 && (
              <div className="p-5 rounded-2xl w-full h-full">
                <p className="text-slate-400 text-center w-full mx-auto">
                  New Request From Client Will Appear Here
                </p>
              </div>
            )}
            <PresenceAnimation delay={0.3}>
              <div
                ref={listOfOrderRef}
                className="flex flex-col gap-3 max-h-[600px] overflow-y-scroll  no-scrollbar"
              >
                <AnimatePresence initial={false}>
                  {output.map((item: ListTypes, index: number) => (
                    <Card
                      key={index}
                      {...item}
                    />
                  ))}
                </AnimatePresence>
                <div className="h-3" />
              </div>
            </PresenceAnimation>
            {output.length > 0 && openFilter && (
              <PresenceAnimation delay={0.4}>
                <div className="max-h-[600px] overflow-y-scroll  no-scrollbar">
                  <Filter />
                  <div className="h-3" />
                </div>
              </PresenceAnimation>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
