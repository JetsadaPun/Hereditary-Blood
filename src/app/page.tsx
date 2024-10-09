import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="text-5xl font-bold text-center my-5 ">
          เลือกตรวจหมู่เลือด
        </div>
        <img src="./bloodbag.png" alt="Logo" className="h-[100px] w-auto mr-4" />
      </div>

      <div className="flex justify-center gap-6 my-5 mb-36 h-full">
        
        <div className="bg-mainred  rounded-xl flex flex-col items-center p-6 w-[300px] h-[350px] shadow-lg">
          <img src="./selec1.png" alt="Logo" className="h-[150px] w-auto mb-4" />
          <p className="text-center text-white text-lg">ต้องการหมู่เลือดของลูก</p>
          <Link href={'/'}>  {/*ใส่พาทของหน้าตรวจเลือดลูก*/}
            <button className="bg-white text-black px-8 py-3 mt-6 rounded-full text-lg">
              ตรวจ
            </button>
          </Link>
        </div>

      
        <div className="bg-mainred rounded-xl flex flex-col items-center p-6 w-[300px] h-[350px] shadow-lg">
          <img src="./selec2.png" alt="Logo" className="h-[150px] w-auto mb-4 " />
          <p className="text-center text-white text-lg">ต้องการหมู่เลือดของพ่อหรือแม่</p>
          <Link href={'/'}>{/*ใส่พาทของหน้าตรวจเลือดพ่อแม่*/}
            <button className="bg-white text-black px-8 py-3 mt-6 rounded-full text-lg">
              ตรวจ
            </button>
          </Link>
        </div>

        <div className="bg-mainred  rounded-xl flex flex-col items-center p-6 w-[300px] h-[350px] shadow-lg">
          <img src="./selec3.png" alt="Logo" className="h-[150px] w-auto mb-4" />
          <p className="text-center text-white text-lg">ต้องการหมู่เลือดของตนเอง</p>
          <Link href={'/anti_test'}>{/*ใส่พาทของหน้าตรวจเลือดตนเอง*/}
            <button className="bg-white text-black px-8 py-3 mt-6 rounded-full text-lg">
              ตรวจ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
