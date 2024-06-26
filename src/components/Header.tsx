"use client";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { FullLogo, Logo } from "./Svgs";
import React, { useEffect, useState } from "react";

import Buttons from "./Buttons";
import Link from "next/link";

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
    { id: 1, label: "Home", url: "/" },
    { id: 2, label: "Dashboard", url: "#dashboard" },
    { id: 3, label: "Features", url: "#features" },
    { id: 3, label: "How It Works", url: "#how-it-works" },
    { id: 4, label: "Partnership", url: "#partnership" },
    {
      id: 5,
      label: "Become A Beavr",
      url: "https://forms.gle/NtgemPp1UkidrHfm7",
    },
  ];

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileHeader, setIsMobileHeader] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 984) {
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
      <motion.div
        animate={showNavbar ? { top: 0 } : { top: -100 }}
        className="fixed z-50 left-0 right-0 m-3 flex flex-col items-center"
      >
        <div className="bg-slate-100 rounded-full flex justify-center items-center p-2">
          <div className="mx-3">
            <Link href="/">
              <FullLogo
                className="text-white"
                height={40}
                width={180}
                fill="#5456D1"
              />
            </Link>
          </div>
          {leftMenu.map((menu) => (
            <div
              key={menu.id}
              className="overflow-hidden"
            >
              <Link
                target={menu.id === 5 ? "_blank" : "_self"}
                href={menu.url}
                className=""
              >
                <p
                  className={`hover:bg-slate-950 hover:text-slate-100 px-3.5 py-3 rounded-full font-medium lg:text-md md:text-sm text-sm text-slate-500 truncate`}
                >
                  {menu.label}
                </p>
              </Link>
            </div>
          ))}

          <div className="bg-primary-regular rounded-full">
            <Link
              target="_blank"
              href="https://forms.gle/AxBTc1yQ865zFvLX6"
              className=""
            >
              <p
                className={`px-6 py-3 rounded-full lg:text-md md:text-sm text-sm text-secondary truncate`}
              >
                Create A Project
              </p>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  if (isMobileHeader) {
    return (
      <div className="relative">
        <motion.div
          animate={showNavbar ? { top: 0 } : { top: -100 }}
          className="fixed z-50 m-3 left-0 right-0 container mx-auto px-5"
        >
          {/* --- NAVBAR --- */}
          <div className="relative z-30 bg-gradient-to-t from-white p-3 rounded-3xl to-slate-100 w-full flex justify-between items-center shadow-lg">
            <Link href="/">
              <FullLogo
                className="text-white"
                height={40}
                width={180}
                fill="#5456D1"
              />
            </Link>
            <motion.nav
              className={`px-3 py-2 `}
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <MenuToggle
                toggle={(event: any) => {
                  setIsOpen(!isOpen);
                }}
              />
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
                className="px-5 h-full flex flex-col justify-between relative z-10"
              >
                {leftMenu.map((menu, index) => (
                  <motion.li
                    key={menu.id}
                    className={`${
                      index !== leftMenu.length - 1
                        ? "border-b border-white py-2"
                        : "pt-2"
                    } border-opacity-5`}
                  >
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      href={menu.url}
                      className="flex items-center justify-between"
                    >
                      <p className="font-bold text-center mr-2 text-white">
                        {menu.label}
                      </p>
                      <BiChevronRight
                        className="text-white"
                        size={30}
                      />
                    </Link>
                  </motion.li>
                ))}
                <div className="mt-5">
                  <div className="bg-primary-regular rounded-full">
                    <Link
                      target="_blank"
                      href="https://forms.gle/AxBTc1yQ865zFvLX6"
                      className=""
                    >
                      <p
                        className={`text-center px-6 py-3 rounded-full lg:text-md md:text-sm text-sm text-secondary truncate`}
                      >
                        Create A Project
                      </p>
                    </Link>
                  </div>
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100vh" }}
                exit={{ height: 0 }}
                className="z-0 absolute -top-[12px] bottom-0 left-0 right-0 h-screen bg-slate-950 rounded-b-3xl"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }
}

export default Header;
