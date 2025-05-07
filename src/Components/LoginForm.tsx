// import { Form, Input, Button, Typography } from "antd";
// import google from "../assets/images/Gg-Icon.jpg";
// import facebook from "../assets/images/Fb-Icon.jpg";
// import apple from "../assets/images/Apple.png";
// const { Text } = Typography;
// import { Link } from "react-router";
// import { LOCALE_MESSAGE_IDS } from "../libs/src/message";
// import { FormattedMessage, useIntl } from "react-intl";
// import { CloseOutlined } from '@ant-design/icons';

// const onFinish = (values) => {
//   console.log("Received values:", values);
// };

// const handleClear = (e) => {
//   e.preventDefault();
 
// };

// export default function LoginForm() {
//   const intl = useIntl();
//   return (
//     <div className=" w-[617px] h-[698px]  flex flex-col gap-[30px]">
//       <p className="text-[48px] w-full h-[86px] font-normal leading text-center ">
//         <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
//       </p>
//       <Form
//         name="login"
//         className="flex flex-col gap-5"
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//       >
//         <div className="w-full h-[77px]">
//           <Form.Item
//             name="usernameOrEmail"
//             rules={[
//               {
//                 required: true,
//                 message: intl.formatMessage({
//                   id: "username_or_email_required",
//                   defaultMessage: "Please enter your username or email!",
//                 }),
//               },
//             ]}
//           >
//             <Input
//               type="text"
//             style={{backgroundColor:"#e8f0fe"}}

//               className="w-full h-[60px]"
//               tabIndex={1}
//               placeholder={intl.formatMessage({
//                 id: LOCALE_MESSAGE_IDS.input_placeholder_name,
//                 defaultMessage: "Enter your email or username...",
//               })}
//               suffix={
                
//                 <CloseOutlined
//                   onClick={handleClear} 
//                   style={{ cursor: 'pointer' }}
//                 />
//               }
//             />
//           </Form.Item>
//         </div>

//         <div  className="w-full h-[77px]">
//           <Form.Item
//             name="password"
//             rules={[
//               {
//                 required: true,
//                 message: intl.formatMessage({
//                   id: "password_required",
//                   defaultMessage: "Please enter your password!",
//                 }),
//               },
//             ]}
//           >
//             <Input.Password
//             className="w-full h-[60px]"
//             style={{backgroundColor:"#e8f0fe"}}

//               tabIndex={1}
//               placeholder={intl.formatMessage({
//                 id: LOCALE_MESSAGE_IDS.input_placeholder_password,
//                 defaultMessage: "Enter your password",
//               })}
//             />
//           </Form.Item>
//         </div>

//         <div className="text-right text-gray-900" >
//           <Link to="#" >
//             <div className="text-[#000] italic text-[23px] font-normal leading-[100%] tracking-0%"><FormattedMessage   id={LOCALE_MESSAGE_IDS.forgot_password} /></div>
//           </Link>
//         </div>

//         <Form.Item>
//           <Button
          
//             type="primary"
//             htmlType="submit"
//             className="w-full btn"
//           >
//             <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
//           </Button>
//         </Form.Item>
//       </Form>

//       <div className="text-right w-full italic font-normal size-[23px] h-[30px] leading-[100%] tracking-0%">
//         <Text>
//           <FormattedMessage id={LOCALE_MESSAGE_IDS.donot_account} />{" "}
//           <Link to="/signup">
//             <FormattedMessage id={LOCALE_MESSAGE_IDS.here} />
//           </Link>
//         </Text>
//       </div>

//       {/* Social Login */}
//       <div className="text-center">
//         <div className="flex flex-col justify-center gap-10">
//           <div className="w-full flex items-center">
//             <div className="flex-1 flex w-full h-[1px] border-t-1 border-[#DFDFDF]"></div>
//             <div className="px-5">
//               <FormattedMessage id={LOCALE_MESSAGE_IDS.or} />
//             </div>
//             <div className="w-full flex-1 flex h-[1px] border-t-1 border-[#DFDFDF]"></div>
//           </div>
//           <div className="flex w-full justify-center gap-[25px]">
//             <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6] hover:bg-[#FFFFFF] hover:border-none hover:shadow-[0_0_10px_rgba(0,0,0,0.13)] cursor-pointer">
//               <img src={google} alt="Google" className="w-7 h-7" />
//             </div>
//             <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6] hover:bg-[#FFFFFF] hover:border-none hover:shadow-[0_0_10px_rgba(0,0,0,0.13)] cursor-pointer">
//               <img src={apple} alt="Apple" className="w-7 h-7" />
//             </div>
//             <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6] hover:bg-[#FFFFFF] hover:border-none hover:shadow-[0_0_10px_rgba(0,0,0,0.13)] cursor-pointer">
//               <img src={facebook} alt="Facebook" className="w-7 h-7" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useState } from "react";
// import { Form, Input, Button, Typography } from "antd";
// import google from "../assets/images/Gg-Icon.jpg";
// import facebook from "../assets/images/Fb-Icon.jpg";
// import apple from "../assets/images/Apple.png";
// const { Text } = Typography;
// import { Link } from "react-router";
// import { LOCALE_MESSAGE_IDS } from "../libs/src/message";
// import { FormattedMessage, useIntl } from "react-intl";
// import { CloseOutlined } from '@ant-design/icons';

// const onFinish = (values) => {
//   console.log("Received values:", values);
// };

// const handleClear = (e) => {
//   e.preventDefault();
// };

// export default function LoginForm() {
//   const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);  // State kiểm tra nếu login thành công
//   const [otp, setOtp] = useState("");  // State để lưu OTP nhập vào
//   const intl = useIntl();

//   const handleLogin = (values) => {
//     console.log("Received login values:", values);
//     if (values.usernameOrEmail === "user" && values.password === "123") {
//       setIsLoginSuccessful(true); 
//     } else {
//       alert("Thông tin đăng nhập không chính xác!");
//     }
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleSubmitOtp = () => {
//     if (otp === "123456") {
//       alert("Đăng nhập thành công!");
//     } else {
//       alert("OTP không hợp lệ!");
//     }
//   };

//   return (
//     <div className="w-[617px] h-[698px] flex flex-col gap-[30px]">
//       {/* Nếu login thành công, hiển thị form OTP */}
//       {isLoginSuccessful ? (
//         <div className="flex flex-col gap-5">
//           <p className="text-[48px] w-full h-[86px] font-normal leading text-center ">
//             <FormattedMessage id={LOCALE_MESSAGE_IDS.enter_otp} defaultMessage="Enter OTP" />
//           </p>
//           <div className="w-full flex justify-center">
//             <Input
//               type="text"
//               value={otp}
//               onChange={handleOtpChange}
//               maxLength={6}
//               className="w-[200px] h-[60px] text-center"
//               placeholder="Enter OTP"
//             />
//           </div>
//           <Button type="primary" onClick={handleSubmitOtp} className="w-full btn">
//             <FormattedMessage id={LOCALE_MESSAGE_IDS.submit_otp} defaultMessage="Submit OTP" />
//           </Button>
//         </div>
//       ) : (
//         // Nếu chưa đăng nhập, hiển thị form login
        
//        <div>
//         <p className="text-[48px] w-full h-[86px] font-normal leading text-center ">
//         <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
//         </p>
//           <Form
//             name="login"
//             className="flex flex-col gap-5"
//             initialValues={{ remember: true }}
//             onFinish={handleLogin}
//           >
//             <div className="w-full h-[77px]">
//               <Form.Item
//                 name="usernameOrEmail"
//                 rules={[
//                   {
//                     required: true,
//                     message: intl.formatMessage({
//                       id: "username_or_email_required",
//                       defaultMessage: "Please enter your username or email!",
//                     }),
//                   },
//                 ]}
//               >
//                 <Input
//                   type="text"
//                   style={{ backgroundColor: "#e8f0fe" }}
//                   className="w-full h-[60px]"
//                   tabIndex={1}
//                   placeholder={intl.formatMessage({
//                     id: LOCALE_MESSAGE_IDS.input_placeholder_name,
//                     defaultMessage: "Enter your email or username...",
//                   })}
//                   suffix={<CloseOutlined onClick={handleClear} style={{ cursor: "pointer" }} />}
//                 />
//               </Form.Item>
//             </div>
  
//             <div className="w-full h-[77px]">
//               <Form.Item
//                 name="password"
//                 rules={[
//                   {
//                     required: true,
//                     message: intl.formatMessage({
//                       id: "password_required",
//                       defaultMessage: "Please enter your password!",
//                     }),
//                   },
//                 ]}
//               >
//                 <Input.Password
//                   className="w-full h-[60px]"
//                   style={{ backgroundColor: "#e8f0fe" }}
//                   tabIndex={1}
//                   placeholder={intl.formatMessage({
//                     id: LOCALE_MESSAGE_IDS.input_placeholder_password,
//                     defaultMessage: "Enter your password",
//                   })}
//                 />
//               </Form.Item>
//             </div>
  
//             <div className="text-right text-gray-900">
//               <Link to="#">
//                 <div className="text-[#000] italic text-[23px] font-normal leading-[100%] tracking-0%">
//                   <FormattedMessage id={LOCALE_MESSAGE_IDS.forgot_password} />
//                 </div>
//               </Link>
//             </div>
  
//             <Form.Item>
//               <Button type="primary" htmlType="submit" className="w-full btn">
//                 <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
//               </Button>
//             </Form.Item>
//           </Form>
//        </div>
      
//       )}

//       <div className="text-right w-full italic font-normal size-[23px] h-[30px] leading-[100%] tracking-0%">
//         <Text>
//           <FormattedMessage id={LOCALE_MESSAGE_IDS.donot_account} />{" "}
//           <Link to="/signup">
//             <FormattedMessage id={LOCALE_MESSAGE_IDS.here} />
//           </Link>
//         </Text>
//       </div>

//       {/* Social Login */}
//       <div className="text-center">
//         <div className="flex flex-col justify-center gap-10">
//           <div className="w-full flex items-center">
//             <div className="flex-1 flex w-full h-[1px] border-t-1 border-[#DFDFDF]"></div>
//             <div className="px-5">
//               <FormattedMessage id={LOCALE_MESSAGE_IDS.or} />
//             </div>
//             <div className="w-full flex-1 flex h-[1px] border-t-1 border-[#DFDFDF]"></div>
//           </div>
//           <div className="flex w-full justify-center gap-[25px]">
//             <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6] hover:bg-[#FFFFFF] hover:border-none hover:shadow-[0_0_10px_rgba(0,0,0,0.13)] cursor-pointer">
//               <img src={google} alt="Google" className="w-7 h-7" />
//             </div>
//             <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6] hover:bg-[#FFFFFF] hover:border-none hover:shadow-[0_0_10px_rgba(0,0,0,0.13)] cursor-pointer">
//               <img src={apple} alt="Apple" className="w-7 h-7" />
//             </div>
//             <div className="flex justify-center items-center border border-[#DDDFDD] rounded-[10px] w-[117px] h-[60px] bg-[#F6F6F6] hover:bg-[#FFFFFF] hover:border-none hover:shadow-[0_0_10px_rgba(0,0,0,0.13)] cursor-pointer">
//               <img src={facebook} alt="Facebook" className="w-7 h-7" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import google from "../assets/images/Gg-Icon.jpg";
import facebook from "../assets/images/Fb-Icon.jpg";
import apple from "../assets/images/Apple.png";
const { Text } = Typography;
import { Link, useNavigate } from "react-router";
import { LOCALE_MESSAGE_IDS } from "../libs/src/message";
import { FormattedMessage, useIntl } from "react-intl";
import { useGoogleLogin } from "@react-oauth/google";
import { CloseCircleFilled } from '@ant-design/icons';

const CustomClearIcon = <CloseCircleFilled style={{ fontSize: 24 }} />;


export default function LoginForm() {
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); 
  const intl = useIntl();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    console.log("Received login values:", values);
    if (values.usernameOrEmail === "user" && values.password === "123") {
      setIsLoginSuccessful(true); 
    } else {
      alert("Thông tin đăng nhập không chính xác!");
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtp(updatedOtp);
  };

  const handleOtpBackspace = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleSubmitOtp = () => {
    const otpCode = otp.join("");
    if (otpCode === "123456") {
      alert("Đăng nhập thành công!");
      navigate("/");
    } else {
      alert("OTP không hợp lệ!");
    }
  };


  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Login success:", tokenResponse);
      navigate("/");

    },
    onError: () => {
      console.log("Login Failed");
    },
  });


  return (
    <div className="w-[617px] max-lg:w-screen max-md:w-[110px] max-sm:ml-20 h-[698px] flex flex-col gap-[10px] max-lg:pl-85 max-sm:pl-0  pt-25">
      {isLoginSuccessful ? (
        <div className="flex flex-col gap-5">
          <p className="text-[48px] w-[617px]  h-[86px] font-normal leading text-center ">
            <FormattedMessage id={LOCALE_MESSAGE_IDS.enter_otp} defaultMessage="Enter OTP" />
          </p>
          <div className="w-full flex justify-center gap-2">
            {otp.map((value, index) => (
              <Input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleOtpBackspace(e, index)}
                className="w-[50px] h-[60px] border bg-[#F6F6F6] text-center"
                placeholder=""
                autoFocus={index === 0}
              />
            ))}
          </div>
          <Button type="primary" onClick={handleSubmitOtp} className="w-full btn">
            <FormattedMessage id={LOCALE_MESSAGE_IDS.submit_otp} defaultMessage="Submit OTP" />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-[30px]">
          <p className="text-[48px] w-[617px] max-sm:w-screen  h-[86px] font-normal leading  text-center select-none">
            <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
          </p>
          <Form
            name="login"
            className="flex flex-col gap-[25px]"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
          >
            <div className="w-[617px] max-sm:w-screen h-[77px]">
              <Form.Item
                name="usernameOrEmail"
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: "username_or_email_required",
                      defaultMessage: "Please enter your username or email!",
                    }),
                  },
                ]}
              >
                <Input
                allowClear={{ clearIcon: CustomClearIcon }}
                  type="text"
                  style={{ backgroundColor: "#e8f0fe",
                    fontSize: 19,
                    lineHeight: '77px',
                    letterSpacing: '9%',
                    fontWeight: 400,
                    verticalAlign : 'middle' ,
                    paddingLeft : '32px' ,
                  }}
                  className="w-full  h-[60px]"
                  tabIndex={1}
                  placeholder={intl.formatMessage({
                    id: LOCALE_MESSAGE_IDS.input_placeholder_name,
                    defaultMessage: "Enter your email or username...",
                  })}
                />
              </Form.Item>
            </div>

            <div className="w-[617px] max-sm:w-screen h-[77px]">
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: "password_required",
                      defaultMessage: "Please enter your password!",
                    }),
                  },
                ]}
              >
                <Input.Password
                  className="w-full h-[60px]"
                  style={{ backgroundColor: "#e8f0fe",
                    fontSize: 19,
                    lineHeight: '77px',
                    letterSpacing: '9%',
                    fontWeight: 400,
                    verticalAlign : 'middle' ,
                    paddingLeft : '32px' ,
                  }}
                  
                  tabIndex={1}
                  placeholder={intl.formatMessage({
                    id: LOCALE_MESSAGE_IDS.input_placeholder_password,
                    defaultMessage: "Enter your password",
                  })}
                />
              </Form.Item>
            </div>

            <div className="text-right text-gray-900 pb-[10px]">
              <Link to="/forgot-password">
                <div className="text-[#000] w-[617px] max-sm:w-screen italic text-[23px] font-normal leading-[100%] tracking-[0%] ">
                  <FormattedMessage id={LOCALE_MESSAGE_IDS.forgot_password} />
                </div>
              </Link>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-[617px] select-none max-sm:w-screen btn ">
                <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}

      <div className="text-right w-[617px] max-sm:w-screen italic font-normal size-[23px] h-[30px] leading-[100%] tracking-0%  select-none pb-[48px]">
        <Text>
          <FormattedMessage id={LOCALE_MESSAGE_IDS.donot_account} />{" "}
          <Link to="/signup">
            <FormattedMessage id={LOCALE_MESSAGE_IDS.here} />
          </Link>
        </Text>
      </div>

      <div className="text-center w-[617px] max-sm:w-screen">
        <div className="flex flex-col justify-center ">
          <div className="w-full flex items-center pb-[20px]">
            <div className="flex-1 flex w-full h-[1px] border-t-1 border-[#DFDFDF]"></div>
            <div className="px-8 select-none font-medium text-[14px] leading-[77px] tracking-[9%] text-[#ACADAC]">
              <FormattedMessage id={LOCALE_MESSAGE_IDS.or} />
            </div>
            <div className="w-full flex-1 flex h-[1px] border-t-1 border-[#DFDFDF]"></div>
          </div>
          <div className="flex w-full justify-center gap-[25px]">
            <div  onClick={() => login()}  className="w-[117px] h-[60px] flex justify-center items-center rounded-[10px] ring-1  ring-[#DDDFDD]  hover:shadow-lg hover:bg-white hover:ring-[#F6F6F6] cursor-pointer">
              <img src={google} alt="Google" className="w-7 h-7" />
            </div>
            <div  className="w-[117px] h-[60px] flex justify-center items-center rounded-[10px] ring-1  ring-[#DDDFDD]  hover:shadow-lg hover:bg-white hover:ring-[#F6F6F6] cursor-pointer">
              <img src={apple} alt="Apple" className="w-7 h-7" />
            </div>
            <div className="w-[117px] h-[60px] flex justify-center items-center rounded-[10px] ring-1  ring-[#DDDFDD]  hover:shadow-lg hover:bg-white hover:ring-[#F6F6F6] cursor-pointer">
              <img src={facebook} alt="Facebook" className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
