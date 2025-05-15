  import Logo from "../../Components/Logo";
import Registerimg from "../../assets/images/register.png";
import Navauth from "../../Components/Navauth";
import RegisterForm from "../../Components/RegisterForm";

export default function Register() {
  return (
    <div className="w-full h-screen flex bg-[#F6F6F6]">
      <div className="hidden 2xl:flex flex-col items-center justify-center xl:w-1/2  relative">
        <div className="absolute top-[116px] ml-[40px] ">
          <Logo />
        </div>
        <img
          className="absolute top-[360px] ml-[68px] w-[502px] h-[456px] object-cover"
          src={Registerimg}
          alt="register image"
        />
        <div className="absolute top-[291px] opacity-45 w-[226px] h-[226px] bg-[#DDA82A] blur-[137px]"></div>
        <div className="absolute top-[557px] w-[226px] h-[226px] bg-[#4461F2] blur-[137px]"></div>
      </div>

      <div className="w-full  2xl:w-1/2 flex flex-col items-center sm:justify-center gap-10  sm:pb-[135px]  2xl:pr-15 ">
        <div className="w-full  xl:w-[350px]  2xl:ml-[220px]   max-xl:flex max-xl:justify-center max-sm:hidden  max-xl:items-center ">
          <Navauth />
        </div>
        <div className="w-full max-w-[617px] p-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}   
