import skylineImage from "@/assets/skyline.png";

const RotatingSkyline = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rotate-skyline">
          <img 
            src={skylineImage} 
            alt="City Skyline" 
            className="w-96 h-24 object-contain opacity-30"
          />
        </div>
      </div>
    </div>
  );
};

export default RotatingSkyline;