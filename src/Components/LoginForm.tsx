import { Form, Input, Button, Typography } from "antd";
import google from "../assets/images/Gg-Icon.jpg";
import facebook from "../assets/images/Fb-Icon.jpg";
import apple from "../assets/images/Apple.png";
const { Text } = Typography;
import { Link } from "react-router";
import { LOCALE_MESSAGE_IDS } from "../libs/src/message";
import { FormattedMessage, useIntl } from "react-intl";

// const onFinish = (values) => {
//   console.log("Received values:", values);
// };

export default function LoginForm() {
  const intl = useIntl();
  return (
    <div className="sm:w-150 min-w-[600px] sm:h-175 h-full w-full max-sm:px-3 flex flex-col gap-[30px]">
      <p className="text-[48px] font-normal leading text-center text-12">
        <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
      </p>
      <Form
        name="login"
        className="flex flex-col gap-5"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
      >
        <div className="w-full h-20">
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
              type="text"
              className="w-full h-15"
              tabIndex={1}
              placeholder={intl.formatMessage({
                id: LOCALE_MESSAGE_IDS.input_placeholder_name,
                defaultMessage: "Enter your email or username...",
              })}
            />
          </Form.Item>
        </div>

        <div  className="w-full h-20">
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
            className="w-full h-15"
              tabIndex={1}
              placeholder={intl.formatMessage({
                id: LOCALE_MESSAGE_IDS.input_placeholder_password,
                defaultMessage: "Enter your password",
              })}
            />
          </Form.Item>
        </div>

        <div className="text-right">
          <Link to="#">
            <FormattedMessage id={LOCALE_MESSAGE_IDS.forgot_password} />
          </Link>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
          >
            <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
          </Button>
        </Form.Item>
      </Form>

      <div className="text-right w-full italic font-normal size-[23px] mb-4 h-[30px] leading-[100%] tracking-0%">
        <Text>
          <FormattedMessage id={LOCALE_MESSAGE_IDS.donot_account} />{" "}
          <Link to="/signup">
            <FormattedMessage id={LOCALE_MESSAGE_IDS.here} />
          </Link>
        </Text>
      </div>

      {/* Social Login */}
      <div className="text-center">
        <div className="flex flex-col justify-center gap-10">
          <div className="w-full flex items-center">
            <div className="flex-1 flex w-full h-[1px] border-t-1 border-[#DFDFDF]"></div>
            <div className="px-5">
              <FormattedMessage id={LOCALE_MESSAGE_IDS.or} />
            </div>
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
