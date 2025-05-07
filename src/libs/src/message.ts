function createKeyLocalMessageT<T extends string>(obj: Record<T, T>) {
    return obj;
  }
  
  export const LOCALE_MESSAGE_IDS = createKeyLocalMessageT({
    user_name:"user_name",
    email:"email",
    password:"password",
    reenter_password:"reenter_password",
    input_placeholder_name: "input_placeholder_name",
    input_placeholder_password: "input_placeholder_password",
    login: "login",
    forgot_password: "forgot_password",
    donot_account: "donot_account",
    here: "here",
    or: "or",
    register: "register",
    input_placeholder_username: "input_placeholder_username",
    input_placeholder_email: "input_placeholder_email",
    input_placeholder_confirm_password: "input_placeholder_confirm_password",
    already_have_account: "already_have_account",
    verify_email_title: "verify_email_title",
    verify_email_message: "verify_email_message",
    ok: "ok",
    enter_otp:"enter_otp",
    submit_otp:"submit_otp",

    // Thêm các key cho thông báo lỗi
    username_required: "username_required",
    username_or_email_required: "username_or_email_required",
    email_required: "email_required",
    email_invalid: "email_invalid",
    password_required: "password_required",
    confirm_password_required: "confirm_password_required",
    passwords_not_match: "passwords_not_match",
    dark_mode: "dark_mode",
  light_mode: "light_mode",
  });
  
  export const LOCALES = {
    ENGLISH: "EN",
    VIETNAM: "VI",
  };
  
  type LOCALEKEY = keyof typeof LOCALES;
  
  export const MESSAGES: Record<
    (typeof LOCALES)[LOCALEKEY],
    Record<keyof typeof LOCALE_MESSAGE_IDS, string>
  > = {
    [LOCALES.ENGLISH]: {
      user_name:"User name",
      email:"Email",
      password:"Password",
      reenter_password:"Re-enter password",
      input_placeholder_name: "Enter your email or username...",
      input_placeholder_password: "Enter your password",
      login: "Login",
      forgot_password: "Forgot password?",
      donot_account: "Don't have an account? register",
      here: "here !",
      or: "Or continue with",
      register: "Register",
      input_placeholder_username: "Enter your username",
      input_placeholder_email: "Enter your email",
      input_placeholder_confirm_password: "Confirm your password",
      already_have_account: "Already have an account? Login",
      verify_email_title: "Email Verification",
      verify_email_message:
        "We have sent a verification link to your email address. Please check your inbox to complete the registration.",
      ok: "OK",

      // Thông báo lỗi
      username_required: "Please enter your username!",
      username_or_email_required: "Please enter your username or email!",
      email_required: "Please enter your email address!",
      email_invalid: "Invalid email address!",
      password_required: "Please enter your password!",
      confirm_password_required: "Please confirm your password!",
      passwords_not_match: "Passwords do not match!",
      dark_mode: "Dark Mode",
    light_mode: "Light Mode",
    enter_otp:"Enter OTP",
    submit_otp:"Submit OTP",

    },
    [LOCALES.VIETNAM]: {
      user_name:"Tên tài khoản",
      email:"Địa chỉ email",
      password:"Mật khẩu",
      reenter_password:"Nhập lại mật khẩu",
      input_placeholder_name: "Tên tài khoản/Email",
      input_placeholder_password: "Mật khẩu",
      login: "Đăng nhập",
      forgot_password: "Quên mật khẩu?",
      donot_account: "Bạn chưa có tài khoản, đăng ký tại",
      here: "đây!",
      or: "Hoặc tiếp tục với",
      register: "Đăng ký",
      input_placeholder_username: "Nhập tên tài khoản",
      input_placeholder_email: "Nhập địa chỉ email",
      input_placeholder_confirm_password: "Xác nhận mật khẩu",
      already_have_account: "Đã có tài khoản? Đăng nhập tại",
      verify_email_title: "Xác thực email",
      verify_email_message:
        "Chúng tôi đã gửi một liên kết xác thực đến địa chỉ email của bạn. Vui lòng kiểm tra hòm thư của bạn để hoàn tất đăng ký.",
      ok: "OK",

      // Thông báo lỗi
      username_required: "Vui lòng nhập tên tài khoản!",
      username_or_email_required: "Vui lòng nhập tên tài khoản hoặc email!",
      email_required: "Vui lòng nhập địa chỉ email!",
      email_invalid: "Email không hợp lệ!",
      password_required: "Vui lòng nhập mật khẩu!",
      confirm_password_required: "Vui lòng xác nhận mật khẩu!",
      passwords_not_match: "Mật khẩu không khớp!",
      dark_mode: "Giao diện tối",
    light_mode: "Giao diện sáng",
    enter_otp:"Nhập OTP",
    submit_otp:"Xác nhận OTP",
    },
  };