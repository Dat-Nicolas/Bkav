// import Logo from "../../Components/Logo";
// import Loginimg from "../../assets/images/login.png";
// import Navauth from "../../Components/Navauth";
// import LoginForm from "../../Components/LoginForm";

// export default function Login() {
//   return (
//     // <div className="w-[1920px]  h-[1080px] relative ">
//     <div className="w-full  h-screen relative bg-[#F6F6F6]">
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
    <div className="w-full h-screen   flex bg-[#F6F6F6]">
      <div className="hidden xl:flex flex-col items-center justify-center  xl:w-1/2 lg:w-3/5  relative pr-[35px]">
        <div className="absolute top-[116px] mr-[10px]">
          <Logo />
        </div>
        <img
          className="absolute top-[378px] w-[480px] h-[456px] object-cover"
          src={Loginimg}
          alt="login image"
        />
        <div className="absolute top-[291px] left-[250px] opacity-45 w-[226px] h-[226px] bg-[#DDA82A] blur-[137px]"></div>
        <div className="absolute top-[557px] left-[346px] w-[226px] h-[226px] bg-[#4461F2] blur-[150px]"></div>
      </div>

      <div className="w-full  2xl:w-1/2 xl:w-3/10 lg:w-4/5 max-lg:w-screen   flex flex-col items-center justify-center gap-0 p-4 pb-[134px]">
        <div className="w-full max-w-sm ml-[190px]">
          <Navauth />
        </div>
        <div className="w-full max-w-lg mt-[15px]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
