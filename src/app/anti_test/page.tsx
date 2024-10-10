"use client";
import { Circle, StepBack } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Result } from "postcss";

export default function page() {
  const [statusClick, setstatusClick] = useState(false);
  const [antigen, setAntigen] = useState("");
  const [antibody, setAntibody] = useState("");
  const [result, setResult] = useState("");
  const [description, setDescription] = useState("");
  const data = [
    { antigen: "antigen A", antibody: "antibody B" },
    { antigen: "antigen B", antibody: "antibody A" },
    { antigen: "antigen A, antigen B", antibody: "None" },
    { antigen: "antigen H", antibody: "antibody A, antibody B" },
    { antigen: "None", antibody: "antibody A, antibody B, antibody H" },
  ];

  const handle_submit = () => {
    if (antigen == "antigen A" && antibody == "antibody B") {
      setResult("มีหมู่เลือด A");
      setstatusClick(true);
      setDescription(
        "หมู่เลือด A จะสามารถให้เลือดกับหมู่เลือด A และ AB ได้ และจะสามารถรับเลือดได้จากหมู่เลือด A และหมู่เลือด O"
      );
    }
    if (antigen == "antigen B" && antibody == "antibody A") {
      setstatusClick(true);
      setResult("มีหมู่เลือด B");
      setDescription(
        "หมู่เลือด B จะสามารถให้เลือดกับหมู่เลือด B และ หมู่เลือด AB ได้ และจะสามารถรับเลือดได้จากหมู่เลือด B และหมู่เลือด O"
      );
    }
    if (antigen == "antigen A, antigen B" && antibody == "None") {
      setstatusClick(true);
      setResult("มีหมู่เลือด AB");
      setDescription(
        "หมู่เลือด AB จะสามารถให้เลือดกับหมู่เลือด AB ได้เท่านั้น แต่จะสามารถรับเลือดได้ทั้ง หมู่เลือด A, หมู่เลือด B, หมู่เลือด AB และ หมู่เลือด O"
      );
    }
    if (antigen == "antigen H" && antibody == "antibody A, antibody B") {
      setstatusClick(true);
      setResult("มีหมู่เลือด O");
      setDescription(
        "หมู่เลือด O จะสามารถให้เลือดได้ทั้งหมู่เลือด A, หมู่เลือด B, หมู่เลือด AB และ หมู่เลือดO แต่จะสามารถรับเลือดได้แค่หมู่เลือด O เท่านั้น"
      );
    }
    if (antigen == "None" && antibody == "antibody A, antibody B, antibody H") {
      setstatusClick(true);
      setResult("มีหมู่เลือด O bombay");
      setDescription(
        "ผู้รับที่มีหมู่เลือด O-bombay จะสามารถรับเลือดจากผู้ให้ที่มีหมู่เลือด O-bombay ได้เท่านั้น"
      );
    }
  };
  return (
    <div>
      <div>
        <Link href={"/"}>
          <button className="flex justify-center content-center bg-custom-red-bb rounded-xl w-32 mt-3 ml-3 h-10">
            <StepBack className="text-white mt-2 mr-2 fill-white"></StepBack>
            <h1 className="text-xl text-white mt-1.5">Back</h1>
          </button>
        </Link>
        <div className="flex justify-center mt-5">
          <h1 className="text-2xl">
            ตรวจสอบหมู่เลือดของตัวเองจากแอนติเจนและแอนติบอดี้
          </h1>
        </div>
        <div className="grid grid-cols-2 justify-center mt-10">
          <div>
            <div className="flex justify-center ml-36">
              <h1 className="text-xl">ANTIGEN</h1>
            </div>
            <div className="flex justify-center ml-36">
              <img src="./antigen.png" className="h-[170px]"></img>
            </div>
            <div className="flex justify-center ml-36 text-center justify-center">
              <Select onValueChange={(value) => setAntigen(value)}>
                <SelectTrigger className="w-[180px] bg-custom-red text-white rounded-3xl text-center justify-center">
                  <SelectValue placeholder="Select Antigen" />
                </SelectTrigger>
                <SelectContent className="bg-custom-red text-white text-center">
                  <SelectGroup>
                    {data.map((item) => (
                      <SelectItem value={item.antigen}>
                        {item.antigen}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <div className="flex justify-center mr-36">
              <h1 className="text-xl">ANTIBODY</h1>
            </div>
            <div className="flex justify-center mr-36">
              <img src="./antibody.png" className="h-[170px]"></img>
            </div>
            <div className="flex justify-center mr-36">
              <Select onValueChange={(value) => setAntibody(value)}>
                <SelectTrigger className="w-[180px] bg-custom-red text-white justify-center rounded-3xl">
                  <SelectValue placeholder="Select Antibody" />
                </SelectTrigger>
                <SelectContent className="bg-custom-red text-white">
                  <SelectGroup>
                    {data
                      .filter((item) => item.antigen == antigen)
                      .map((item) => (
                        <SelectItem value={item.antibody}>
                          {item.antibody}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="flex justify-center content-center bg-custom-red-c rounded-2xl w-fit h-fit"
            onClick={handle_submit}
          >
            <h1 className="text-lg text-white px-10 py-3">ตรวจผลลัพธ์</h1>
          </button>
        </div>
        {statusClick && (
          <div>
            <div className="flex justify-center mt-5">
              <div className="flex card bg-custom-red-r text-white w-fit h-fit rounded-full">
                <div className="flex justify-center px-5 py-3 ">
                  <Circle className="fill-white " />
                  <h1 className="text-lgs ml-3">{result}</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="./light.png"
                className="h-16 absolute mr-[425px] mb-10"
              ></img>
              <div className="grid card bg-custom-red-d text-white w-[450px] h-fit rounded-3xl mt-10 mb-10">
                <div className="flex justify-center">
                  <h1 className="text-lg ml-3 px-5 py-3 mb-10">
                    {description}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
