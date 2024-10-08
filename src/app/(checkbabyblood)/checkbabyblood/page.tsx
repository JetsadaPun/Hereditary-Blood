"use client";
import React from "react";
import { useState } from "react";
export default function page() {
  const [fatherBloodType, setFatherBloodType] = useState("ii");
  const [motherBloodType, setMotherBloodType] = useState("Iᵃ");
  const [showResults, setShowResults] = useState(false);
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col items-center p-6">
      <h1 className="text-center text-2xl font-semibold mb-6 font-thin	">
        ต้องการตรวจหมู่เลือดของลูก จากพ่อและแม่
      </h1>
      <div className="flex justify-center items-start space-x-12 mb-8 relative ">
        <div className="flex flex-col items-center">
          <img
            src="/dad.png"
            alt="Father"
            className="w-20 h-20 rounded-full mb-4"
          />
          <label className="text-lg mb-2">Input ของพ่อ:</label>
          <select
            value={fatherBloodType}
            onChange={(e) => setFatherBloodType(e.target.value)}
            className="bg-[#a63429] text-white px-4 py-2 rounded-lg w-52 text-center"
          >
            <option value="ii">ii</option>
            <option value="Iᵃ">Iᵃ</option>
            <option value="Iᵇ">Iᵇ</option>
          </select>
        </div>
        <button
          onClick={() => setShowResults(true)}
          className="bg-[#592520] text-white px-6 py-3 rounded-full text-lg mb-6 bottom-0"
        >
          ตรวจผลลัพธ์
        </button>
        <div className="flex flex-col items-center ">
          <img
            src="/mom.png"
            alt="Mother"
            className="w-20 h-20 rounded-full mb-4"
          />
          <label className="text-lg mb-2">Input ของแม่:</label>
          <select
            value={motherBloodType}
            onChange={(e) => setMotherBloodType(e.target.value)}
            className="bg-[#a63429] text-white px-4 py-2 rounded-lg w-52 text-center"
          >
            <option value="Iᵃ">Iᵃ</option>
            <option value="Iᵇ">Iᵇ</option>
            <option value="ii">ii</option>
          </select>
        </div>
      </div>

      <div className="text-center mb-4">
        <p className="text-xl font-semibold font-thin">
          ความน่าจะเป็นหมู่เลือดของลูกที่จะเกิดขึ้น
        </p>
      </div>
      <div
        className={`flex justify-center space-x-8 ${
          !showResults ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-[#9D3B3B] text-white rounded-full flex items-center justify-center w-52 h-10">
            <p className="font-bold">ii: กรุ๊ป O : 50%</p>
          </div>
          <div className="bg-[#c94f52] rounded-lg p-4 w-52 text-center">
            <p className="text-sm text-white">
              ให้ได้รับเลือด O แต่กรุ๊ปรับได้คนเดียว
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-[#9D3B3B] text-white rounded-full flex items-center justify-center w-52 h-10">
            <p className="font-bold">Iᵃ: กรุ๊ป A : 50%</p>
          </div>
          <div className="bg-[#c94f52] rounded-lg p-4 w-52 text-center mt-4">
            <p className="text-sm text-white">
              ให้ได้รับเลือด A แต่กรุ๊ปรับได้คนเดียว
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
