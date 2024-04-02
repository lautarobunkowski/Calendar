import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="rounded-full border flex items-center justify-center w-11 h-11 fixed top-4 left-4 z-50"
      onClick={() => navigate(-1)}
    >
      <svg
        className="w-5 h-5 text-blue-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>
    </button>
  );
};

export default BackButton;
