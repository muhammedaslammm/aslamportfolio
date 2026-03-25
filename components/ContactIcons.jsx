"use client";

import { EnvelopeSimple, Phone } from "phosphor-react";

const ContactIcons = () => {
  return (
    <ul className="flex items-center gap-2 text-neutral-500">
      <li>
        <EnvelopeSimple className="w-[1.2rem] h-[1.2rem] cursor-pointer hover:text-white transition-colors" />
      </li>
      <li>
        <Phone className="w-[1.2rem] h-[1.2rem] cursor-pointer hover:text-white transition-colors" />
      </li>
    </ul>
  );
};

export default ContactIcons;
