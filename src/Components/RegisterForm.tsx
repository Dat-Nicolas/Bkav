// import { Button ,Form , Input, Modal } from "antd";
// import { useState } from "react";

// export default function RegisterForm() {
//     const onFinish = (values) => {
//         console.log("Received values:", values);
//         setIsModalVisible(true);
//       };
//       const handleModalOk = () => {
//         setIsModalVisible(false);
//       };
//       const [isModalVisible, setIsModalVisible] = useState(false);
//   return (
//     <div className="flex flex-col max-sm:px-3 gap-[30px] ">
//       <p className="text-[48px] font-normal text-center">Đăng ký</p>
//       <Form
//         name="register"
//         className="flex flex-col gap-5"
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//       >
//         <div className="w-full h-20">
//           <Form.Item
//             name="username"
//             rules={[
//               { required: true, message: "Vui lòng nhập tên tài khoản!" },
//             ]}
//           >
//             <Input
//               className="w-100 h-15 rounded-[10px]"
//               placeholder="Tên tài khoản"
//             />
//           </Form.Item>
//         </div>

//         <div className="w-full h-20">
//           <Form.Item
//             name="email"
//             rules={[
//               { required: true, message: "Vui lòng nhập địa chỉ email!" },
//               { type: "email", message: "Email không hợp lệ!" },
//             ]}
//           >
//             <Input
//               className="w-100 h-15 rounded-[10px]"
//               placeholder="Địa chỉ email"
//             />
//           </Form.Item>
//         </div>

//         <div className="w-full h-20">
//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
//           >
//             <Input.Password
//               className="w-100 h-15 rounded-[10px]"
//               placeholder="Mật khẩu"
//             />
//           </Form.Item>
//         </div>

//         <div className="w-full h-20">
//           <Form.Item
//             name="confirmPassword"
//             dependencies={["password"]}
//             rules={[
//               { required: true, message: "Vui lòng nhập lại mật khẩu!" },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(new Error("Mật khẩu không khớp!"));
//                 },
//               }),
//             ]}
//           >
//             <Input.Password
//               className="w-full h-15 "
//               placeholder="Nhập lại mật khẩu"
//             />
//           </Form.Item>
//         </div>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" className="w-full h-full">
//             Đăng ký
//           </Button>
//         </Form.Item>
//       </Form>
//       <Modal
//         title="Xác thực email"
//         open={isModalVisible}
//         onCancel={handleModalOk}
//         onOk={handleModalOk}
//         footer={[
//           <Button key="ok" type="primary" onClick={handleModalOk}>
//             OK
//           </Button>,
//         ]}
//         centered
//         width={500}
//         height={159}
//         style={{
//           boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
//         }}
//       >
//         <p>
//           Chúng tôi đã gửi một liên kết xác thực đến địa chỉ email của bạn. Vui
//           lòng kiểm tra hòm thư của bạn để hoàn tất đăng ký.
//         </p>
//       </Modal>
//     </div>
//   );
// }


import { Button, Form, Input, Modal, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router";

const { Text } = Typography;

const RegisterForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Received values:", values);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="sm:w-150 sm:h-175 h-full w-full max-sm:px-3 flex flex-col gap-[30px]">
      <p className="text-[48px] font-normal leading text-center text-12">Đăng ký</p>
      <Form
        name="register"
        className="flex flex-col gap-5"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className="w-full h-20">
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên tài khoản!" },
            ]}
          >
            <Input
              className="w-full h-[60px] rounded-[10px]"
              placeholder="Tên tài khoản"
            />
          </Form.Item>
        </div>

        <div className="w-full h-20">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập địa chỉ email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input
              className="w-full h-[60px] rounded-[10px]"
              placeholder="Địa chỉ email"
            />
          </Form.Item>
        </div>

        <div className="w-full h-20">
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              className="w-full h-[60px] rounded-[10px]"
              placeholder="Mật khẩu"
            />
          </Form.Item>
        </div>

        <div className="w-full h-20">
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Vui lòng nhập lại mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp!"));
                },
              }),
            ]}
          >
            <Input.Password
              className="w-full h-[60px] rounded-[10px]"
              placeholder="Nhập lại mật khẩu"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-[#4461F2] h-15 gap-[10px]"
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>

      <div className="text-right w-full italic font-normal size-[23px] mb-4 h-[30px] leading-[100%] tracking-0%">
        <Text>
          Đã có tài khoản, đăng nhập tại <Link to="/login">đây!</Link>
        </Text>
      </div>

      <Modal
        title="Xác thực email"
        open={isModalVisible}
        onCancel={handleModalOk}
        onOk={handleModalOk}
        footer={[
          <Button key="ok" type="primary" onClick={handleModalOk}>
            OK
          </Button>,
        ]}
        centered
        width={500}
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <p>
          Chúng tôi đã gửi một liên kết xác thực đến địa chỉ email của bạn. Vui
          lòng kiểm tra hòm thư của bạn để hoàn tất đăng ký.
        </p>
      </Modal>
    </div>
  );
};

export default RegisterForm;