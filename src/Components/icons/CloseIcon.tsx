
export default function CloseIcon() {
  return (
    <div className="cursor-pointer hover:bg-gray-300 rounded-2xl">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="#222222"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#222222"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
