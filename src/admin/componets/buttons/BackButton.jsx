import { useNavigate } from "react-router";
import { FaBackwardFast } from "react-icons/fa6";

const BackButton = ({ to = -1, className }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to === -1 && window.history.length <= 2) {
      navigate("/"); // fallback to home if no history
    } else {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center px-4 py-2 bg-primary text-white hover:bg-green-700 active:bg-gray-300 rounded-xl shadow-sm transition-all duration-200 ${className}`}
    >
      <span className="mr-2 text-xl">
        {" "}
        <FaBackwardFast />{" "}
      </span>
      {/* <span className="font-medium">{label}</span> */}
    </button>
  );
};

export default BackButton;
