import { NavLink } from "react-router";
import { Select } from "antd";
import { LOCALE_MESSAGE_IDS } from "../libs/src/message";
import { LOCALES } from "../libs/src/message";
import { useLanguage } from "../main";
import { FormattedMessage } from "react-intl";

const { Option } = Select;
export default function Navauth() {
  const { language, setLanguage } = useLanguage();
  return (
      <div className="flex w-[338px] h-[31px] gap-4">
        {/* Language Selector */}
        <div className="w-[106px] h-[16px]">
          <Select
          className="ant-select "
            value={language}
            onChange={(value) => setLanguage(value)}
            style={{ width: 106 , fontSize: 17 }}

          >
            <Option value={LOCALES.ENGLISH}>English</Option>
            <Option value={LOCALES.VIETNAM}>Tiếng Việt</Option>
          </Select>
        </div>

        {/* Login Link */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `flex flex-col  justify-center items-center w-[99px] h-[31px] font-medium text-[17px] leading-none tracking-[0.06em] ${
              isActive ? "text-[#4461F2] " : "text-[#000]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="flex flex-col justify-between">
                <p>
                  <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
                </p>
                {isActive ? (
                  <div className="w-[35px] ml-[23px] rounded-2xl  border-b-2 border-[#4461F2] "></div>
                ) :
                <div className="w-[35px] ml-[23px] h-[2px]"></div>
                }
              </div>
            </>
          )}
        </NavLink>

        {/* Signup Link */}
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `   flex items-center  w-[74px] h-[31px] font-medium text-[17px] leading-none tracking-[0.06em] ${
              isActive ? "text-[#4461F2]" : "text-[#000]"
            }`
          }
        >
         {({ isActive }) => (
            <>
              <div className="flex flex-col justify-between">
                <p>
                  <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
                </p>
                {isActive ? (
                  <div className="w-[35px] ml-[23px] rounded-2xl  border-b-2 border-[#4461F2] "></div>
                ) :
                <div className="w-[35px] ml-[23px] h-[2px]"></div>
                }
              </div>
            </>
          )}
        </NavLink>
      </div>
  );
}
