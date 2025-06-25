"use client";

import Link from "next/link";
import { SimpleIcon } from "./simple-icons";

type icon = "siX" | "siInstagram" | "siGithub" | "siYoutube";

export default function Socials() {
  const socials = [
    {
      icon: "siX" as icon,
      href: "https://x.com/bentsignal",
      size: 18,
    },
    {
      icon: "siInstagram" as icon,
      href: "https://instagram.com/bentsignal",
      size: 18,
    },

    {
      icon: "siGithub" as icon,
      href: "https://github.com/bentsignal",
      size: 18,
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4 flex-row">
      {socials.map((social) => (
        <Link
          href={social.href}
          key={social.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SimpleIcon
            icon={social.icon}
            size={social.size}
            className="fill-black dark:fill-white"
          />
        </Link>
      ))}
    </div>
  );
}
