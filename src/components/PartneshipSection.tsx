import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { id: string };

export default function PartnershipSection({ id }: Props) {
  return (
    <section
      id={id}
      className="py-20"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-center text-primary-regular font-bold text-4xl">
            In Collaboration With
          </h3>
          <div className="mt-5 flex gap-5">
            <Link
              target="_blank"
              href={`https://innovationlabs.sunway.edu.my/`}
            >
              <Image
                src={`/images/ilabs-sunway.png`}
                alt="ilab-sunway-logo"
                width={1000}
                height={1000}
                className="h-[100px] w-[200px] object-contain grayscale hover:grayscale-0"
              />
            </Link>
            <Link
              target="_blank"
              href={`https://uitm.edu.my/index.php/en/`}
            >
              <Image
                src={`/images/uitm-logo.png`}
                alt="uitm-logo"
                width={1000}
                height={1000}
                className="h-[100px] w-[200px] object-contain grayscale hover:grayscale-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
