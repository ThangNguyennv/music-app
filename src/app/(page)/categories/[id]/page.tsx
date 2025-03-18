/* eslint-disable @typescript-eslint/no-explicit-any */
import Section2 from "./Section2";
import Section1 from "./Section1";

export default async function SongsByCategoryPage({ params }: any) {
  const { id } = await params;
  return (
    <>
      {/* CardInfo */}
      <Section1 id={id} />
      {/* End CardInfo */}

      {/* Section 2 */}
      <Section2 id={id} />
      {/* End Section 2 */}
    </>
  );
}
