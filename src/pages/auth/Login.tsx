// import Logo from "../../Components/Logo";
// import Loginimg from "../../assets/images/login.png";
// import Navauth from "../../Components/Navauth";
// import LoginForm from "../../Components/LoginForm";

// export default function Login() {
//   return (
//     <div className="w-[1920px]  h-[1080px] relative bg-red-300 ">
//     {/* <div className="w-full  h-screen relative bg-red-300 "> */}
//       <div className="max-md:hidden max-sm:w-[0px]  lg:flex flex-col items-center justify-center w-1/2 max-xl:w-2/5  gap-8">
//         <div className="absolute top-[116px] left-[215px]">
//           <Logo />
//         </div>
//         <img
//           className="absolute top-[378px] left-[224px] w-[480px]  h-[456px] object-cover "
//           src={Loginimg}
//           alt="login image"
//         />
//         <div className="absolute top-[291px] left-[142px] opacity-45 w-[226px] h-[226px] bg-[#DDA82A] blur-[137px]"></div>
//         <div className="absolute top-[557px] left-[346px] w-[226px] h-[226px] bg-[#4461F2] blur-[137px]"></div>
//       </div>

//       <div className="w-1/2 md:w-full max-sm:w-full max-md:flex max-md:justify-center">
//         <div className="absolute top-[110px] left-[1366px] max-md:left-[180px]">
//           <Navauth />
//         </div>
//         <div className="absolute top-[236px] left-[1201px] max-md:left-[20px]">
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// }





import Logo from "../../Components/Logo";
import Loginimg from "../../assets/images/login.png";
import Navauth from "../../Components/Navauth";
import LoginForm from "../../Components/LoginForm";

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row bg-red-300">
      <div className="hidden xl:flex flex-col items-center justify-center w-full 2xl:w-1/2 xl:w-2/5  gap-8 relative">
        <div className="absolute top-[116px]">
          <Logo />
        </div>
        <img
          className="absolute top-[378px] w-[480px] h-[456px] object-cover"
          src={Loginimg}
          alt="login image"
        />
        <div className="absolute top-[291px] opacity-45 w-[226px] h-[226px] bg-[#DDA82A] blur-[137px]"></div>
        <div className="absolute top-[557px] w-[226px] h-[226px] bg-[#4461F2] blur-[137px]"></div>
      </div>

      <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-4/5  max-md:w-full flex flex-col lg:items-center lg:justify-center gap-25 p-4">
        <div className="w-full max-w-md ml-[315px] max-lg:ml-[150px] md:flex md:items-center ">
          <Navauth />
        </div>
        <div className="w-full max-w-md max-md:w-screen ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}