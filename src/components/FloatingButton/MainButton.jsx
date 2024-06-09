import Menu from "/icons/Menu.svg";

const MainButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      bg-primary-blue w-12 h-12 text-white 
      rounded-full shadow-lg flex items-center 
      justify-center ml-3 focus:outline-none"
  >
    <img src={Menu} alt="Menu Icon" className="w-5 h-5" />
  </button>
);

export default MainButton;
