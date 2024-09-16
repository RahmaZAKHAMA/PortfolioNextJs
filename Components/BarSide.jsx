"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [OpenNav, setOpenNav] = useState(false);
  const toggleMenu = () => setOpenNav(!OpenNav);

  return (
    <div className="relative mt-20">
      {/* Toggle Button */}
      <button
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed  left-0 z-40 w-64 h-screen transition-transform ${
          OpenNav ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:block`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACUCAMAAAA02EJtAAAAMFBMVEXk5ueutLfn6eqqsLTM0NLq7O26v8KnrrHf4eLHy82xt7rS1dfY29zU2Nnb3t/DyMryEXPkAAAD7klEQVR4nO2c2XLkIAwAQdz4+v+/XRg7GydxPICwoCr0U3bz0iULcYkwNhgMBoPBYDAYDAaDwaArlAJm54B9/dgtwGanPT/wWlro0RbYOmlh+Jnwz21hndmCmjcv+E+E0M6q1nonwOoLzf+4bvIA7GbuTLngUx9pAMvlp/8qq20Hrmp75/nCz81drX4b0h0jm5umiUZX1zSukCwaEC1drX8veI7r1s41/esfrrKRq9oSR9SJNnUApvvCf4lfW5iu+aJxLmgR1txE3TELuSvI/ETdseSqhaJcUFes8qDSj6xS0RhWUlFEUIMrqSpLXU9dQTtnzeWiAU+oCg4RVE46vULeiuoHjm4Pawtm/zOazBQ1/iN+plJVZdP/J4JsIaCQplyQbQktWpVswsJV1QjVuIIJreqpVCValVOpOrSpIFpfQ9op1R1mqP5tVbJcxVcAqo0AerXCyYoVW9CmZKtA/BqATBWwCSAclapC7le4mKjWq+iZlW4XwFbs3orwiA0ZVcITNig4Wj9Deca64FTpRLNvgb4iNOWtO+okiGpZdagW3Vkc0J2tvECcWoiFVpWx4tJKHFRMvaK/ECwsArTDf6f04KLFbWBZCpCPqZ0C01bdC9nFtc1lcAQyN1mC6lTtyjWvJcCT3wSfUBlloHVbGCzJ5VW3brYD+77NLmJoL4F/IekIi2yPeot637/YRfdiBKwTN7LGN5qiLoHfs0D4qbXdNxST2n+Lbfin35ZuWoI/iY3hmxbGiJelMVy7pc8edsZehdMuUjonp9ke/9EpEFA78ccuTeF4ZjFNMaYBKeW0zOv+i24I0YtZ6i+nWK83OXeQCADWLk7zfSj9Wq7Cr8MIW9sNMVA2xvKu+H8pXCG+UxNbYFPJqUV8gkOqCXbSt9/8Jrom2FLlLrDl+mlNKsZvJA9FACbspUXEy6dlwcrEYfQOIdyTWRuWJB55YXGW9c/JKlnj05/x8pniNet6Ef1APHCDcbN2RspulbMgYftUjJcVjzFDSOt/+09MvU0irJh25QSEr5SxKv0ApZwqSQDuyY//QZVmBuR1aoYrMgng4TQ9uyKng+dq1E88qhCQxTSCOYCt0KaW6Vqqim1QKKCwDoCkqFLfKLosAnxHdQFFbU2JB+fVXfNvYRTp4D+Rna6AbKRBkPsaC9VHgyQvBbAPqjDkdgw0E+WxYygjBUoeflcka9JqUPzPpG8KVMNMjeQ8HGo4/HdSi0CFlz9I0l+6th1UEZ9Yr1qW/wOTGNS5eVC5SMyACo8p0KTNWOinnzVI6x1Sjev/i7S/dwBdqCZNWNim/zokjavJiPak/ZmmVfZA2tMR6IIk1cEf4h/bxDWtKov23AAAAABJRU5ErkJggg=="
              className="md:h-16 me-3 sm:h-7 ml-24 rounded-full"
              alt="Flowbite Logo"
            />
          </a>
          <ul className="space-y-2 font-medium">
            {/* Sidebar Links */}
            {[
              {
                name: "GitHub",
                path: "https://github.com",
                icon: "M12 2.5C5.9 2.5 1 7.4 1 12.9c0 5 3.2 9.2 7.7 10.6.6.1.8-.3.8-.7v-2.7c-3.1.7-3.7-1.5-3.7-1.5-.5-1.3-1.2-1.6-1.2-1.6-.9-.6.1-.6.1-.6 1.1.1 1.6 1.1 1.6 1.1 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.6 0-1.2.4-2.2 1.1-3-1.1-.3-2.5-.6-3.7-1.2 0 0-.7.7-1.2 1-.3-1.2.1-2.5.8-3.5 1.2.1 2.4.9 3.3 1.6.9-.2 1.8-1.1 1.8-2.3 0-1.2-.8-2.2-1.9-2.6-.6-.1-1.3-.1-2-.1-.8 0-1.5.1-2.3.3-.8.2-1.5.7-2.1 1.3-.6.7-1.2 1.5-1.6 2.3-.1.2-.1.5-.2.7 0 .2-.1.5-.2.8-.2.4-.5.8-.9 1.2-.4.3-.8.5-1.2.8-.5.2-.8.4-1.2.6-1.5 1-2.6 2.4-3.4 3.8.7 1.8 2.1 2.7 3.4 3.3 2.2 1.1 4.5 1.8 7.1 1.8 5.1 0 9.2-3.3 9.2-7.8 0-4.5-4.1-7.8-9.2-7.8z",
             
              },
              {
                name: "Projects",
                path: "Projects",
                icon: "M2 2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm0 2h16v14H2V4Zm2 2h12v10H4V6Z",
              },
              {
                name: "Documents",
                path: "#",
                icon: "M8.636 9.636a3.5 3.5 0 1 1 2.728 0L17 15v2H3v-2l5.364-5.364ZM15 12.318l-4.55-4.55a1 1 0 0 0-1.414 0L5 12.318V14h10v-1.682Z",
              },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d={item.icon} />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {item.name}
                  </span>
                  {item.name === "Inbox" && (
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      3
                    </span>
                  )}
                  {item.name === "Kanban" && (
                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
