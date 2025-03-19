const CustomButton = ({ children }) => {
  return (
    <div className="inline-flex items-center px-4 py-1.5 border-3 border-dashed border-[#BA74FF] rounded-full text-white text-base hover:bg-[#BA74FF]/20 transition">
      {children}
    </div>
  );
};

export default CustomButton;