import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "../Section2";

export default function SingerDetailPage() {
  return (
    <>
      {/* Card Info */}
      <CardInfo
        image="/demo/image-8.png"
        title="Sơn Tùng M-TP"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      {/* End Card Info */}
      {/* Danh sách bài hát */}
      <Section2 />
      {/* End Danh sách bài hát */}
    </>
  );
}
