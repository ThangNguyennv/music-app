import CardInfo from "@/app/components/card/CardInfo";
import Title from "@/app/components/title/Title";
import Section3 from "./Section3";

export default function SongDetailPage() {
  return (
    <>
      {/* Card Info */}
      <CardInfo
        image="/demo/image-7.png"
        title="Cô Phòng"
        description="Hồ Quang Hiếu, Huỳnh Văn"
      />
      {/* End Card Info */}

      {/* Lời bài hát */}
      <div className="mt-[30px]">
        <Title text="Lời bài hát" />
        <div className="bg-[#212121] rounded-[15px] p-[20px] text-white font-[500] text-[14px]">
          Verse: Níu ngàn lời cũng không ngăn được Bàn chân bước đi không báo
          trước Có những điều cất riêng trong lòng Giờ bốn vách ngăn cùng cô
          phòng Trốn chạy rồi hàn huyên với men Cứ thế kết thân cùng ánh đèn Lối
          mòn ngày nào trên phố quen Vẫn đó dáng hình ngày người đến Pre: Rời
          xa, lòng đau, chết trong cơn u sầu Liệu rằng tình đời ai sẽ thấu Dĩ
          vãng xưa vẫn in sâu trong đầu (hah a hah) Chorus: Thời gian không thể
          xoá nhoà đôi ta Có chăng chỉ là mờ phai đi theo tháng năm Rồi khi tỉnh
          giấc mới chợt nhận ra Thật quá khó để quên đi một người Màn đêm u tối
          bao trùm không gian Nói thay tiếng lòng này từ lâu đã vỡ tan Thì ra
          duyên kiếp để mình gặp nhau Dạy nhau tốt hơn xong dành lại cho người
          sau…
        </div>
      </div>
      {/* End Lời bài hát */}

      {/* Bài hát cùng danh mục */}
      <Section3 />
      {/* End Bài hát cùng danh mục */}
    </>
  );
}
