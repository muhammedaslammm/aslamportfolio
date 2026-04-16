"use client";

import { ArrowSquareOut, Copyright } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 mt-[10rem] text-[.7rem] lg:text-[.9rem] text-neutral-400 lg:text-white">
      <div className="w-[85%] lg:w-[55%] flex flex-col lg:flex-row items-center justify-between mx-auto py-2">
        <div className="flex items-center gap-1">
          <Copyright /> {new Date().getFullYear()} All rights reserved.
        </div>
        <div>Built and designed by Muhammed Aslam.</div>
        <a
          href="https://github.com/muhammedaslammm"
          target="_blank"
          className="flex items-center gap-1 hover:text-purple-400 transition-colors"
        >
          Github <ArrowSquareOut weight="bold" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
