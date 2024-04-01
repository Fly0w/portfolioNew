"use client";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between items-center w-full px-12 h-14 border text-center sticky top-0 z-50 bg-inherit shadow-lg">
      <ul className="flex justify-start gap-12 items-center h-full">
        <li>
          <Link href="/">Overview</Link>
        </li>
        <li>
          <Link href="/skills_projects">Skills & Projects</Link>
        </li>
        <li>
          <Link href="/background">Background</Link>
        </li>
        <li>
          <Link href="/">Vision</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/downloads">Downloads</Link>
        </li>
      </ul>

      <div className="flex">
        <Image
          alt="flag"
          src={"/flags/CircleFlagsFr.svg"}
          width={30}
          height={30}
          className="border border-primary rounded-full"
        />
      </div>
    </nav>
  );
}
