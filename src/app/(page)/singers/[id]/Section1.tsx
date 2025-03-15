"use client";

import CardInfo from "@/app/components/card/CardInfo";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1(props: { id: string }) {
  const { id } = props;

  const [dataFinal, setDataFinal] = useState<any>();
  useEffect(() => {
    const singleRef = ref(dbFirebase, "singers/" + id);
    onValue(singleRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setDataFinal({
          image: data.image,
          title: data.title,
          description: data.description,
        });
      }
    });
  }, []);

  return (
    <>
      {dataFinal && (
        <>
          <CardInfo
            image={dataFinal.image}
            title={dataFinal.title}
            description={dataFinal.description}
          />
        </>
      )}
    </>
  );
}
