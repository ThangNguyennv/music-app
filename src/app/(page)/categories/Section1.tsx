"use client";
import CardItem from "@/app/components/card/CardItem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
  const [dataFinal, setDataFinal] = useState<any>();
  useEffect(() => {
    const categoriesRef = ref(dbFirebase, "categories");
    onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Object.keys(data) để lặp qua từ key của object data
        const categoriesArray = Object.keys(data).map((key) => ({
          id: key,
          image: data[key].image,
          title: data[key].title,
          description: data[key].description,
          link: `/categories/${key}`,
        }));

        setDataFinal(categoriesArray);
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Mục Bài Hát" />
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
