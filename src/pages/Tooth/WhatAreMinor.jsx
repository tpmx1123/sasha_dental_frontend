import React from "react";

export default function WhatAreMinor() {
  return (
    <section className="px-4 py-10 md:py-14 bg-white">
      <div className="max-w-[1170px] mx-auto">
        <h2
          className="text-center font-extrabold text-[18px] sm:text-xl md:text-4xl lg:text-[38px] mb-4 md:mb-8"
          style={{ color: "#0267AC", letterSpacing: "0.5px" }}
        >
          What Are Minor Surgical Procedures?
        </h2>

        <p
          className=" text-left text-gray-700  text-[12px] sm:text-base md:text-xl lg:text-[24px] leading-7 md:leading-9 lg:leading-[46px] tracking-wide"
          style={{letterSpacing: '0.7px'}}
        >
          Minor oral surgeries per tooth address localized dental concerns that require
          precise surgical intervention—such as cyst removal, soft tissue excision,
          alveoloplasty (bone reshaping), apicoectomy (root tip removal), and others.
          These procedures are essential for treating infection, improving function,
          and preparing for restorations or implants.
        </p>

         <p
          className=" text-left text-gray-700  text-[12px] sm:text-base md:text-xl lg:text-[24px] leading-7 md:leading-9 lg:leading-[46px] tracking-wide mt-3 lg:mt-5"
          style={{letterSpacing: '0.7px'}}
        >
          At <span className="font-extrabold" style={{ color: "#2A2333" }}>Sasha Luxe</span>, our experienced
          clinicians perform these procedures with a minimally invasive mindset—combining
          advanced techniques, precision tools, and gentle care for
          <span className="font-extrabold"> optimal healing</span>,
          <span className="font-extrabold"> pain control</span>, and
          <span className="font-extrabold"> lasting oral health</span>.
        </p>
      </div>
    </section>
  );
}

