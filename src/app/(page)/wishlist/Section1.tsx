import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/Title";

export default function Section1() {
  const data = [
    {
      image: "/demo/image-3.png",
      title: "Nơi này có anh",
      singer: "Sơn Tùng M-TP",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Nơi này có anh",
      singer: "Sơn Tùng M-TP",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Nơi này có anh",
      singer: "Sơn Tùng M-TP",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Nơi này có anh",
      singer: "Sơn Tùng M-TP",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Nơi này có anh",
      singer: "Sơn Tùng M-TP",
      time: "4:32",
    },
  ];

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài Hát Yêu Thích" />

        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Item */}
          {data.map((item: any) => (
            <SongItem2 key={item.id} {...item} />
          ))}
          {/* End Item */}
        </div>
        {/* End List */}
      </div>
    </>
  );
}
