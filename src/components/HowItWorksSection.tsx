import Image from "next/image";
import PresenceAnimation from "./PresenceAnimation";
import React from "react";

type Props = {};

const hiws = [
  {
    imagePath: "/images/how-it-works/register-submit.png",
    title: "Register & Submit Your Project",
    desc: "Register and provide your project details, including location, renovation type, design preferences, budget, and start date.",
  },
  {
    imagePath: "/images/how-it-works/book-appointment.png",
    title: "Book an Appointment",
    desc: "Schedule a virtual or physical appointment to discuss your project with our experts.",
  },
  {
    imagePath: "/images/how-it-works/bill-quantities.png",
    title: "We Prepare Your Bill of Quantities (BQ)",
    desc: "Our team creates a detailed Bill of Quantities (BQ) outlining all materials, labor, and costs.",
  },
  {
    imagePath: "/images/how-it-works/receive-quot.png",
    title: "Receive Quotations from Contractors",
    desc: "Vetted contractors review your Bill of Quantities (BQ) and submit competitive quotes.",
  },
  {
    imagePath: "/images/how-it-works/client-review.png",
    title: "Clients Review and Select",
    desc: "Review quotes and select the best contractor for your project.",
  },
];

export default function HowItWorksSection({}: Props) {
  return (
    <section className="relative bg-gradient-to-r from-secondary-dark to-secondary rounded-b-4xl">
      <div className="container mx-auto py-20">
        <h3 className="text-center text-primary-regular font-bold text-4xl">
          How It Works?
        </h3>
        <div className="mt-20 w-full px-5 grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-3 lg:gap-5 md:gap-3 gap-2 overflow-scroll-x place-items-center place-content-stretch">
          {hiws.map((hiw, index) => (
            <PresenceAnimation
              delay={(index + 1) * 0.2}
              key={index}
            >
              <div className="relative hover:-translate-y-3 hover:shadow-2xl transition-transform bg-gradient-to-tr from-primary-regular to-primary-light rounded-3xl max-w-[300px] min-h-[400px] p-4">
                <Image
                  src={hiw.imagePath}
                  alt="card"
                  width={1000}
                  height={1000}
                  className="w-[300px] h-auto rounded-3xl object-contain"
                />
                <div className="mt-3">
                  <h3 className="text-secondary text-2xl text-center font-semibold mb-3">
                    {hiw.title}
                  </h3>
                  <p className="text-white font-light">{hiw.desc}</p>
                </div>

                <div className="absolute -top-3 -left-3 h-12 w-12 bg-white shadow-lg rounded-full flex justify-center items-center">
                  <span className="text-primary-regular font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
              </div>
            </PresenceAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
