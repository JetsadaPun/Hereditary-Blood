import React from "react";

interface propsType {
    type: string;
    inf1: string;
    inf2: string;
}

const PossibilityCard = ({type, inf1, inf2 }: propsType) => {
  return (
    <div className="flex flex-col items-center space-y-4 relative">
      <div className="bg-[#9D3B3B] text-white rounded-full flex items-center justify-center w-52 h-10">
        <p className="font-bold">{type} : {inf1}</p>
      </div>
      <div className="relative">
        <img src="./light.png" className="absolute start-0 h-16 mb-10"></img>
        <div className="bg-[#c94f52] w-fit text-center text-white h-fit rounded-3xl mt-10 mb-10 mx-4 p-5 font-bold">
          <h1 className="text-sm text-white">{inf2}</h1>
        </div>
      </div>
    </div>
  );
};

export default PossibilityCard;
