import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Topbar() {
  return (
    <div className="bg-darkRed flex justify-between items-center py-4 px-5">
      <Link href="/">
        <a>
          <Image src={"/logoPutih.svg"} width="20" height={"20"} alt="logo putih" />
        </a>
      </Link>
      <p className="text-white text-2xl font-medium italic select-none cursor-default">Nomato</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
  );
}
