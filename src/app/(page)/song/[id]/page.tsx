import Title from "@/app/components/title/Title";
import Section3 from "./Section3";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default async function SongDetailPage({ params }: any) {
  const { id } = await params;

  return (
    <>
      {/* Card Info */}
      <Section1 id={id} />
      {/* End Card Info */}

      {/* Lời bài hát */}
      <Section2 id={id} />
      {/* End Lời bài hát */}

      {/* Bài hát cùng danh mục */}
      <Section3 id={id} />
      {/* End Bài hát cùng danh mục */}
    </>
  );
}
