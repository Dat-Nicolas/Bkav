import { useState } from "react";
import { Modal, notification } from "antd";
import { useNavigate } from "react-router";

interface ModalFormProps {
  titlebtn: string;
  titlemodal: string;
  modaltext: string;
  icon?: React.ReactNode;
  className?: string;
  classNameModal?: string;
}

export default function ModalForm({
  titlebtn,
  titlemodal,
  modaltext,
  icon,
  className,
  classNameModal,
}: ModalFormProps) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const navigator = useNavigate();
const [api, contextHolder] = notification.useNotification();
  const showModal = () => {
    console.log("Opening modal");
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    api.success({
      message: "Đăng xuất thành công!",
      description: "Hẹn gặp lại.",
      placement: "topRight",
    });
    setTimeout(() => {
      setConfirmLoading(false);
      setOpen(false);
      navigator("/login")
    }, 1000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className={`custom-modal-btn flex w-[230px]  ${className ?? ""}`}
        onClick={showModal}
      >
        {contextHolder}
        {icon && icon}
        {titlebtn}
      </div>
      <Modal
        className={classNameModal}
        title={titlemodal}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <button
            key="cancel"
            onClick={handleCancel}
            className="bg-blue-500 text-white px-4 py-1 rounded mr-4 hover:bg-blue-400 cursor-pointer"
          >
            Hủy bỏ
          </button>,
          <button
            key="ok"
            onClick={handleOk}
            className=" text-white border bg-red-500 px-4 py-1 rounded  hover:bg-red-400 cursor-pointer"
          >
            Đồng ý
          </button>,
        ]}
      >
        <p>{modaltext}</p>
      </Modal>
    </div>
  );
}
