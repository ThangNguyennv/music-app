import Title from "@/app/components/title/Title";

export default function LoginPage() {
  return (
    <>
      <div className="">
        <Title text="Đăng Nhập Tài Khoản" />
        <form className="">
          <div className="">
            <label className="" htmlFor="email">
              <span className="">Email</span>
              <span className="">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ví dụ: levana@gmail.com"
              className=""
              required={true}
            />
          </div>
        </form>
      </div>
    </>
  );
}
