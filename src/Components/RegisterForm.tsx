import { Button, Form, Input, Modal, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router";
import { LOCALE_MESSAGE_IDS } from "../libs/src/message";
import { FormattedMessage, useIntl } from "react-intl";
const { Text } = Typography;
import { CloseCircleFilled } from '@ant-design/icons';

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

  const onFinish = (values) => {
    console.log("Received values:", values);
    setIsModalVisible(true);
  };


  return (
    <div className="w-[617px]  max-lg:w-full  h-[668px]  flex flex-col lg:gap-[30px]  pt-12">
      <p className="text-[48px]    w-full  h-[86px] font-normal leading text-center select-none">
        <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
      </p>

      <Form
        className=" max-lg:w-[400px]   [&_.ant-form-item-label select-none"
        name="register"
        layout="horizontal"
        labelAlign="left"
        requiredMark={false}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className="flex flex-col gap-[25px] max-sm:gap-[15px]">
          <Form.Item
            label={intl.formatMessage({
              id: LOCALE_MESSAGE_IDS.user_name,
            })}
            name="username"
            labelCol={{ span: 8, className: "form-label-custom" }}
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
              className="form-input-custom "
              allowClear={{ clearIcon: CustomClearIcon }}
              style={{ backgroundColor: "#e8f0fe", height: 60, marginLeft: 20 }}
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
              className="form-input-custom"
              allowClear={{ clearIcon: CustomClearIcon }}
              type="email"
              style={{ backgroundColor: "#e8f0fe", height: 60, marginLeft: 20 }}
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
            ]}
          >
            <Input.Password
              className="form-input-custom"
              style={{ backgroundColor: "#e8f0fe", height: 60, marginLeft: 20 }}
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
              className="form-input-custom"
              style={{ backgroundColor: "#e8f0fe", height: 60, marginLeft: 20 }}
              placeholder={intl.formatMessage({
                id: LOCALE_MESSAGE_IDS.input_placeholder_confirm_password,
              })}
            />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ marginBottom: 0 }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="w-[400px] max-lg:w-full lg:ml-[220px] max-lg:ml-[140px] max-md:ml-auto  max-sm:ml-0 btn "
            >
              <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
            </Button>
          </Form.Item>
        </div>
      </Form>

      <div className="text-left max-lg:text-right  max-sm:text-center  lg:ml-[220px]   max-sm:ml-0   w-[400px] italic font-normal size-[23px] mb-4 h-[30px] leading-[100%] tracking-0% select-none">
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
