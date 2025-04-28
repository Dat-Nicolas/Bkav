import { Button, Form, Input, Modal, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router";
import { LOCALE_MESSAGE_IDS } from "../libs/src/message";
import { FormattedMessage, useIntl } from "react-intl";
const { Text } = Typography;

const RegisterForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const intl = useIntl();

  const onFinish = (values) => {
    console.log("Received values:", values);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="w-[617px] h-[668px]  flex flex-col gap-[30px]">
      <p className="text-[48px] ml-[15px] w-full h-[86px] font-normal leading text-center">
        <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
      </p>
     
      <Form
      className="gap-[30px] [&_.ant-form-item-label"
        name="register"
        layout="horizontal"
        labelAlign="left"
        requiredMark={false}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, width: "100%" , gap : "30px" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
      <div className="flex flex-col gap-[30px]">
          <Form.Item
            label= {intl.formatMessage({
              id:LOCALE_MESSAGE_IDS.user_name
            })}
            name="username"
            labelCol={{ span: 8 }}
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
              allowClear
              style={{ backgroundColor: "#e8f0fe", height: 60 }}
              placeholder={intl.formatMessage({
                id:LOCALE_MESSAGE_IDS.input_placeholder_username
              })}
            />
          </Form.Item>
  
          <Form.Item
            label= {intl.formatMessage({
              id:LOCALE_MESSAGE_IDS.email
            })}
            name="email"
            labelCol={{ span: 8 }}
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
              allowClear
              type="email"
              style={{ backgroundColor: "#e8f0fe", height: 60 }}
              placeholder={intl.formatMessage({
                id:LOCALE_MESSAGE_IDS.input_placeholder_email
              })}
            />
          </Form.Item>
  
          <Form.Item
           label= {intl.formatMessage({
            id:LOCALE_MESSAGE_IDS.password
          })}
            name="password"
            labelCol={{ span: 8 }}
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
              style={{ backgroundColor: "#e8f0fe", height: 60 }}
              placeholder={intl.formatMessage({
                id:LOCALE_MESSAGE_IDS.input_placeholder_password
              })}
            />
          </Form.Item>
  
          <Form.Item
            label= {intl.formatMessage({
              id:LOCALE_MESSAGE_IDS.reenter_password
            })}
            name="confirmPassword"
            labelCol={{ span: 8 }}
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
              style={{ backgroundColor: "#e8f0fe", height: 60 }}
              placeholder={intl.formatMessage({
                id:LOCALE_MESSAGE_IDS.input_placeholder_confirm_password
              })}
            />
          </Form.Item>
          <Form.Item
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      >
          <Button
            type="primary"
            htmlType="submit"
            className="w-[400px] ml-[200px] btn "
          >
            <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
          </Button>
        </Form.Item>

      </div>
      </Form>

   
      <div className="text-left ml-[200px] w-[400px] italic font-normal size-[23px] mb-4 h-[30px] leading-[100%] tracking-0%">
        <Text>
          <FormattedMessage id={LOCALE_MESSAGE_IDS.already_have_account} />{" "}
          <Link to="/login">
            <FormattedMessage id={LOCALE_MESSAGE_IDS.here} />
          </Link>
        </Text>
      </div>

      <Modal
      className=""
        title={<FormattedMessage id={LOCALE_MESSAGE_IDS.verify_email_title} />}
        open={isModalVisible}
        onCancel={handleModalOk}
        onOk={handleModalOk}
        footer={[
          <Button key="ok" type="primary" onClick={handleModalOk}>
            <FormattedMessage id={LOCALE_MESSAGE_IDS.ok} />
          </Button>,
        ]}
        centered
        width={500}
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <p>
          <FormattedMessage id={LOCALE_MESSAGE_IDS.verify_email_message} />
        </p>
      </Modal>
    </div>
  );
};

export default RegisterForm;
