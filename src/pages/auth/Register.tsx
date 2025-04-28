// import Logo from "../../Components/Logo";
// import Registerimg from "../../assets/images/register.png";
// import Navauth from "../../Components/Navauth";
// import RegisterForm from "../../Components/RegisterForm";

// export default function RegisterPage() {
//   return (
//     <div className="w-full h-full relative bg-[#F6F6F6]">

//      {/* <div className="w-[1920px] h-[1080px] relative bg-[#F6F6F6] flex flex-col lg:flex-row items-center justify-center"> */}
//       <div className="hidden lg:flex flex-col items-center justify-center w-1/2 max-xl:w-2/5 gap-8">
//         <div className="absolute top-[116px] left-[215px]">
//           <Logo />
//         </div>
//         <img
//           className="absolute top-[378px] left-[224px] w-[480px] h-[456px] object-cover"
//           src={Registerimg}
//           alt="register image"
//         />
//         <div className="absolute top-[291px] left-[142px] opacity-45 w-[226px] h-[226px] bg-[#DDA82A] blur-[137px]"></div>
//         <div className="absolute top-[557px] left-[346px] w-[226px] h-[226px] bg-[#4461F2] blur-[137px]"></div>
//       </div>

//       {/* Right Section: Navigation and Form */}
//       <div className="w-1/2">
//         <div className="absolute top-[110px] left-[1359px] max-md:left-[180px]">
//           <Navauth />
//         </div>
//         <div className="absolute top-[206px] left-[1131px] max-md:left-[20px]">
//           <RegisterForm />
//         </div>
//       </div>
//     </div>
//   );
// }



import Logo from "../../Components/Logo";
import Registerimg from "../../assets/images/register.png"; // Thay ảnh login bằng ảnh đăng ký
import Navauth from "../../Components/Navauth";
import RegisterForm from "../../Components/RegisterForm"; // Tạo hoặc thay thế form đăng ký

export default function Register() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row bg-red-300">
      {/* Left Section (Logo and Image) - Hidden on smaller screens */}
      <div className="hidden xl:flex flex-col items-center justify-center w-full xl:w-1/2 gap-8 relative">
        <div className="absolute top-[116px]">
          <Logo />
        </div>
        <img
          className="absolute top-[378px] w-[480px] h-[456px] object-cover"
          src={Registerimg} // Thay ảnh login.png bằng ảnh đăng ký
          alt="register image"
        />
        <div className="absolute top-[291px] opacity-45 w-[226px] h-[226px] bg-[#DDA82A] blur-[137px]"></div>
        <div className="absolute top-[557px] w-[226px] h-[226px] bg-[#4461F2] blur-[137px]"></div>
      </div>

      {/* Right Section (Register Form) */}
      <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-4/5 max-md:w-full flex flex-col lg:items-center lg:justify-center gap-25 p-4">
        <div className="w-full max-w-md ml-[455px] max-lg:ml-[150px] md:flex md:items-center ">
          <Navauth />
        </div>
        <div className="w-full max-w-md">
          <RegisterForm /> {/* Gọi form đăng ký */}
        </div>
      </div>
    </div>
  );
}
