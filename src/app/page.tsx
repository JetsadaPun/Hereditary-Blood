"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full bg-[#ffffff] ">
      <div className="flex items-center justify-center ">
        <div className="text-5xl font-bold text-center my-5 underline">
          เลือกตรวจหมู่เลือด 
        </div>
        <img src="./blood_bag.png" className="h-[80px] w-auto mr-4"/>
      </div>

      <div className="flex justify-center gap-6 my-5 mb-36 h-full">
        <div className="bg-mainred  rounded-xl flex flex-col items-center p-6 w-[300px] h-[350px] shadow-lg  transition-transform duration-200 hover:scale-105">
          <img
            src="./selec1.png"
            alt="Logo"
            className="h-[150px] w-auto mb-4"
          />
          <p className="text-center text-white text-lg ">
            ต้องการตรวจหมู่เลือดของลูก
          </p>
          <Link href={"/checkbabyblood"}>
            {" "}
            {/*ใส่พาทของหน้าตรวจเลือดลูก*/}
            <button className="bg-white text-black px-20 py-3 mt-6 rounded-full text-lg">
              ตรวจ
            </button>
          </Link>
        </div>

        <div className="bg-mainred rounded-xl flex flex-col items-center p-6 w-[300px] h-[350px] shadow-lg  transition-transform duration-200 hover:scale-105">
          <img
            src="./selec2.png"
            alt="Logo"
            className="h-[150px] w-auto mb-4 "
          />
          <p className="text-center text-white text-lg">
            ต้องการตรวจหมู่เลือดของพ่อ/แม่
          </p>
          <Link href={"/checkbloodparent"}>
            {/*ใส่พาทของหน้าตรวจเลือดพ่อแม่*/}
            <button className="bg-white text-black px-20 py-3 mt-6 rounded-full text-lg">
              ตรวจ
            </button>
          </Link>
        </div>

        <div className="bg-mainred  rounded-xl flex flex-col items-center p-6 w-[300px] h-[350px] shadow-lg  transition-transform duration-200 hover:scale-105">
          <img
            src="./selec3.png"
            alt="Logo"
            className="h-[150px] w-auto mb-4"
          />
          <p className="text-center text-white text-lg">
            ต้องการตรวจหมู่เลือดของตนเอง
          </p>
          <Link href={"/anti_test"}>
            {/*ใส่พาทของหน้าตรวจเลือดตนเอง*/}
            <button className="bg-white text-black px-20 py-3 mt-6 rounded-full text-lg">
              ตรวจ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
