import Image from "next/image";
import backgroundImg from "../public/scandinavian-interior-mockup-wall-decal-background 1.png"; 

export default function Hero() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src={backgroundImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Card */}
      <div className="bg-white w-[80%] sm:w-[60%] md:w-[55%]  lg:w-[50%] xl:w-[40%] shadow-lg rounded-xl p-8 mt-[40px] ml-[420px]">
        <p className="text-[#111111] text-sm font-bold uppercase ">
          New Arrival
        </p>
        <h1 className=" text-[#B88E2F] text-6xl  font-bold mt-2 mb-4 leading-snug">
          Discover Our New Collection
        </h1>
        <p className="w-[450px] h-[50px]  text-[#111111] mb-6 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white py-3 px-9 shadow-md text-sm uppercase font-semibold hover:bg-[#b89144]">
          Buy Now
        </button>
      </div>
    </div>
  );
}



