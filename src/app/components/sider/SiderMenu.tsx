"use client";
import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaHeart, FaMusic, FaPodcast, FaRegUser } from "react-icons/fa6";
import { FiLogOut, FiUserPlus } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import SiderMenuItem from "./SiderMenuItem";

export default function SiderMenu() {
  const [isLogin, SetisLogin] = useState<Boolean>();

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        SetisLogin(true);
      } else {
        SetisLogin(false);
      }
    });
  }, []);
  const menu = [
    {
      icon: <IoMdHome />,
      title: "Trang chủ",
      link: "/",
    },
    {
      icon: <FaMusic />,
      title: "Danh mục bài hát",
      link: "/categories",
    },
    {
      icon: <FaPodcast />,
      title: "ca sĩ",
      link: "/singers",
    },
    {
      icon: <FaHeart />,
      title: "Bài hát yêu thích",
      link: "/wishlist",
      isLogin: true,
    },
    {
      icon: <FiLogOut />,
      title: "Đăng xuất",
      link: "/logout",
      isLogin: true,
    },
    {
      icon: <FaRegUser />,
      title: "Đăng nhập",
      link: "/login",
      isLogin: false,
    },
    {
      icon: <FiUserPlus />,
      title: "Đăng ký",
      link: "/register",
      isLogin: false,
    },
  ];
  return (
    <>
      <nav className="py-[30px] px-[20px]">
        <ul className="">
          {menu.map((item, index) => (
            <SiderMenuItem item={item} isLogin={isLogin} key={index} />
          ))}
        </ul>
      </nav>
    </>
  );
}
