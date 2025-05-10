interface CardPromoProps {
  label: string
  color: string
  title: string;
  description: string
  buttonName: string
  ariaLabel: string
}

export default function ButtonSignUp({
  label,
  title,
  description,
  buttonName,
  ariaLabel,
  color
}: CardPromoProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 w-[90%] md:w-[30%]"
      style={{ boxShadow: "0px 20px 25px -5px #0000001A" }}
    >
      <div className="p-4">
        <div className={`text-xs font-medium w-fit px-2 py-1 rounded-sm`}
            style={{ color: color, backgroundColor: `${color}1A` }}
        >
          {label}
        </div>
        <h3 className="text-base font-semibold text-gray-900 leading-[110.00000000000001%] my-2">
          {title}
        </h3>
        <p className="text-xs text-gray-500">
            {description}
        </p>
      </div>
      <div className="px-4 pb-4">
        <button className="cursor-pointer w-full py-2 text-sm text-center text-[#2563EB] border-2 border-[#2563EB] rounded-lg hover:bg-[#2563EB] hover:text-white transition-colors" 
            aria-label={ariaLabel}>
          {buttonName}
        </button>
      </div>
    </div>
  );
}
