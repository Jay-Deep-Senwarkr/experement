"use client";
import AboutUs from "@/components/AboutUs";
import Card from "@/components/Card";
import ContactUs from "@/components/ContactUs";

import Navbar from "@/components/Navbar";
import Typewritting from "@/components/Typewritting";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen" id="home">
      <div className="">
        <Navbar />
      </div>
      <main className="flex w-full" style={{ height: "100vh" }}>
        <div className="flex w-1/2 justify-center items-center ">
          <Typewritting />
        </div>
        <div className="flex w-1/2 justify-center  items-center">
          <ContactUs />
        </div>
      </main>
      <div className="flex w-full p4">
        <Card />
      </div>
      <div className="flex items-center justify-center">
        <AboutUs />
      </div>
    </div>
  );
};

export default Page;
