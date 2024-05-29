import Image from "next/image";
import PresenceAnimation from "./PresenceAnimation";
import React from "react";

type Props = {};

export default function HowItWorksSection({}: Props) {
  return (
    <section className="relative bg-gradient-to-r from-secondary-dark to-secondary rounded-b-4xl">
      <div className="flex items-center container mx-auto py-20">
        <div className="w-full px-5 grid grid-cols-4 gap-3 overflow-scroll-x">
          <div className="bg-white rounded-3xl overflow-hidden max-w-[300px]">
            <Image
              src="/images/consultation.jpg"
              alt="card"
              width={1000}
              height={1000}
              className="w-[300px] h-auto rounded-3xl object-contain"
            />
            <div className="p-5">
              <h3 className="font-semibold">Card Name</h3>
              <p className="font-light text-slate-400">
                Quis labore qui ullamco ex Lorem.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden max-w-[300px]">
            <Image
              src="/images/consultation.jpg"
              alt="card"
              width={1000}
              height={1000}
              className="w-[300px] h-auto rounded-3xl object-contain"
            />
            <div className="p-5">
              <h3 className="font-semibold">Card Name</h3>
              <p className="font-light text-slate-400">
                Quis labore qui ullamco ex Lorem.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden max-w-[300px]">
            <Image
              src="/images/consultation.jpg"
              alt="card"
              width={1000}
              height={1000}
              className="w-[300px] h-auto rounded-3xl object-contain"
            />
            <div className="p-5">
              <h3 className="font-semibold">Card Name</h3>
              <p className="font-light text-slate-400">
                Quis labore qui ullamco ex Lorem.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden max-w-[300px]">
            <Image
              src="/images/consultation.jpg"
              alt="card"
              width={1000}
              height={1000}
              className="w-[300px] h-auto rounded-3xl object-contain"
            />
            <div className="p-5">
              <h3 className="font-semibold">Card Name</h3>
              <p className="font-light text-slate-400">
                Quis labore qui ullamco ex Lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
