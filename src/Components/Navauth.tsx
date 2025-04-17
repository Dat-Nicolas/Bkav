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
    <div className="flex justify-center">
      <div className="flex items-center justify-center w-85  h-8 gap-4">
        {/* Language Selector */}
        <div className="flex items-center max-w-26  h-4">
          <Select
            value={language}
            onChange={(value) => setLanguage(value)}
            style={{ width: 120 }}
          >
            <Option value={LOCALES.ENGLISH}>English</Option>
            <Option value={LOCALES.VIETNAM}>Tiếng Việt</Option>
          </Select>
        </div>

        {/* Login Link */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `flex flex-col justify-center items-center w-25 h-8 font-medium text-[17px] leading-none tracking-[0.06em] ${
              isActive ? "text-[#4461F2]" : "text-black"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>
                {" "}
                <FormattedMessage id={LOCALE_MESSAGE_IDS.login} />
              </p>
              {isActive && (
                <div className="w-9 border-b-2 border-[#4461F2] "></div>
              )}
            </>
          )}
        </NavLink>

        {/* Signup Link */}
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `flex flex-col justify-center items-center w-20 h-8 font-medium text-[17px] leading-none tracking-[0.06em] ${
              isActive ? "text-[#4461F2]" : "text-black"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>
                {" "}
                <p>
                  {" "}
                  <FormattedMessage id={LOCALE_MESSAGE_IDS.register} />
                </p>
              </p>
              {isActive && (
                <div className="w-9 border-b-2 border-[#4461F2]"></div>
              )}
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
}
