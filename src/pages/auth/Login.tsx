import Logo from "../../Components/Logo";
import Loginimg from "../../assets/images/login.png";
import Navauth from "../../Components/Navauth";
import LoginForm from "../../Components/LoginForm";

export default function Login() {
  return (
    <div className="w-full h-screen   flex bg-[#F6F6F6]">
      <div className="hidden 2xl:flex flex-col items-center justify-center  xl:w-1/2 lg:w-3/5  relative pr-[35px]">
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

      <div className="  2xl:w-1/2   max-2xl:w-full  flex flex-col items-center sm:justify-center p-4 pb-[140px] 2xl:pl-[110px]">
        <div className="w-full  max-w-[350px] 2xl:ml-[80px]  max-sm:hidden max-lg:flex max-lg:justify-center">
          <Navauth />
        </div>
        <div className="w-full max-w-[617px]   mt-[18px] p-5 max-sm:pt-0">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}


// import Logo from "../../Components/Logo";
// import Loginimg from "../../assets/images/login.png";
// import Navauth from "../../Components/Navauth";
// import LoginForm from "../../Components/LoginForm";

// export default function Login() {
//   return (
//     <div className="w-full h-screen   flex bg-[#F6F6F6]">
//       <div className="hidden 2xl:flex flex-col items-center justify-center  xl:w-1/2 lg:w-3/5  relative pr-[35px]">
//         <div className="absolute top-[116px] mr-[10px]">
//           <Logo />
//         </div>
//         <img
//           className="absolute top-[378px] w-[480px] h-[456px] object-cover"
//           src={Loginimg}
//           alt="login image"
//         />
//         <div className="absolute top-[291px] left-[250px] opacity-45 w-[226px] h-[226px] bg-[#DDA82A] blur-[137px]"></div>
//         <div className="absolute top-[557px] left-[346px] w-[226px] h-[226px] bg-[#4461F2] blur-[150px]"></div>
//       </div>

//       <div className="  2xl:w-1/2   max-2xl:w-full  flex flex-col items-center justify-center p-4 pb-[140px] 2xl:pl-[155px] max-2xl:pl-[100px]">
//         <div className="w-full  max-w-[350px] 2xl:ml-[50px] xl:ml-[180px] lg:ml-[150px] max-sm:hidden max-lg:flex max-lg:justify-center">
//           <Navauth />
//         </div>
//         <div className="w-full max-w-[617px]   mt-[18px] ">
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// }


