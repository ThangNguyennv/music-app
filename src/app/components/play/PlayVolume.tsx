/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IoVolumeHighOutline } from "react-icons/io5";

export default function PlayVolume() {
  const handleChange = (event: any) => {
    const elementPlayAudio: any = document.querySelector(".play-audio");

    if (elementPlayAudio) {
      const elementAudio: any = document.querySelector(".inner-audio");
      const volume = parseFloat(event.target.value);
      const elementVolumeCurrent: any = document.querySelector(
        ".inner-volume .inner-current"
      );
      elementAudio.volume = volume / 100; // audio chạy từ 0 -> 1
      elementVolumeCurrent.style.width = `${volume}%`;
    }
  };
  return (
    <>
      <div className="w-[184px] flex items-end inner-volume">
        <button className="text-white text-[16px]">
          <IoVolumeHighOutline />
        </button>
        <div className="ml-[6px] relative">
          <div className="h-[3px] w-[100%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px] inner-current"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={100}
            className="w-full h-[3px] bg-[#494949] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
