import { Button, Form, Input, Modal, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router";
import { LOCALE_MESSAGE_IDS } from "../libs/src/message";
import { FormattedMessage, useIntl } from "react-intl";
const { Text } = Typography;
import { CloseCircleFilled } from '@ant-design/icons';
import axios from 'axios';
const CustomClearIcon = <CloseCircleFilled style={{ fontSize: 24 }} />;


interface Form {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const intl = useIntl();

  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/register', {
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });

      if (response.status === 201) {
        setIsModalVisible(true);
      }
    } catch (error) {
      console.error('Registration error:', error.response?.data?.message || error.message);
      // Handle error notification (e.g., using antd notification)
    }
  };


  return (
    <div className="w-[617px]  max-lg:w-full  h-[668px]  flex flex-col gap-[30px]  sm:pt-12">
      <p className="text-[48px]    w-full  h-[86px] font-normal leading text-center select-none  mb-2">
        <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
      </p>

      <Form
        className="[&_.ant-form-item-label select-none"
        name="register"
        layout="horizontal"
        labelAlign="left"
        requiredMark={false}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 613, width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className="flex flex-col gap-[25px] max-sm:gap-[15px] pb-[15px]">
          <Form.Item
            label={intl.formatMessage({
              id: LOCALE_MESSAGE_IDS.user_name,
            })}
            name="username"
           labelCol={{ xs: { span: 0 }, sm: { span: 8 } }}
            wrapperCol={{ span: 16 }}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: LOCALE_MESSAGE_IDS.username_required,
                }),
              },
            ]}
          >
            <Input
              className="form-input-custom md:ml-[5px]"
              allowClear={{ clearIcon: CustomClearIcon }}
              style={{ backgroundColor: "#e8f0fe", height: 60}}
              placeholder={intl.formatMessage({
                id: LOCALE_MESSAGE_IDS.input_placeholder_username,
              })}
            />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({
              id: LOCALE_MESSAGE_IDS.email,
            })}
            name="email"
            labelCol={{ span: 8, className: "form-label-custom" }}
            wrapperCol={{ span: 16 }}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: LOCALE_MESSAGE_IDS.email_required,
                }),
              },
            ]}
          >
            <Input
              className="form-input-custom md:ml-[5px]"
              allowClear={{ clearIcon: CustomClearIcon }}
              type="email"
              style={{ backgroundColor: "#e8f0fe", height: 60 }}
              placeholder={intl.formatMessage({
                id: LOCALE_MESSAGE_IDS.input_placeholder_email,
              })}
            />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({
              id: LOCALE_MESSAGE_IDS.password,
            })}
            name="password"
            labelCol={{ span: 8, className: "form-label-custom" }}
            wrapperCol={{ span: 16 }}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: LOCALE_MESSAGE_IDS.password_required,
                }),
              },
              {
                    min: 6,
                    message: intl.formatMessage({
                      id: "password_length_required",
                      defaultMessage:
                        "Password must be at least 6 characters long!",
                    }),
                  },
            ]}
          >
            <Input.Password
              className="form-input-custom md:ml-[5px]"
              style={{ backgroundColor: "#e8f0fe", height: 60 }}
              placeholder={intl.formatMessage({
                id: LOCALE_MESSAGE_IDS.input_placeholder_password,
              })}
            />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({
              id: LOCALE_MESSAGE_IDS.reenter_password,
            })}
            style={{ fontSize: 19 }}
            name="confirmPassword"
            labelCol={{ span: 8, className: "form-label-custom" }}
            wrapperCol={{ span: 16 }}
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: LOCALE_MESSAGE_IDS.confirm_password_required,
                }),
              },
              {
                    min: 6,
                    message: intl.formatMessage({
                      id: "password_length_required",
                      defaultMessage:
                        "Password must be at least 6 characters long!",
                    }),
                  },
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
              className="form-input-custom md:ml-[5px]"
              style={{ backgroundColor: "#e8f0fe", height: 60}}
              placeholder={intl.formatMessage({
                id: LOCALE_MESSAGE_IDS.input_placeholder_confirm_password,
              })}
            />
          </Form.Item>
          </div>
          <Form.Item
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ marginBottom: 0 }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="lg:w-[408px] max-lg:w-3/2 max-sm:w-full lg:ml-[210px] max-lg:ml-0 max-md:flex max-md:justify-center  max-md:ml-0 btn "
            >
              <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
            </Button>
          </Form.Item>
      </Form>

      <div className="text-left   max-xl:text-center  lg:ml-[210px]  w-[408px] max-lg:w-full italic font-normal size-[23px]  h-[30px] leading-[100%] tracking-0% select-none">
        <Text>
          <FormattedMessage id={LOCALE_MESSAGE_IDS.already_have_account} />{" "}
          <Link to="/login">
            <FormattedMessage id={LOCALE_MESSAGE_IDS.here} />
          </Link>
        </Text>
      </div>

      <Modal
        title={<FormattedMessage id={LOCALE_MESSAGE_IDS.verify_email_title} />}
        // className="modal-custom"
        open={isModalVisible}
        onCancel={toggleModalVisible}
        footer={null}
        centered
        width={500}
        height={159}
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <p className="py-6">
          <FormattedMessage id={LOCALE_MESSAGE_IDS.verify_email_message} />
        </p>
      </Modal>
    </div>
  );
};

export default RegisterForm;





// import { Button, Form, Input, Modal, Typography } from "antd";
// import { useState } from "react";
// import { Link } from "react-router";
// import { LOCALE_MESSAGE_IDS } from "../libs/src/message";
// import { FormattedMessage, useIntl } from "react-intl";
// import { CloseCircleFilled } from '@ant-design/icons';

// const { Text } = Typography;
// const CustomClearIcon = <CloseCircleFilled style={{ fontSize: 24 }} />;

// const RegisterForm = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const intl = useIntl();

//   const toggleModalVisible = () => {
//     setIsModalVisible(!isModalVisible);
//   };

//   const onFinish = (values) => {
//     console.log("Received values:", values);
//     setIsModalVisible(true);
//   };

//   return (
//     <div className="w-[617px] max-lg:w-full h-[668px] flex flex-col gap-[30px] sm:pt-12">
//       <p className="text-[48px] w-full h-[86px] font-normal leading text-center select-none mb-2">
//         <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
//       </p>

//       <Form
//         name="register"
//         layout="horizontal"
//         labelAlign="left"
//         requiredMark={false}
//         labelCol={{ sm: { span: 8 } }}
//         wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
//         style={{ maxWidth: 613, width: "100%" }}
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//       >
//         <div className="flex flex-col gap-[25px] max-sm:gap-[15px] pb-[15px]">
//           <Form.Item
//             name="username"
//             label={
//               <span className="hidden sm:inline-block">
//                 {intl.formatMessage({ id: LOCALE_MESSAGE_IDS.user_name })}
//               </span>
//             }
//             rules={[{
//               required: true,
//               message: intl.formatMessage({ id: LOCALE_MESSAGE_IDS.username_required }),
//             }]}
//           >
//             <Input
//               className="form-input-custom md:ml-[5px]"
//               allowClear={{ clearIcon: CustomClearIcon }}
//               style={{ backgroundColor: "#e8f0fe", height: 60 }}
//               placeholder={intl.formatMessage({ id: LOCALE_MESSAGE_IDS.input_placeholder_username })}
//             />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             label={
//               <span className="hidden sm:inline-block">
//                 {intl.formatMessage({ id: LOCALE_MESSAGE_IDS.email })}
//               </span>
//             }
//             rules={[{
//               required: true,
//               message: intl.formatMessage({ id: LOCALE_MESSAGE_IDS.email_required }),
//             }]}
//           >
//             <Input
//               className="form-input-custom md:ml-[5px]"
//               allowClear={{ clearIcon: CustomClearIcon }}
//               type="email"
//               style={{ backgroundColor: "#e8f0fe", height: 60 }}
//               placeholder={intl.formatMessage({ id: LOCALE_MESSAGE_IDS.input_placeholder_email })}
//             />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             label={
//               <span className="hidden sm:inline-block">
//                 {intl.formatMessage({ id: LOCALE_MESSAGE_IDS.password })}
//               </span>
//             }
//             rules={[{
//               required: true,
//               message: intl.formatMessage({ id: LOCALE_MESSAGE_IDS.password_required }),
//             }]}
//           >
//             <Input.Password
//               className="form-input-custom md:ml-[5px]"
//               style={{ backgroundColor: "#e8f0fe", height: 60 }}
//               placeholder={intl.formatMessage({ id: LOCALE_MESSAGE_IDS.input_placeholder_password })}
//             />
//           </Form.Item>

//           <Form.Item
//             name="confirmPassword"
//             label={
//               <span className="hidden sm:inline-block">
//                 {intl.formatMessage({ id: LOCALE_MESSAGE_IDS.reenter_password })}
//               </span>
//             }
//             dependencies={["password"]}
//             rules={[
//               {
//                 required: true,
//                 message: intl.formatMessage({ id: LOCALE_MESSAGE_IDS.confirm_password_required }),
//               },
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
//               className="form-input-custom md:ml-[5px]"
//               style={{ backgroundColor: "#e8f0fe", height: 60 }}
//               placeholder={intl.formatMessage({ id: LOCALE_MESSAGE_IDS.input_placeholder_confirm_password })}
//             />
//           </Form.Item>
//         </div>

//         <Form.Item
//           wrapperCol={{ sm: { offset: 8, span: 16 }, xs: { span: 24 } }}
//           style={{ marginBottom: 0 }}
//         >
//           <Button
//             type="primary"
//             htmlType="submit"
//             className="lg:w-[408px] max-lg:w-3/2 max-sm:w-full btn"
//           >
//             <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
//           </Button>
//         </Form.Item>
//       </Form>

//       <div className="text-left max-xl:text-center lg:ml-[210px] w-[408px] max-lg:w-full italic font-normal size-[23px] h-[30px] leading-[100%] tracking-0% select-none">
//         <Text>
//           <FormattedMessage id={LOCALE_MESSAGE_IDS.already_have_account} /> {" "}
//           <Link to="/login">
//             <FormattedMessage id={LOCALE_MESSAGE_IDS.here} />
//           </Link>
//         </Text>
//       </div>

//       <Modal
//         title={<FormattedMessage id={LOCALE_MESSAGE_IDS.verify_email_title} />}
//         open={isModalVisible}
//         onCancel={toggleModalVisible}
//         footer={null}
//         centered
//         width={500}
//         style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
//       >
//         <p className="py-6">
//           <FormattedMessage id={LOCALE_MESSAGE_IDS.verify_email_message} />
//         </p>
//       </Modal>
//     </div>
//   );
// };

// export default RegisterForm;