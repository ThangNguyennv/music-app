import { FaPlay, FaRegHeart } from "react-icons/fa6";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart2 from "../button/ButtonHeart2";

export default function SongItem2(props: any) {
  const { image, title, singer, time } = props;
  return (
    <>
      {/* Item */}
      <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]">
        {/* Left */}
        <div className="w-[40%] flex items-center">
          <ButtonPlay {...props} className="text-[24px] text-white" />
          <div className="w-[42px] aspect-square rounded-[8px] truncate mx-[12px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-[700] text-[14px] text-white">{title}</div>
        </div>
        {/* End Left */}

        {/* Center */}
        <div className="w-[30%] text-center">
          <div className="font-[400] text-[14px] text-white">{singer}</div>
        </div>
        {/* End Center */}

        {/* Right */}
        <div className="w-[30%] text-right flex items-center justify-end">
          <div className="font-[400] text-[14px] text-white mr-[18px]">
            {time}
          </div>
          <ButtonHeart2 {...props} />
        </div>
        {/* End Right */}
      </div>
      {/* End Item */}
    </>
  );
}
