import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FullLogoWhite, Logo } from "./Svgs";

import { FaSquareInstagram } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-slate-950 relative z-20 p-5 rounded-t-4xl">
      <div className="container mx-auto flex justify-between pt-10 pb-5">
        <div className="md:w-1/3 w-full  border-white flex flex-col items-start">
          <FullLogoWhite
            height={40}
            width={200}
            className="mb-5"
          />
          <p className="text-white/80 font-light text-xs ">
            BeavrBuddy is a Malaysian platform that connects homeowners with
            reliable and eco-friendly contractors, streamlining the renovation
            process through advanced project management tools.
          </p>
        </div>

        <div className="md:w-1/3 w-full flex flex-col items-end">
          <p className="text-white font-semibold text-md mb-4">Socials</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href="https://www.instagram.com/beavrbuddy/"
            >
              <FaInstagram
                className="text-secondary"
                size={35}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/beavrbuddy/"
            >
              <FaLinkedinIn
                className="text-secondary"
                size={35}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full pb-3 mt-10 flex flex-wrap gap-3 md:gap-0 justify-between container mx-auto">
        <p className="md:text-left text-center text-secondary font-light text-xs md:w-1/2 w-full">
          <Link
            target="_blank"
            href="https://ahmadhazim.com"
          >
            www.beavrbuddy.com
          </Link>
        </p>
        <p className="md:text-right text-center text-secondary font-light text-xs md:w-1/2 w-full">
          Copyrights© BeavrBuddy | Developed by{" "}
          <Link
            target="_blank"
            href="https://ahmadhazim.com"
          >
            ahmadhazim.com
          </Link>
        </p>
      </div>
    </footer>
  );
}
