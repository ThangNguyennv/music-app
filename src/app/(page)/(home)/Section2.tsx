import CardItem from "@/app/components/card/CardItem";
import Title from "@/app/components/title/Title";

export default function Section2() {
  const data = [
    {
      image: "/demo/image-6.png",
      title: "Nhạc trẻ",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
    {
      image: "/demo/image-6.png",
      title: "Nhạc trẻ",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
    {
      image: "/demo/image-6.png",
      title: "Nhạc trẻ",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
    {
      image: "/demo/image-6.png",
      title: "Nhạc trẻ",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
    {
      image: "/demo/image-6.png",
      title: "Nhạc trẻ",
      description:
        "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
      link: "",
    },
  ];
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Mục Nổi bật" />
        <div className="grid grid-cols-5 gap-[20px]">
          {data.map((item, index) => (
            <CardItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
