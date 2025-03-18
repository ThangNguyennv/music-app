"use client";
// @typescript-eslint/no-explicit-any

import CardItem from "@/app/components/card/CardItem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section3() {
  const [dataFinal, setDataFinal] = useState<any>();
  useEffect(() => {
    const singersRef = ref(dbFirebase, "singers");
    onValue(singersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Object.keys(data) để lặp qua từ key của object data
        let singersArray = Object.keys(data).map((key) => ({
          id: key,
          image: data[key].image,
          title: data[key].title,
          description: data[key].description,
          link: `/singers/${key}`,
        }));

        singersArray = singersArray.slice(0, 5);
        setDataFinal(singersArray);
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Ca Sĩ Nổi Bật" />
        <div className="grid grid-cols-5 gap-[20px]">
          {dataFinal && (
            <>
              {dataFinal.map((item: any, index: number) => (
                <CardItem key={index} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
