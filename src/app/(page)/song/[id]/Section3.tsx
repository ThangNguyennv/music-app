import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/Title";

export default function Section3() {
  const data = [
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng 1",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng 2",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng 3",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng 4",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng 5",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      time: "4:32",
    },
  ];
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài hát cùng danh mục" />

        {/* List */}
        <div className="">
          {data.map((item, index) => (
            <SongItem2 key={index} {...item} />
          ))}
        </div>
        {/* End List */}
      </div>
    </>
  );
}
