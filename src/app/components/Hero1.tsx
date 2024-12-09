import Image from "next/image";
import Image1 from "../public/Mask Group.png";
import Image2 from "../public/Image-living room.png";
import Image3 from "../public/bedroom.png";

export default function Hero1() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#111111]">Browse The Range</h2>
        <p className="text-[#111111] mt-2 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {/* Dining Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Image
            src={Image1}
            alt="Image 1"
            className="  w-[270px]  h-[270px] pxrounded-lg"/>
          
          <h3 className="text-lg font-semibold  text-[#333333] text-center">Dining</h3>
        </div>

        {/* Living Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Image
            src={Image2}
            alt="Image 2"
            className=" w-full  h-[200px] rounded-lg object-cover"
            
          />
          <h3 className="text-lg font-semibold  text-[#333333] text-center">Living</h3>
        </div>

        {/* Bedroom Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Image
            src={Image3}
            alt="Image 3"
            width-full
            height-200px
            className="rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold text-[#333333] text-center">Bedroom</h3>
        </div>
      </div>
    </div>
  );
} 
       








