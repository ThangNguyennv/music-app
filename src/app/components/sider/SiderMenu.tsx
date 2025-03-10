"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart, FaMusic, FaPodcast, FaRegUser } from "react-icons/fa6";
import { FiLogOut, FiUserPlus } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";

export default function SiderMenu() {
  const pathName = usePathname();
  console.log(pathName);
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
    },
    {
      icon: <FiLogOut />,
      title: "Đăng xuất",
      link: "/logout",
    },
    {
      icon: <FaRegUser />,
      title: "Đăng nhập",
      link: "/login",
    },
    {
      icon: <FiUserPlus />,
      title: "Đăng ký",
      link: "/register",
    },
  ];
  return (
    <>
      <nav className="py-[30px] px-[20px]">
        <ul className="">
          {menu.map((item, index) => (
            <li className="mb-[30px]" key={index}>
              <Link
                href={item.link}
                className={
                  "flex items-center hover:text-[#00ADEF] capitalize " +
                  (pathName === item.link ? "text-[#00ADEF]" : "text-white")
                }
              >
                <span className="text-[20px] mr-[20px]">{item.icon}</span>
                <span className="text-[16px] font-[700]">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
