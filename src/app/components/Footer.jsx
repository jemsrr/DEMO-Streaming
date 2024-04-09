import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import appStore from "../assets/appstore.png";
import playStore from "../assets/playstore.png";
import micro from "../assets/image.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-zinc-900 flex flex-col gap-6 py-4 px-[10%]">
        <ul className="flex flex-col justify-normal gap-4 text-gray-300 text-xs md:flex-row">
          <li>Home</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Collection Statement</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
        <h4 className="text-gray-300 text-xs">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </h4>
        <div className="flex flex-col justify-between items-start my-6 md:flex-row gap-6 md:items-center">
          <div className=" text-white text-3xl  flex justify-start gap-6 h">
            <AiFillFacebook />
            <FaTwitter />
            <AiFillInstagram />
          </div>
          <div className=" text-white text-3xl flex flex-col justify-start gap-6 md:flex-row gap-6">
            <Image src={appStore} alt="playStore" height={10} width={150} />
            <Image src={playStore} alt="playStore" height={10} width={150} />
            <Image src={micro} alt="playStore" height={10} width={150} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
