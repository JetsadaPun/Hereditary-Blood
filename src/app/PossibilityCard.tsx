import React from 'react'

interface propsType {
    inf1: string;
    inf2: string;
}

const PossibilityCard = ({ inf1, inf2 }: propsType) => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#9D3B3B] text-white rounded-full flex items-center justify-center w-52 h-10">
                <p className="font-bold">{inf1}</p>
            </div>
            <div className="bg-[#c94f52] rounded-lg p-4 w-52 text-center">
                <p className="text-sm text-white">
                    {inf2}
                </p>
            </div>
        </div>
    )
}

export default PossibilityCard