"use client";

import React, { useState } from "react";

import { CgClose } from "react-icons/cg";
import Input from "./Inputs/Input";
import Modal from "./Modal";
import TextArea from "./Inputs/TextArea";

type Props = {
  isOpen: boolean;
  setIsOpen: (prev: boolean) => void;
};

export default function FormModal({ isOpen = false, setIsOpen }: Props) {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [company, setCompany] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const [submited, setSubmited] = useState<boolean>(false);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const payload = {
      name,
      email,
      company,
      subject,
      message,
    };
    // DO POST HERE
    setSubmited(true);
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="bg-primary-regular px-5 pt-5 pb-5 rounded-3xl  w-full xl:w-[40w] lg:w-[50vw] md:w-[80vw] mx-5">
        <div className="w-full flex justify-end mb-2">
          <button
            onClick={() => {
              // RESET BEFORE CLOSE
              setSubmited(false);
              setIsOpen(false);
            }}
            className="hover:bg-white/50 p-3 rounded-2xl"
          >
            <span className="text-white flex items-center gap-3">
              <CgClose />
              Close
            </span>
          </button>
        </div>
        {submited ? (
          <div className="flex flex-col justify-center items-center mb-10">
            <h3 className="text-white font-semibold text-4xl">
              Successfully Submitted! 🎉
            </h3>
            <p className="text-white font-light">We will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="grid gap-3 md:grid-cols-2 grid-cols-1 mb-3">
              <Input
                label="Full Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <Input
                label="Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Input
                label="Company Name (Leave Blank If You're An Individual)"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                value={company}
              />
              <Input
                label="Subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject}
              />
            </div>

            <TextArea
              label="Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
            <div className="w-full mt-3 flex justify-center">
              <button
                type="submit"
                className=" text-white bg-black px-5 py-2 rounded-full"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
}
