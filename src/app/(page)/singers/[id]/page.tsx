/* eslint-disable @typescript-eslint/no-explicit-any */
import Section2 from "./Section2";
import Section1 from "./Section1";

export default async function SingerDetailPage({ params }: any) {
  const { id } = await params;
  return (
    <>
      {/* Card Info */}
      <Section1 id={id} />
      {/* End Card Info */}
      {/* Danh sách bài hát */}
      <Section2 id={id} />
      {/* End Danh sách bài hát */}
    </>
  );
}
