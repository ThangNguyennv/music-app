import Title from "@/app/components/title/Title";

export default function LoginPage() {
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-auto">
        <Title text="Đăng Nhập Tài Khoản" className="text-center" />
        <form className="">
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
            <label className="" htmlFor="email">
              <span className="text-white">Mật Khẩu</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              className="rounded-[6px] bg-[#FFFFFF] h-[50px] w-full text-[14px] font[600] outline-none px-[16px]"
              required={true}
            />
          </div>
          <button className="bg-[#00ADEF] text-[16px] font-[700] h-[50px] w-full rounded-[6px] text-white">
            Đăng Nhập
          </button>
        </form>
      </div>
    </>
  );
}
