"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const router = useRouter()
  return (
    <div>
      <ul className="bg-slate-700 text-blue-400 shadow-md flex justify-center p-7 gap-3 className = ">
        <li className=" hover:text-blue-100 cursor-pointer" onClick={()=>router.push('/')}>Home</li>
        <li className=" hover:text-blue-100 cursor-pointer">Chart</li>
        <li className=" hover:text-blue-100 cursor-pointer">Meeting</li>
        <li className=" hover:text-blue-100 cursor-pointer">News</li>
      </ul>
    </div>
  );
};

export default NavBar;
