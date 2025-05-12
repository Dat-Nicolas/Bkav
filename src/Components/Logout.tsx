interface LogoutProps {
  isModalLogout: boolean;
  setIsModalLogout: (isOpen: boolean) => void;
  theme: "dark" | "light";
  contextHolder: React.ReactNode;
  api: any;
}

export default function Logout({
  isModalLogout,
  setIsModalLogout,
  theme,
  contextHolder,
  api,
}: LogoutProps) {
  if (!isModalLogout) return null;

  const handleLogout = () => {
    setIsModalLogout(false);
    api.success({
      message: "Đăng xuất thành công!",
      description: "Bạn đã đăng xuất khỏi hệ thống.",
      placement: "topRight",
    });

    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <div>
      {contextHolder}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setIsModalLogout(false)}
      />
      <div
        className={`fixed top-1/2 left-1/2 w-[300px] p-6 rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4">Xác nhận đăng xuất</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Bạn có chắc chắn muốn đăng xuất?
        </p>
        <div className="flex justify-end gap-3">
          <button
            className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 cursor-pointer"
            onClick={() => setIsModalLogout(false)}
          >
            Hủy
          </button>
          <button
            className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 cursor-pointer"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}
