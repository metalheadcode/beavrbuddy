"use client";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import React, { useEffect, useState } from "react";
import { RiFacebookCircleFill, RiLinkedinBoxFill } from "react-icons/ri";

import { BiChevronDown } from "react-icons/bi";
// import Buttons from "./Buttons";
import Link from "next/link";
import { Logo } from "./Svgs";
import { usePathname } from "next/navigation";

type ToggleProps = {
  toggle: any;
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="#D2D2D2"
    {...props}
  />
);

function MenuToggle({ toggle }: ToggleProps) {
  return (
    <button
      onClick={toggle}
      className="pt-2"
    >
      <svg
        className=""
        width="23"
        height="23"
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

function Header() {
  const leftMenu = [
    { id: 1, label: "Solutions", url: "/" },
    { id: 2, label: "Built For", url: "/built-for" },
    { id: 3, label: "Resources", url: "/resources" },
    { id: 4, label: "About", url: "/about" },
    { id: 5, label: "Book a Demo", url: "/book-for-demo" },
  ];

  const [isMobileHeader, setIsMobileHeader] = useState(false);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const pathname = usePathname();
  const handleButtonClick = (event: any) => {
    // Prevent default button behavior
    event.preventDefault();
    // Open a new tab with the desired URL
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSezuJQsCim3cle0hqLS8wHvRDaXjd8Bz-lxmfVotRkbUFgMCg/viewform?usp=sf_link",
      "_blank"
    );
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 861) {
        setIsMobileHeader(true);
      } else {
        setIsMobileHeader(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobileHeader) {
    return (
      <div className="fixed z-50 top-0 left-0 right-0 px-6 py-6 ">
        <div className=" w-full flex justify-between items-center">
          <div className="">
            <Link href="/">
              <Logo
                className="text-white"
                height={50}
                width={70}
              />
            </Link>
          </div>
          <div className="bg-slate-100 rounded-full">
            <ul className="flex space-x-4">
              {leftMenu.slice(0, 4).map((menu) => (
                <li
                  key={menu.id}
                  className="m-2 "
                >
                  <Link
                    href={menu.url}
                    className=""
                  >
                    <p
                      className={`hover:bg-slate-950 hover:text-slate-100 px-6 py-3 rounded-full  text-sm text-slate-900 `}
                    >
                      {menu.label}
                    </p>
                  </Link>
                </li>
              ))}

              <li className="bg-primary p-2 rounded-r-full relative">
                <div className="bg-slate-100 absolute top-0 bottom-0 -left-[23%] h-full w-[60px] rounded-full" />
                <Link
                  href={leftMenu[4].url}
                  className=""
                >
                  <p
                    className={`hover:bg-slate-950 hover:text-slate-100  px-6 py-3 rounded-full  text-sm text-slate-100 `}
                  >
                    {leftMenu[4].label}
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-5">
            <RiFacebookCircleFill
              className="text-slate-900"
              size={35}
            />
            <RiLinkedinBoxFill
              className="text-slate-900"
              size={35}
            />
          </div>
        </div>
      </div>
    );
  }

  if (isMobileHeader) {
    return (
      <div className="relative">
        <div className="fixed z-50 top-0 left-0 right-0 container mx-auto px-5">
          <div className=" w-full flex justify-between items-center">
            <Link href="/">
              <Logo
                width={50}
                height={80}
              />
            </Link>
            <motion.nav
              className={`px-3 py-1 rounded-xl ${
                isOpen ? "bg-transparent" : "bg-white"
              }`}
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <MenuToggle toggle={toggleOpen} />
            </motion.nav>
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeIn",
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.1,
                    ease: "easeOut",
                  },
                }}
                className="h-full flex flex-col justify-between"
              >
                {leftMenu.map((menu, index) => (
                  <li
                    key={menu.id}
                    className={`${
                      index !== leftMenu.length - 1
                        ? "border-b border-white py-2"
                        : "pt-2"
                    } border-opacity-5`}
                  >
                    <Link
                      href={menu.url}
                      className="flex items-center justify-between"
                    >
                      <p className=" text-center mr-2 text-white">
                        {menu.label}
                      </p>
                      <BiChevronDown
                        className="text-white"
                        size={30}
                      />
                    </Link>
                  </li>
                ))}
                <div className="mt-5 mx-auto ">
                  {/* <Buttons
                design="primary-full-rounded"
                label="Get Started"
                onClick={handleButtonClick}
              /> */}
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100vh" }}
              exit={{ height: 0 }}
              className="z-40 absolute h-screen bg-slate-950 top-0 left-0 right-0"
            />
          )}
        </AnimatePresence>
      </div>
    );
  }
}

export default Header;
