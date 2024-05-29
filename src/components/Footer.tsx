import { Logo } from "./Svgs";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer
      className="bg-slate-950"
      style={{
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
      }}
    >
      <div className="container mx-auto flex">
        <div className="">
          <Logo
            className="text-white"
            fill="#FFFFFF"
            height={90}
            width={70}
          />
        </div>
        <div className="text-white">COlumn two</div>
        <div className="text-white">COlumn three</div>
      </div>
    </footer>
  );
}
