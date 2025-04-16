// import Logo from "../../Components/Logo";
// import Loginimg from "../../assets/images/login.png";
// import Navauth from "../../Components/Navauth";
// import LoginForm from "../../Components/LoginForm";

// const LoginPage = () => {
//   return (
//     <div className="rounded-[30px] w-full relative bg-[#F6F6F6]  h-full">
//       <div className="max-sm:hidden  absolute top-29 left-29">
//         <div className="w-122 max-2xl:w-100 max-xl:w-80 max-md:w-60  h-34  max-xl:left-0">
//           <Logo />
//         </div>
//         <div className="w-120 max-2xl:w-80 object-cover  max-xl:left-0">
//           <img
//             className="w-full h-full object-cover"
//             src={Loginimg}
//             alt="login image"
//           />
//         </div>
//       </div>
//       <div className="absolute top-28 left-250 max-2xl:top-28 max-2xl:left-110 max-xl:top-28 max-xl:left-150 max-sm:top-0 max-sm:left-0 max-sm:w-full">
//         <div className=" sm:w-155 sm:h-175 h-full sm:top-31 sm:left-0">
//           <div className="mt-5">
//             <Navauth />
//           </div>
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import Logo from "../../Components/Logo";
import Loginimg from "../../assets/images/login.png";
import Navauth from "../../Components/Navauth";
import LoginForm from "../../Components/LoginForm";

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F6F6] flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8">
      <div className="hidden lg:flex flex-col items-center justify-center w-1/2 max-xl:w-2/5  gap-8">
        <div className="w-3/5 max-w-[400px]">
          <Logo />
        </div>
        <div className="w-3/5 max-w-[400px]">
          <img
            className="w-full h-auto object-cover"
            src={Loginimg}
            alt="login image"
          />
        </div>
      </div>

      {/* Right Section: Navigation and Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
        <div className="w-full max-w-[500px]">
          <Navauth />
        </div>
        <div className="w-full max-w-[500px]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;