"use client";
import React from "react";
import { useState, useEffect } from "react";
import PossibilityCard from "@/app/PossibilityCard";
import datasets, { DataSet } from "@/app/datasets";
import { StepBack } from "lucide-react";
import Link from "next/link";

export default function page() {
  const [fatherBloodType, setFatherBloodType] = useState("ii");
  const [motherBloodType, setMotherBloodType] = useState("ii");
  const [showResults, setShowResults] = useState(false);
  const [selectedData, setSelectedData] = useState<DataSet[]>(datasets[1]);

  useEffect(() => {
    if (fatherBloodType === "ii" && motherBloodType === "ii") {
      setSelectedData(datasets[1]);
    } else if (
      (fatherBloodType === "ii" && motherBloodType === "IᴬIᴬ") ||
      (fatherBloodType === "IᴬIᴬ" && motherBloodType === "ii")
    ) {
      setSelectedData(datasets[2]);
    } else if (
      (fatherBloodType === "ii" && motherBloodType === "Iᴬi") ||
      (fatherBloodType === "Iᴬi" && motherBloodType === "ii")
    ) {
      setSelectedData(datasets[3]);
    } else if (
      (fatherBloodType === "ii" && motherBloodType === "IᴮIᴮ") ||
      (fatherBloodType === "IᴮIᴮ" && motherBloodType === "ii")
    ) {
      setSelectedData(datasets[4]);
    } else if (
      (fatherBloodType === "ii" && motherBloodType === "Iᴮi") ||
      (fatherBloodType === "Iᴮi" && motherBloodType === "ii")
    ) {
      setSelectedData(datasets[5]);
    } else if (
      (fatherBloodType === "ii" && motherBloodType === "IᴬIᴮ") ||
      (fatherBloodType === "IᴬIᴮ" && motherBloodType === "ii")
    ) {
      setSelectedData(datasets[6]);
    } else if (fatherBloodType === "IᴬIᴬ" && motherBloodType === "IᴬIᴬ") {
      setSelectedData(datasets[7]);
    } else if (
      (fatherBloodType === "IᴬIᴬ" && motherBloodType === "Iᴬi") ||
      (fatherBloodType === "Iᴬi" && motherBloodType === "IᴬIᴬ")
    ) {
      setSelectedData(datasets[8]);
    } else if (
      (fatherBloodType === "IᴬIᴬ" && motherBloodType === "IᴮIᴮ") ||
      (fatherBloodType === "IᴮIᴮ" && motherBloodType === "IᴬIᴬ")
    ) {
      setSelectedData(datasets[9]);
    } else if (
      (fatherBloodType === "IᴬIᴬ" && motherBloodType === "Iᴮi") ||
      (fatherBloodType === "Iᴮi" && motherBloodType === "IᴬIᴬ")
    ) {
      setSelectedData(datasets[10]);
    } else if (
      (fatherBloodType === "IᴬIᴬ" && motherBloodType === "IᴬIᴮ") ||
      (fatherBloodType === "IᴬIᴮ" && motherBloodType === "IᴬIᴬ")
    ) {
      setSelectedData(datasets[11]);
    } else if (fatherBloodType === "Iᴬi" && motherBloodType === "Iᴬi") {
      setSelectedData(datasets[12]);
    } else if (
      (fatherBloodType === "Iᴬi" && motherBloodType === "IᴮIᴮ") ||
      (fatherBloodType === "IᴮIᴮ" && motherBloodType === "Iᴬi")
    ) {
      setSelectedData(datasets[13]);
    } else if (
      (fatherBloodType === "Iᴬi" && motherBloodType === "Iᴮi") ||
      (fatherBloodType === "Iᴮi" && motherBloodType === "Iᴬi")
    ) {
      setSelectedData(datasets[14]);
    } else if (
      (fatherBloodType === "Iᴬi" && motherBloodType === "IᴬIᴮ") ||
      (fatherBloodType === "IᴬIᴮ" && motherBloodType === "Iᴬi")
    ) {
      setSelectedData(datasets[15]);
    } else if (fatherBloodType === "IᴮIᴮ" && motherBloodType === "IᴮIᴮ") {
      setSelectedData(datasets[16]);
    } else if (
      (fatherBloodType === "IᴮIᴮ" && motherBloodType === "Iᴮi") ||
      (fatherBloodType === "Iᴮi" && motherBloodType === "IᴮIᴮ")
    ) {
      setSelectedData(datasets[17]);
    } else if (
      (fatherBloodType === "IᴮIᴮ" && motherBloodType === "IᴬIᴮ") ||
      (fatherBloodType === "IᴬIᴮ" && motherBloodType === "IᴮIᴮ")
    ) {
      setSelectedData(datasets[18]);
    } else if (fatherBloodType === "Iᴮi" && motherBloodType === "Iᴮi") {
      setSelectedData(datasets[19]);
    } else if (
      (fatherBloodType === "Iᴮi" && motherBloodType === "IᴬIᴮ") ||
      (fatherBloodType === "IᴬIᴮ" && motherBloodType === "Iᴮi")
    ) {
      setSelectedData(datasets[20]);
    } else if (fatherBloodType === "IᴬIᴮ" && motherBloodType === "IᴬIᴮ") {
      setSelectedData(datasets[21]);
    }

    setShowResults(false);
  }, [fatherBloodType, motherBloodType]);

  return (
    <div>
      <Link href={"/"}>
        <button className="flex justify-center content-center bg-custom-red-bb rounded-xl w-32 mt-3 ml-10 h-10 hover:bg-[#8B0000]">
          <StepBack className="text-white mt-2 mr-2 fill-white"></StepBack>
          <h1 className="text-xl text-white mt-1.5 ">Back</h1>
        </button>
      </Link>
      <div className="min-h-full bg-[#ffffff] flex flex-col items-center p-6 ">
        <h1 className="text-center text-2xl mb-6 font-thin	">
          ตรวจหาความน่าจะเป็นของหมู่เลือดของลูกจากพ่อแม่
        </h1>
        <div className="flex justify-center items-start space-x-40 mb-8 relative ">
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
              <option value="IᴬIᴬ">IᴬIᴬ</option>
              <option value="Iᴬi">Iᴬi</option>
              <option value="IᴮIᴮ">IᴮIᴮ</option>
              <option value="Iᴮi">Iᴮi</option>
              <option value="IᴬIᴮ">IᴬIᴮ</option>
            </select>
          </div>
          <div className=""></div>
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
              <option value="ii">ii</option>
              <option value="IᴬIᴬ">IᴬIᴬ</option>
              <option value="Iᴬi">Iᴬi</option>
              <option value="IᴮIᴮ">IᴮIᴮ</option>
              <option value="Iᴮi">Iᴮi</option>
              <option value="IᴬIᴮ">IᴬIᴮ</option>
            </select>
          </div>
        </div>
        
        <button
            onClick={() => setShowResults(true)}
            className="flex justify-center content-center bg-custom-red-c rounded-2xl w-fit h-fit"
          >
            <h1 className="text-lg text-white px-10 py-3">ตรวจผลลัพธ์</h1>
          </button>
        <div
          className={`flex flex-col justify-center ${
            !showResults ? "hidden" : ""
          }`}
        >
          <div className="text-center ">
            <p className="text-xl font-semibold py-5">
              ความน่าจะเป็นหมู่เลือดของลูกที่จะเกิดขึ้น
            </p>
          </div>
          <div className="flex flex-row justify-center items-center w-full">
            {selectedData.map((data) => (
              <PossibilityCard
                key={data.id}
                type={data.type}
                inf1={data.inf1}
                inf2={data.inf2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
