import React from "react";

export default function page() {
  return (
    <div className="">
      <nav className=" mx-10 border-b-2 border-b-black">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="excited-blood.webp"
              className="h-10 w-10"
              alt="Blood Logo"
            />
            <p className=" self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              หน้าหลัก
            </p>
          </a>
        </div>
      </nav>
    </div>
  );
}
