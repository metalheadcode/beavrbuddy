import React from "react";

type Props = {};

export default function UnderMaintenanceSection({}: Props) {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center font-semibold text-5xl mb-3">
          Under maintenance
        </h3>
        <p className="text-center text-slate-500">
          This page is currently under maintenance. Please check back later.
        </p>
      </div>
    </section>
  );
}
