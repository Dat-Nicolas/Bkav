import Logo from "../../Components/Logo";
import Loginimg from "../../assets/images/login.png";
import Navauth from "../../Components/Navauth";
import LoginForm from "../../Components/LoginForm";

export default function Login()  {
  return (
    <div className="w-full h-screen bg-[#F6F6F6] flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8">
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
        <div className="w-full max-w-[450px]">
          <Navauth />
        </div>
        <div className="w-full max-w-[600px]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

