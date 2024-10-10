"use client";
import { StepBack } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const [babyBloodType, setBabyBloodType] = useState("IᴬIᴬ");
  const [fatherBloodType, setFatherBloodType] = useState("IᴬIᴬ");
  const [motherBloodType, setMotherBloodType] = useState("IᴬIᴬ");

  const [showResults, setShowResults] = useState(false);
  const [possibleParents, setPossibleParents] = useState<
    Array<{ type: string; percentage: number }>
  >([]);

  // ฟังก์ชันคำนวณความน่าจะเป็นหมู่เลือดของพ่อแม่จากลูก
  const calculateBloodType = () => {
    const possibleOutcomes: { type: string; percentage: number }[] = [];

    // ตรวจสอบหมู่เลือดจากลูก
    // ตรวจสอบหมู่เลือดจากพ่อแม่และลูก
    const combinedBloodType = `${fatherBloodType}-${motherBloodType}-${babyBloodType}`;


    switch (combinedBloodType) {
      case "IᴬIᴬ-IᴬIᴬ-IᴬIᴬ":
        possibleOutcomes.push(
          { type: "IᴬIᴬ", percentage: 100 },
          { type: "Iᴬi", percentage: 0 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "Iᴬi-Iᴬi-Iᴬi":
        possibleOutcomes.push(
          { type: "IᴬIᴬ", percentage: 50 },
          { type: "Iᴬi", percentage: 50 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "IᴮIᴮ-IᴮIᴮ-IᴮIᴮ":
        possibleOutcomes.push(
          { type: "IᴮIᴮ", percentage: 100 },
          { type: "Iᴮi", percentage: 0 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "Iᴮi-Iᴮi-IᴮIᴮ":
        possibleOutcomes.push(
          { type: "IᴮIᴮ", percentage: 50 },
          { type: "Iᴮi", percentage: 50 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "IᴬIᴮ-IᴬIᴮ-IᴬIᴮ":
        possibleOutcomes.push(
          { type: "IᴬIᴬ", percentage: 25 },
          { type: "IᴮIᴮ", percentage: 25 },
          { type: "Iᴬi", percentage: 25 },
          { type: "Iᴮi", percentage: 25 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "ii-ii-ii":
        possibleOutcomes.push(
          { type: "ii", percentage: 100 },
          { type: "Iᴬi", percentage: 0 },
          { type: "Iᴮi", percentage: 0 }
        );
        break;
      default:
        // กรณีที่ไม่ตรงกับเงื่อนไขใด ๆ
        const percentage = 0;
        possibleOutcomes.push({ type: "ไม่ใช่ลูกของพ่อแม่", percentage });
        break;
    }
    

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
        <h1 className="text-center text-2xl font-semibold mb-6 font-thin">
          ต้องการตรวจหมู่เลือดของพ่อหรือแม่
        </h1>

        {/* <div className="flex justify-start w-full">
        <button
          onClick={() => window.history.back()}
          className="bg-[#802326] text-white text-xl px-4 py-4 rounded-xl hover:bg-[#a63429]"
        >
          <span className="mr-2 text-2xl">&#9666; Back</span>
        </button>
      </div> */}

        <div className="flex justify-center items-start space-x-12 mb-8 relative">
          {/* ลูก */}
          <div className="flex flex-col items-center">
            <img
              src="/baby.png"
              alt="baby"
              className="w-20 h-20 rounded-full mb-4 mr-60"
            />
            <label className="text-lg mb-4 mr-60">Input ของลูก :</label>
            <select
              value={babyBloodType}
              onChange={(e) => setBabyBloodType(e.target.value)}
              className="bg-[#a63429] text-white px-4 py-2 rounded-lg w-52 text-center mr-60"
            >
              <option value="IᴬIᴬ">IᴬIᴬ</option>
              <option value="Iᴬi">Iᴬi</option>
              <option value="IᴮIᴮ">IᴮIᴮ</option>
              <option value="Iᴮi">Iᴮi</option>
              <option value="IᴬIᴮ">IᴬIᴮ</option>
              <option value="ii">ii</option>
            </select>
          </div>

          {/* พ่อแม่ */}
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
          <div className="text-center mb-4">
            <div>
              <p className="text-xl font-semibold font-thin py-5">
                ความน่าจะเป็นหมู่เลือดที่จะเกิดขึ้นของพ่อหรือแม่
              </p>
            </div>
            <div className="flex justify-center space-x-8">
              {possibleParents.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 py-5"
                >
                  <div className="bg-[#9D3B3B] text-white rounded-full flex items-center justify-center w-52 h-10">
                    <p className="font-bold ">
                      {item.percentage === 0
                        ? `${item.type}: Unknown`
                        : `${item.type}: ${item.percentage}%`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
