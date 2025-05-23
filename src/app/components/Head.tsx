"use client";
import React from "react";
import Time from "./Time";
import { motion } from "motion/react";
import ResumeButton from "./ResumeButton";
const Head = () => {
  return (
    <div className="text-sm sm:text-lg flex flex-col w-full justify-end flex-1">
      <div className="flex items-center gap-4 h-36 sm:mb-3">
        <div className="relative flex justify-center items-center w-1/3">
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
            className="absolute z-50 left-21 top-16 w-6 h-6 sm:left-36 sm:top-28 sm:w-10 sm:h-10 bg-green-600 rounded-full border-4"
          /> */}
          <div className="absolute z-50 left-21 top-16 w-6 h-6 sm:left-36 sm:top-28">
            <ResumeButton />
          </div>{" "}
          <motion.div
            initial={{ y: -2000, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: "spring",
              ease: "easeInOut",
              duration: 1,
              delay: 0.5,
            }}
          >
            <img
              src="avatarbw.png"
              alt="profile picture of Nabiel"
              className="hover:border-hubspot border-2 border-accent transition hover:duration-300 ease-in-out  w-24 h-24 sm:w-40 sm:h-40 rounded-full shadow-2xl  object-cover "
            />
          </motion.div>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <div className="flex sm:flex-row flex-col text-xl sm:text-5xl font-semibold sm:gap-4 sm:mb-4">
            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                ease: "easeInOut",
                delay: 0,
                duration: 1,
              }}
            >
              hello, i&apos;m{" "}
            </motion.div>

            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                ease: "easeInOut",
                delay: 0.2,
                duration: 1,
              }}
              className="text-5xl font-black"
            >
              Nabiel<span className="font-semibold">.</span>
            </motion.div>
          </div>
          {/* <h2 className="font-bold mb-4">
            &mdash; always confused, always learning
            &mdash; nice to meet you, stranger
          </h2> */}
          <motion.div
            initial={{ x: 2000, scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "spring",
              ease: "easeInOut",
              delay: 0.4,
              duration: 1,
            }}
            className="hover:border-hubspot border-2 border-accent transition hover:duration-300 ease-in-out  hidden sm:block bg-dark p-3 rounded-lg shadow-2xl"
          >
            <h2 className="flex items-center gap-1">
              ↳ Turning ideas into{" "}
              {/*
              <img
                src="hubspot.png"
                className="w-4 h-4 rounded-lg"
                alt="hubspot"
              />*/}
              <span className="text-hubspot font-bold">code and pixels.</span>
            </h2>{" "}
            <h2 className="flex items-center gap-1">
              ↳ Electronics student @
              <img
                src="waterloo.png"
                className="w-4 h-4 rounded-lg"
                alt="uwaterloo"
              />
              <span className="text-yellow-400 font-bold">VITC</span>
              &mdash; class of &apos;26
            </h2>
          </motion.div>
        </div>
      </div>{" "}
      {/* mobile version */}
      <div className="sm:hidden hover:border-hubspot border-2 border-accent transition hover:duration-300 ease-in-out bg-dark p-3 rounded-lg shadow-2xl">
        <h2 className="flex items-center gap-1">
          ↳ incoming intern @{" "}
          <img src="hubspot.png" className="w-4 h-4 rounded-lg" alt="hubspot" />
          <span className="text-hubspot font-bold">hubspot</span> &mdash; summer
          '25
        </h2>{" "}
        <h2 className="flex items-center gap-1">
          ↳ cs & finance @
          <img
            src="waterloo.png"
            className="w-4 h-4 rounded-lg"
            alt="uwaterloo"
          />
          <span className="text-yellow-400 font-bold">uwaterloo</span>&mdash;
          class of &apos;26
        </h2>{" "}
      </div>
      <Time />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          delay: 1.5,
          duration: 1,
        }}
        className="mt-3 w-full bg-accent h-0.5 rounded-full shadow-3xl "
      />
      {/* <div className="flex flex-col">
        <h1 className="text-5xl font-semibold mb-2"></h1>
        <div className="bg-dark p-3 rounded-lg shadow-2xl">
          <h2 className="">my favourite quote of all time: </h2>

          <h2 className="sm:text-2xl italic">
            "expect disappointment, and you'll never be disappointed."
          </h2>
        </div>
      </div>
      <div className="mt-3 w-full bg-secondary h-0.5 rounded-full shadow-3xl" /> */}
    </div>
  );
};

export default Head;
