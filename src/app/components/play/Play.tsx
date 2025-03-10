import { FaBackwardStep, FaForwardStep, FaPlay } from "react-icons/fa6";
import { IoVolumeHighOutline } from "react-icons/io5";

export default function Play() {
  return (
    <>
      <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full py-[20px] z-[999]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center w-[218px]">
            <div className="w-[49px] aspect-square truncate">
              <img
                src="/demo/image-1.png"
                alt="Cô Phòng"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 ml-[12px]">
              <div className="font-[700] text-[15px] text-white mb-[12px]">
                Cô Phòng
              </div>
              <div className="font-[700] text-[12px] text-[#FFFFFF70] italic">
                Hồ Quang Hiếu, Huỳnh Vân
              </div>
            </div>
          </div>

          <div className="flex-1 mx-[67px]">
            <div className="flex items-center justify-center">
              <button className="text-white text-[16px]">
                <FaBackwardStep />
              </button>
              <button className="text-[16px] text-white w-[32px] h-[32px] bg-[#00ADEF] rounded-full inline-flex items-center justify-center mx-[42px]">
                <FaPlay />
              </button>
              <button className="text-white text-[16px]">
                <FaForwardStep />
              </button>
            </div>

            <div className="mt-[11px] relative">
              <div className="h-[4px] w-[80%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px]"></div>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={80}
                className="w-full h-[4px] bg-[#494949] appearance-none rounded-[50px] cursor-pointer range-sm"
              />
            </div>
          </div>

          <div className="w-[184px] flex items-end">
            <button className="text-white text-[16px]">
              <IoVolumeHighOutline />
            </button>
            <div className="ml-[6px] relative">
              <div className="h-[3px] w-[80%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px]"></div>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={80}
                className="w-full h-[3px] bg-[#494949] appearance-none rounded-[50px] cursor-pointer range-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
