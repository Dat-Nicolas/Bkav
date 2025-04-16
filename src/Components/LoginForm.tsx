// import { Form, Input, Button, Typography } from "antd";
// import google from "../assets/images/Gg-Icon.jpg";
// import facebook from "../assets/images/Fb-Icon.jpg";
// import apple from "../assets/images/Apple.png";
// const { Text } = Typography;
// import { Link } from "react-router";


// const onFinish = (values) => {
//   console.log("Received values:", values);
// };

// export default function LoginForm() {
//   return (
//     <div className="sm:w-150 sm:h-175 h-full w-full max-sm:px-3  flex flex-col  gap-[30px]">
//       <p className="text-[48px]  font-normal leading  text-center text-12 ">Đăng nhập</p>
//       <Form name="login" className="flex flex-col gap-5" initialValues={{ remember: true }} onFinish={onFinish}>
//         <div className="w-full h-20">
//           <Form.Item
//             name="usernameOrEmail"
//             rules={[
//               {
//                 required: true,
//                 message: "Vui lòng nhập tên tài khoản hoặc email!",
//               },
//             ]}
//           >
//             <Input
//               className="w-full h-[60px] rounded-[10px]"
//               placeholder="Tên tài khoản/Email"
//             />
//           </Form.Item>
//         </div>

//         <div className="w-full h-20">
//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
//           >
//             <Input.Password
//               className=" w-full h-[60px] rounded-[10px]"
//               placeholder="Mật khẩu"
//             />
//           </Form.Item>
//         </div>

//         <div className="text-right ">
//           <Link to="#">Quên mật khẩu?</Link>
//         </div>

//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             className="w-full bg-[#4461F2] h-15 gap-[10px]"
//           >
//             Đăng nhập
//           </Button>
//         </Form.Item>
//       </Form>

//       <div className="text-right w-full italic font-normal size-[23px] mb-4  h-[30px] leading-[100%] tracking-0%">
//         <Text>
//           Bạn chưa có tài khoản, đăng ký tại <Link to="/signup">đây!</Link>
//         </Text>
//       </div>

//       {/* Social Login */}
//       <div className="text-center">
//         <div className="flex flex-col justify-center gap-10 ">
//           <div className="w-full flex items-center">
//             <div className="flex-1 flex w-full h-[1px] border-t-1 border-[#DFDFDF]"></div>
//             <div className="px-5">Hoặc tiếp tục với</div>
//             <div className="w-full flex-1 flex h-[1px] border-t-1 border-[#DFDFDF]"></div>
//           </div>
//           <div className="flex w-full justify-center gap-[25px]">
//             <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6] ">
//             <img src={google} alt="Google" className="w-7 h-7" />
//             </div>
//             <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6]">
//             <img src={apple} alt="Apple"  className="w-7 h-7" />
//             </div>
//             <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6]">
//               <img src={facebook} alt="Facebook" className="w-7 h-7" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { Form, Input, Button, Typography } from "antd";
import google from "../assets/images/Gg-Icon.jpg";
import facebook from "../assets/images/Fb-Icon.jpg";
import apple from "../assets/images/Apple.png";
const { Text } = Typography;
import { Link } from "react-router";

const onFinish = (values) => {
  console.log("Received values:", values);
};

export default function LoginForm() {
  return (
    <div className="sm:w-150 sm:h-175 h-full w-full max-sm:px-3 flex flex-col gap-[30px]">
      <p className="text-[48px] font-normal leading text-center text-12">Đăng nhập</p>
      <Form name="login" className="flex flex-col gap-5" initialValues={{ remember: true }} onFinish={onFinish}>
        <div className="w-full h-20">
          <Form.Item
            name="usernameOrEmail"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên tài khoản hoặc email!",
              },
            ]}
          >
            <Input
              className="w-full h-[60px] rounded-[10px] bg-white border-[#DDDFDD] focus:border-[#4461F2] focus:shadow-none"
              placeholder="Tên tài khoản/Email"
            />
          </Form.Item>
        </div>

        <div className="w-full h-20">
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              className="w-full h-[60px] rounded-[10px] bg-white border-[#DDDFDD] focus:border-[#4461F2] focus:shadow-none"
              placeholder="Mật khẩu"
            />
          </Form.Item>
        </div>

        <div className="text-right">
          <Link to="#">Quên mật khẩu?</Link>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-[#4461F2] h-15 gap-[10px]"
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>

      <div className="text-right w-full italic font-normal size-[23px] mb-4 h-[30px] leading-[100%] tracking-0%">
        <Text>
          Bạn chưa có tài khoản, đăng ký tại <Link to="/signup">đây!</Link>
        </Text>
      </div>

      {/* Social Login */}
      <div className="text-center">
        <div className="flex flex-col justify-center gap-10">
          <div className="w-full flex items-center">
            <div className="flex-1 flex w-full h-[1px] border-t-1 border-[#DFDFDF]"></div>
            <div className="px-5">Hoặc tiếp tục với</div>
            <div className="w-full flex-1 flex h-[1px] border-t-1 border-[#DFDFDF]"></div>
          </div>
          <div className="flex w-full justify-center gap-[25px]">
            <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6]">
              <img src={google} alt="Google" className="w-7 h-7" />
            </div>
            <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6]">
              <img src={apple} alt="Apple" className="w-7 h-7" />
            </div>
            <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6]">
              <img src={facebook} alt="Facebook" className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}