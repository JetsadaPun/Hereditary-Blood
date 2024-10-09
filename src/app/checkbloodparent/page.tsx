"use client";
import React, { useState } from "react";

export default function Page() {
  const [babyBloodType, setBabyBloodType] = useState("IᴬIᴬ");
  const [parentBloodType, setParentBloodType] = useState("IᴬIᴬ");
  const [showResults, setShowResults] = useState(false);
  const [possibleParents, setPossibleParents] = useState<
    Array<{ type: string; percentage: number }>
  >([]);

  // ฟังก์ชันคำนวณความน่าจะเป็นหมู่เลือดของพ่อแม่จากลูก
  const calculateBloodType = () => {
    const possibleOutcomes: { type: string; percentage: number }[] = [];
  
    // ตรวจสอบหมู่เลือดจากลูก
    // ตรวจสอบหมู่เลือดจากพ่อแม่และลูก
    const combinedBloodType = `${parentBloodType}-${babyBloodType}`;

    switch (combinedBloodType) {
      case "IᴬIᴬ-IᴬIᴬ":
        possibleOutcomes.push(
          { type: "IᴬIᴬ", percentage: 100 },
          { type: "Iᴬi", percentage: 0 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "Iᴬi-IᴬIᴬ":
        possibleOutcomes.push(
          { type: "IᴬIᴬ", percentage: 50 },
          { type: "Iᴬi", percentage: 50 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "IᴮIᴮ-IᴮIᴮ":
        possibleOutcomes.push(
          { type: "IᴮIᴮ", percentage: 100 },
          { type: "Iᴮi", percentage: 0 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "Iᴮi-IᴮIᴮ":
        possibleOutcomes.push(
          { type: "IᴮIᴮ", percentage: 50 },
          { type: "Iᴮi", percentage: 50 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "IᴬIᴮ-IᴬIᴮ":
        possibleOutcomes.push(
          { type: "IᴬIᴬ", percentage: 25 },
          { type: "IᴮIᴮ", percentage: 25 },
          { type: "Iᴬi", percentage: 25 },
          { type: "Iᴮi", percentage: 25 },
          { type: "ii", percentage: 0 }
        );
        break;
      case "ii-ii":
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
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h1 className="text-center text-2xl font-semibold mb-6 font-thin">
        ต้องการตรวจหมู่เลือดของพ่อหรือแม่
      </h1>

      <div className="flex justify-start w-full">
        <button
          onClick={() => window.history.back()}
          className="bg-[#802326] text-white text-xl px-4 py-4 rounded-xl hover:bg-[#a63429]"
        >
          <span className="mr-2 text-2xl">&#9666; Back</span>
        </button>
      </div>

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
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center space-x-4">
            <img
              src="/Daddy.png"
              alt="Father"
              className="w-20 h-20 rounded-full mb-4"
            />
            <img
              src="/mom.png"
              alt="Mother"
              className="w-20 h-20 rounded-full mb-4"
            />
          </div>

          <label className="text-lg mb-4">Input ของพ่อหรือแม่ :</label>
          <select
            value={parentBloodType}
            onChange={(e) => setParentBloodType(e.target.value)}
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
      <button
        onClick={calculateBloodType}
        className="bg-[#592520] text-white px-6 py-3 rounded-full text-lg mb-6 bottom-0 hover:bg-[#866c6a]"
      >
        ตรวจผลลัพธ์
      </button>

      {/* ผลลัพธ์ */}
      {showResults && (
        <div className="text-center mb-4">
          <p className="text-xl font-semibold font-thin">
            ความน่าจะเป็นหมู่เลือดที่จะเกิดขึ้นของพ่อหรือแม่
          </p>
          <div className="flex justify-center space-x-8">
          {possibleParents.map((item, index) => (
  <div key={index} className="flex flex-col items-center space-y-4">
    <div className="bg-[#9D3B3B] text-white rounded-full flex items-center justify-center w-52 h-10">
      <p className="font-bold">{item.percentage === 0 ? `${item.type}: คุณไม่ใช่ลูกของพ่อแม่` : `${item.type}: ${item.percentage}%`}</p>
    </div>
  </div>
))}

          </div>
        </div>
      )}
    </div>
  );
}
