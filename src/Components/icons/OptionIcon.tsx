export default function OptionIcon() {
    return (
      <div className="group rotate-90 p-1 rounded-2xl hover:bg-gray-200 cursor-pointer text-gray-700 hover:text-blue-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="6"
            cy="12"
            r="1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="18"
            cy="12"
            r="1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }
  