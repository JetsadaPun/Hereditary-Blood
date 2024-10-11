"use client";
import { StepBack } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import datasets, { DataSet } from "@/app/datasets";

export default function Page() {
  const [babyBloodType, setBabyBloodType] = useState("IᴬIᴬ");
  const [fatherBloodType, setFatherBloodType] = useState("IᴬIᴬ");
  const [motherBloodType, setMotherBloodType] = useState("IᴬIᴬ");
  const [selectedData, setSelectedData] = useState<DataSet[]>(datasets[1]);
  const [showResults, setShowResults] = useState(false);
  const [possibleParents, setPossibleParents] = useState<
    Array<{ type: string; percentage: number }>
  >([]);
  const [results, setResults] = useState(
    "มีความสอดคล้องกันของหมู่เลือดมีโอกาสที่ลูกจะเป็นลูกของพ่อและแม่"
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
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
    } else {
      setSelectedData([]);
      setCount(-1);
      // setResults("ข้อมูลไม่เพียงพอ ไม่สามารถวิเคราะห์ได้")
    }
    // console.log(selectedData);
    setShowResults(false);
  }, [fatherBloodType, motherBloodType, babyBloodType]);

  useEffect(() => {
    selectedData.map((data) => {
      console.log(babyBloodType, data.type);
      if (babyBloodType === data.type) {
        setCount(count + 1);
      }
    });
  }, [selectedData, babyBloodType]);

  useEffect(() => {
    console.log(count);

    if (count >= 1) {
      setResults(
        "มีความสอดคล้องกันของหมู่เลือดมีโอกาสที่ลูกจะเป็นลูกของพ่อและแม่"
      );
    } else if (count == 0) {
      setResults(
        "ไม่มีความสอดคล้องกันของหมู่เลือดมีโอกาสที่ลูกจะไม่ใช่ลูกของพ่อและแม่"
      );
    } else if (count == -1) {
      setResults("ข้อมูลไม่เพียงพอ ไม่สามารถวิเคราะห์ได้");
    }
  }, [count]);
  // ฟังก์ชันคำนวณความน่าจะเป็นหมู่เลือดของพ่อแม่จากลูก
  const calculateBloodType = () => {
    const possibleOutcomes: { type: string; percentage: number }[] = [];

    // ตรวจสอบหมู่เลือดจากลูก
    // ตรวจสอบหมู่เลือดจากพ่อแม่และลูก
    const combinedBloodType = `${fatherBloodType}-${motherBloodType}-${babyBloodType}`;

    // switch (combinedBloodType) {
    //   case "IᴬIᴬ-IᴬIᴬ-IᴬIᴬ":
    //     possibleOutcomes.push(
    //       { type: "IᴬIᴬ", percentage: 100 },
    //       { type: "Iᴬi", percentage: 0 },
    //       { type: "ii", percentage: 0 }
    //     );
    //     break;
    //   case "Iᴬi-Iᴬi-Iᴬi":
    //     possibleOutcomes.push(
    //       { type: "IᴬIᴬ", percentage: 50 },
    //       { type: "Iᴬi", percentage: 50 },
    //       { type: "ii", percentage: 0 }
    //     );
    //     break;
    //   case "IᴮIᴮ-IᴮIᴮ-IᴮIᴮ":
    //     possibleOutcomes.push(
    //       { type: "IᴮIᴮ", percentage: 100 },
    //       { type: "Iᴮi", percentage: 0 },
    //       { type: "ii", percentage: 0 }
    //     );
    //     break;
    //   case "Iᴮi-Iᴮi-IᴮIᴮ":
    //     possibleOutcomes.push(
    //       { type: "IᴮIᴮ", percentage: 50 },
    //       { type: "Iᴮi", percentage: 50 },
    //       { type: "ii", percentage: 0 }
    //     );
    //     break;
    //   case "IᴬIᴮ-IᴬIᴮ-IᴬIᴮ":
    //     possibleOutcomes.push(
    //       { type: "IᴬIᴬ", percentage: 25 },
    //       { type: "IᴮIᴮ", percentage: 25 },
    //       { type: "Iᴬi", percentage: 25 },
    //       { type: "Iᴮi", percentage: 25 },
    //       { type: "ii", percentage: 0 }
    //     );
    //     break;
    //   case "ii-ii-ii":
    //     possibleOutcomes.push(
    //       { type: "ii", percentage: 100 },
    //       { type: "Iᴬi", percentage: 0 },
    //       { type: "Iᴮi", percentage: 0 }
    //     );
    //     break;
    //   default:
    //     // กรณีที่ไม่ตรงกับเงื่อนไขใด ๆ
    //     const percentage = 0;
    //     possibleOutcomes.push({ type: "ไม่ใช่ลูกของพ่อแม่", percentage });
    //     break;
    // }

    setPossibleParents(possibleOutcomes);
    setShowResults(true);
  };

  return (
    <div>
      <div className="">
        <Link href={"/"}>
          <button className="flex justify-center content-center bg-custom-red-bb rounded-xl w-32 mt-3 ml-3 h-10">
            <StepBack className="text-white mt-2 mr-2 fill-white"></StepBack>
            <h1 className="text-xl text-white mt-1.5">Back</h1>
          </button>
        </Link>
      </div>
      <div className="min-h-full bg-[#ffffff] flex flex-col items-center p-6">
        <h1 className="text-center text-2xl font-semibold mb-6">
          ต้องการตรวจความสอดคล้องกันของหมู่เลือด
        </h1>

        {/* <div className="flex justify-start w-full">
        <button
          onClick={() => window.history.back()}
          className="bg-[#802326] text-white text-xl px-4 py-4 rounded-xl hover:bg-[#a63429]"
        >
          <span className="mr-2 text-2xl">&#9666; Back</span>
        </button>
      </div> */}

        <div className="flex justify-center items-start space-x-12 mb-8 relative ">
          {/* ช่องว่าง */}
          <div className="flex flex-col items-center mr-25">
            <div className="w-52"></div>
          </div>

          {/* ลูก */}
          <div className="flex flex-col items-center mr-25">
            <img
              src="/baby.png"
              alt="baby"
              className="w-20 h-20 rounded-full mb-4"
            />
            <label className="text-lg mb-4">Input ของลูก :</label>
            <select
              value={babyBloodType}
              onChange={(e) => setBabyBloodType(e.target.value)}
              className="bg-[#a63429] text-white px-4 py-2 rounded-lg w-52 text-center "
            >
              <option value="IᴬIᴬ">IᴬIᴬ</option>
              <option value="Iᴬi">Iᴬi</option>
              <option value="IᴮIᴮ">IᴮIᴮ</option>
              <option value="Iᴮi">Iᴮi</option>
              <option value="IᴬIᴮ">IᴬIᴮ</option>
              <option value="ii">ii</option>
            </select>
          </div>
          <div className="w-40"></div>
          {/* รูปพ่อ */}
          <div className="flex flex-col items-center">
            <img
              src="/Daddy.png"
              alt="Father"
              className="w-20 h-20 rounded-full mb-4"
            />
            <label className="text-lg mb-4">Input ของพ่อ :</label>
            <select
              value={fatherBloodType}
              onChange={(e) => setFatherBloodType(e.target.value)}
              className="bg-[#a63429] text-white px-4 py-2 rounded-lg w-52 text-center"
            >
              <option value="IᴬIᴬ">IᴬIᴬ</option>
              <option value="Iᴬi">Iᴬi</option>
              <option value="IᴮIᴮ">IᴮIᴮ</option>
              <option value="Iᴮi">Iᴮi</option>
              <option value="IᴬIᴮ">IᴬIᴮ</option>
              <option value="ii">ii</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
          
          {/* รูปแม่ */}
          <div className="flex flex-col items-center">
            <img
              src="/mom.png"
              alt="Mother"
              className="w-20 h-20 rounded-full mb-4"
            />
            <label className="text-lg mb-4">Input ของแม่ :</label>
            <select
              value={motherBloodType}
              onChange={(e) => setMotherBloodType(e.target.value)}
              className="bg-[#a63429] text-white px-4 py-2 rounded-lg w-52 text-center"
            >
              <option value="IᴬIᴬ">IᴬIᴬ</option>
              <option value="Iᴬi">Iᴬi</option>
              <option value="IᴮIᴮ">IᴮIᴮ</option>
              <option value="Iᴮi">Iᴮi</option>
              <option value="IᴬIᴮ">IᴬIᴮ</option>
              <option value="ii">ii</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
        </div>
        {/* ปุ่มคำนวณ */}
        <div className="flex justify-center mt-10">
          <button
            onClick={calculateBloodType}
            className="flex justify-center content-center bg-custom-red-c rounded-2xl w-fit h-fit"
          >
            <h1 className="text-lg text-white px-10 py-3">ตรวจผลลัพธ์</h1>
          </button>
        </div>
        {/* ผลลัพธ์ */}
        {showResults && (
          <div className="text-center mb-4 relative">
            <div>
              <p className="text-xl font-semibold pt-5">
                ความสอดคล้องกันของหมู่เลือด
              </p>
            </div>
            <div className="flex justify-center space-x-8 ">
              <img
                src="./light.png"
                className="absolute start-0 h-16 mb-10"
              ></img>
              <div
                className={`${
                  results ===
                  "ไม่มีความสอดคล้องกันของหมู่เลือดมีโอกาสที่ลูกจะไม่ใช่ลูกของพ่อและแม่"
                    ? "bg-[#c94f52]"
                    : results === "มีความสอดคล้องกันของหมู่เลือดมีโอกาสที่ลูกจะเป็นลูกของพ่อและแม่" ? "bg-[#66a65c]" : "bg-[#febe43]"}
                } text-white h-fit rounded-3xl mt-10 mb-10 mx-4 p-5 font-bold`}
              >
                <h1 className="text-lg ml-3 px-5 py-3 ">{results}</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
