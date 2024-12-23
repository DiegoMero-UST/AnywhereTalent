'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const pathname = usePathname();

  return (

    <nav className="h-[10vh] relative sticky top-0 flex justify-between items-center pl-40 pr-40 grid-rows-1 bg-[#4bb9b4] z-10">
      <div className="pt-20">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Anywhere Talent"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="text-white">
        <ul className="flex gap-20 text-4xl items-center">
          <li>
            <Link className="hover:border-b-2 hover:border-white cursor-pointer" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:border-b-2 hover:border-white cursor-pointer" href="/about">About</Link>
          </li>
          <li>
            <Link className="hover:border-b-2 hover:border-white cursor-pointer" href="/blog">Blog</Link>
          </li>
          <li >
            <Link className="hover:border-b-2 hover:border-white cursor-pointer" href="/contact">Contact</Link>
          </li>
          <li>
            <button className={`${pathname === '/' ? 'hidden' : 'block'} transition easy-in-out bg-[#0A8D94] hover:-translate-y-1 hover:scale-110 hover:bg-cyan-700 rounded-3xl p-5 hover:shadow-2xl shadow-lg text-4xl text-white`}>Book discovery call</button>
          </li>
        </ul>
      </div>

    </nav>
  );
}
