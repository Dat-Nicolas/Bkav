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
      <div className="flex w-[350px] text-[#000]  h-[31px]  gap-4">
        <div className="w-[106px] tracking-[1px]  h-[16px] leading-[100%] mr-[30px]">
          <Select
            value={language}
            onChange={(value) => setLanguage(value)}
            style={{
              width: 120,
              fontWeight: 500,
            }}

          >
            <Option value={LOCALES.ENGLISH}>English</Option>
            <Option value={LOCALES.VIETNAM}>Tiếng Việt</Option>
          </Select>
        </div>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `flex flex-col  justify-center items-center w-[99px] h-[31px]  text-[17px] leading-[100%] tracking-[1px] select-none mr-[10px] ${
              isActive ? "text-[#4461F2] font-bold" : "text-[#000] font-medium"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`flex flex-col justify-between ${isActive ? "pt-[10px] ": ""} `}>
                <p>
                  <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
                </p>
                {isActive ? (
                  <div className="w-[35px] ml-[23px] rounded-2xl mt-[10px]  border-b-2 border-[#4461F2] "></div>
                ) :
                <div className="w-[35px] ml-[23px] h-[2px]"></div>
                }
              </div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `   flex items-center  w-[74px] h-[31px]  text-[17px] leading-none tracking-[1px]  ${
              isActive ? "font-bold text-[#4461F2] " : "font-medium text-[#000]"
            }`
          }
        >
         {({ isActive }) => (
            <>
              <div className={`flex flex-col justify-between ${isActive ? "pt-[10px] ": ""} `}>
                <p>
                  <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
                </p>
                {isActive ? (
                  <div className="w-[35px] ml-[23px] rounded-2xl mt-[10px]  border-b-2 border-[#4461F2] "></div>
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
