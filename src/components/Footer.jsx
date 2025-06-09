import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary-black text-primary-white h-[200px]">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Branding */}
          <div className="mb-6 md:mb-0">
            <h4 className="font-bold text-lg">CINEC Smart Navigator</h4>
            <p className="text-sm">Faculty of Computing – B.Sc.(Hons) in Software Engineering</p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" aria-label="Facebook" className="hover:text-primaryRed">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.9h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primaryRed">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.8-.2a.8.8 0 11-1.6 0 .8.8 0 011.6 0z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primaryRed">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75S5.53 5.21 6.5 5.21s1.75.79 1.75 1.75S7.47 8.71 6.5 8.71zm13.5 10.29h-3v-4.8c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.83 1.24-1.83 2.52v4.88h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.63z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primaryRed">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.93 4.93 0 002.15-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48A13.94 13.94 0 011.67 3.15a4.92 4.92 0 001.52 6.56 4.9 4.9 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.82 4.95 4.95 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54a13.94 13.94 0 007.56 2.22c9.07 0 14.04-7.52 14.04-14.04 0-.21 0-.42-.02-.63A10.03 10.03 0 0024 4.56z" />
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-400 my-4" />
        <p className="text-center text-xs">
          © 2025 | IT3111 | Human Computer Interaction – Group Project | All
          rights reserved
        </p>
      </div>
    </footer>
  );
}
