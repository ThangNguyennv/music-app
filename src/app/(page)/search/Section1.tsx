"use client";

import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1() {
  const params = useSearchParams(); // Load lại trang không bị mất keyword
  const keywordDefault = params.get("keyword") || "";

  // Tìm kiếm bài hát có từ khóa keyword
  const [dataFinal, setDataFinal] = useState<any>();
  useEffect(() => {
    const songsRef = ref(dbFirebase, "songs");
    onValue(songsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let songsArray = Object.keys(data).map((key) => ({
          id: key,
          image: data[key].image,
          title: data[key].title,
          singer: "Sơn Tùng M-TP",
          listen: data[key].listen,
          singerId: data[key].singerId,
          categoryId: data[key].categoryId,
          time: "4:32",
        }));

        const regex = new RegExp(keywordDefault, "i");
        songsArray = songsArray.filter((item) => regex.test(item.title));

        setDataFinal(songsArray);
      }
    });
  }, [keywordDefault]);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Kết quả tìm kiếm" />

        {/* List */}
        <div className="grid grid-cols-1 gap-[10px]">
          {dataFinal && (
            <>
              {/* Item */}
              {dataFinal.map((item: any) => (
                <SongItem2 key={item.id} {...item} />
              ))}
              {/* End Item */}
            </>
          )}
        </div>
        {/* End List */}
      </div>
    </>
  );
}
