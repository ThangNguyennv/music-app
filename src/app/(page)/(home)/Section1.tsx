import SongItem from "@/app/components/song/SongItem";
import Title from "@/app/components/title/Title";

export default function Section1() {
  return (
    <>
      <div className="flex items-start">
        <div className="w-[534px]">
          <div
            className="w-full flex items-center rounded-[15px] bg-cover"
            style={{ backgroundImage: "url('/demo/background-1.png')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-white mb-[6px]">
                Nhạc EDM
              </div>

              <div className="font-[500] text-[14px] text-white">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
                nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>

            <div className="w-[215px] mr-[22px] mt-[48px]">
              <img
                src="/demo/image-2.png"
                alt="Nhạc EDM"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 ml-[20px]">
          <Title text="Nghe nhiều" />
          <div className="grid grid-cols-1 gap-[12px]">
            {/* Item */}
            <SongItem
              image="/demo/image-3.png"
              title="Cô Phòng"
              singer="Hồ Quang Hiếu, Huỳnh Vân"
              listen={24500}
            />

            <SongItem
              image="/demo/image-4.png"
              title="Hoa Nở Bên Đường"
              singer="Quang Đăng Trần, ACV"
              listen={20500}
            />

            <SongItem
              image="/demo/image-5.png"
              title="Hứa Đợi Nhưng Chẳng Tới"
              singer="Lâm Tuấn, Vương Thiên Tuấn"
              listen={18200}
            />

            {/* End Item */}
          </div>
        </div>
      </div>
    </>
  );
}
