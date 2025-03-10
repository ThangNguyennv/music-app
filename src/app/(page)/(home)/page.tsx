import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Banner Home + Nghe nhiều */}
      <Section1 />
      {/* End Section 1: Banner Home + Nghe nhiều */}

      {/* Section 2: Danh mục nổi bật */}
      <Section2 />
      {/* End Section 2: Danh mục nổi bật */}

      {/* Section 3: Ca Sĩ nổi bật */}
      <Section3 />
      {/* End Section 3: Ca Sĩ nổi bật */}
    </>
  );
}
