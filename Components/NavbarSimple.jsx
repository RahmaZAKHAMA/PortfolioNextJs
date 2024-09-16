 "use client";
 import Link from "next/link";
 import React, { useState } from "react";

 const NavbarSimple = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);

   return (
     <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50">
       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
         <div className="flex items-center gap-2 rtl:space-x-reverse">
           <img src="/logo.png" className="mb-6 h-16" alt="Logo" />
           <span className="text-2xl font-semibold whitespace-nowrap dark:text-white ml-0 text-blue-900">
             Rahma ZAKHAMA
           </span>
         </div>
         <button
           type="button"
           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
           aria-controls="navbar-default"
           aria-expanded={isOpen}
           onClick={toggleMenu}
         >
           <span className="sr-only">Open main menu</span>
           <svg
             className="w-5 h-5"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 17 14"
           >
             <path
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M1 1h15M1 7h15M1 13h15"
             />
           </svg>
         </button>
         <div
           className={`w-full md:block md:w-auto ${
             isOpen ? "block" : "hidden"
           }`}
           id="navbar-default"
         >
           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
             <li>
               <Link
                 href="/"
                 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                 aria-current="page"
                 onClick={() => setIsOpen(false)}
               >
                 Home
               </Link>
             </li>
             <li>
               <Link
                 href="/Projects"
                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                 onClick={() => setIsOpen(false)}
               >
                 Projects
               </Link>
             </li>
             <li>
               <Link
                 href="/Contact"
                 onClick={() => setIsOpen(false)}
                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
               >
                 Contact
               </Link>
             </li>
           </ul>
         </div>
       </div>
       <div className="border-b border-gray-300 border-[0.5px]"></div>
     </nav>
   );
 };

 export default NavbarSimple;
