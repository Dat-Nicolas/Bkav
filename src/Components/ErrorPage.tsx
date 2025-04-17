import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🚨 Oops!</h1>
      <p>Đã có lỗi xảy ra khi tải trang.</p>
      <p style={{ color: "gray" }}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
