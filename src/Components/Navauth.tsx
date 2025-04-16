import { NavLink } from 'react-router'; // Use NavLink instead of Link
import { Select } from 'antd';

const { Option } = Select;

export default function Navauth() {
  return (
  <div className='flex justify-center'>
      <div className="flex items-center justify-center w-85  h-8 gap-4">
        {/* Language Selector */}
        <div className="flex items-center max-w-26  h-4">
          <Select defaultValue="vi" style={{ width: 120 }}>
            <Option value="vi">Tiếng Việt</Option>
            <Option value="en">English</Option>
          </Select>
        </div>
  
        {/* Login Link */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `flex flex-col justify-center items-center w-25 h-8 font-medium text-[17px] leading-none tracking-[0.06em] ${
              isActive ? 'text-[#4461F2]' : 'text-black'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>Đăng nhập</p>
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
              isActive ? 'text-[#4461F2]' : 'text-black'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <p>Đăng ký</p>
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