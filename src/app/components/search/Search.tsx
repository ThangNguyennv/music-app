/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const router = useRouter(); // Không load lại trang
  const params = useSearchParams(); // Load lại trang không bị mất keyword
  const keywordDefault = params.get("keyword") || "";

  const handleSearch = (event: any) => {
    event.preventDefault();
    const keyword = event.target.keyword.value;
    if (keyword) {
      router.push(`/search?keyword=${keyword}`); // Hiển thị trên url
    }
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center"
      >
        <input
          type="text"
          name="keyword"
          placeholder="Tìm kiếm..."
          className="order-2 text-[16px] font-[600] text-white bg-transparent outline-none flex-1"
          defaultValue={keywordDefault}
        />
        <button
          type="submit"
          className="order-1 text-[22px] text-white mr-[20px]"
        >
          <FaSearch />
        </button>
      </form>
    </>
  );
}
