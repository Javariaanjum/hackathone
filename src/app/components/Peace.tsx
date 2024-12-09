import Image from 'next/image';
import Image1 from '../public/Image.png';
import Image2 from '../public/Rectangle.png';

export default function Peace() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-2 gap-0 h-screen">
        <div className="bg-gray-200 flex items-center justify-center">
          <div className="px-12">
            <h1 className="text-5xl font-bold mb-6">50+ Beautiful rooms inspiration</h1>
            <p className="text-lg text-gray-600 w-[368px] h-[84px] mt-10">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-5 rounded-md">
              Explore More
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full h-full flex items-center overflow-hidden">
              <div className="flex gap-4">
                <div className="w-[393px] h-[582px] relative">
                  <Image
                    src={Image1}
                    alt="Image1"
                    className="object-cover w-full h-full"
                  />
               
                  </div>
                </div>
                <div className="w-[372px] h-[486px]">
                  <Image
                    src={Image2}
                    alt="Image2"
                    className="object-cover w-full h-full"
                  />

<div className="flex items-center space-x-4 ml-10 mt-10">
  
  <div className="w-6 h-6 rounded-full border-2 border-yellow-500 flex items-center justify-center">
    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
  </div>

  <div className="w-6 h-6 rounded-full border-2  bg-gray-300 border-gray-300"></div>
  <div className="w-6 h-6 rounded-full border-2  bg-gray-300 border-gray-300"></div>
  <div className="w-6 h-6 rounded-full border-2  bg-gray-300 border-gray-300"></div>
  
</div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
   
  
  );
}