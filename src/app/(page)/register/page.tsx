"use client";

import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const handleRegister = (event: any) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        set(ref(dbFirebase, "users/" + user.uid), {
          fullName: fullName,
        }).then(() => {
          router.push("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Đăng Ký Tài Khoản" className="text-center" />
        <form className="" onSubmit={handleRegister}>
          <div className="mb-[15px]">
            <label className="" htmlFor="fullName">
              <span className="text-white">Họ Tên</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Ví dụ: Le Van A"
              className="rounded-[6px] bg-[#FFFFFF] h-[50px] w-full text-[14px] font[600] outline-none px-[16px]"
              required={true}
            />
          </div>

          <div className="mb-[15px]">
            <label className="" htmlFor="email">
              <span className="text-white">Email</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ví dụ: levana@gmail.com"
              className="rounded-[6px] bg-[#FFFFFF] h-[50px] w-full text-[14px] font[600] outline-none px-[16px]"
              required={true}
            />
          </div>

          <div className="mb-[15px]">
            <label className="" htmlFor="password">
              <span className="text-white">Mật Khẩu</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              className="rounded-[6px] bg-[#FFFFFF] h-[50px] w-full text-[14px] font[600] outline-none px-[16px]"
              required={true}
            />
          </div>
          <button className="bg-[#00ADEF] text-[16px] font-[700] h-[50px] w-full rounded-[6px] text-white">
            Đăng Ký
          </button>
        </form>
      </div>
    </>
  );
}
