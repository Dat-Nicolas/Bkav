import { Typography, Select } from "antd";
import Logo from "../../Components/Logo";
import Registerimg from "../../assets/images/register.png";
import { Link } from "react-router";
import Navauth from "../../Components/Navauth";
import RegisterForm from "../../Components/RegisterForm";

const { Text } = Typography;
const { Option } = Select;

const RegisterPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F6F6] flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8">
      {/* Left Section: Logo and Image */}
      <div className="hidden lg:flex flex-col items-center justify-center w-1/2 max-xl:w-2/5 gap-8">
        <div className="w-3/5 max-w-[400px]">
          <Logo />
        </div>
        <div className="w-3/5 max-w-[400px]">
          <img
            className="w-full h-auto object-cover"
            src={Registerimg}
            alt="register image"
          />
        </div>
      </div>

      {/* Right Section: Navigation, Form, and Link */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
        <div className="w-full max-w-[500px]">
          <Navauth />
        </div>
        <div className="w-full max-w-[500px]">
          <RegisterForm />
        </div>
        <div className="w-full max-w-[500px] text-right italic font-normal text-[23px]">
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;