import Image from 'next/image';
import Picture from '../public/Share.png';

export default function Shop() {
  return (
    <div className="relative h-screen mt-32 mb-20 w-screen flex items-center justify-center overflow-hidden">
      <div className="absolute w-[1799px] h-[780px]">
        <Image
          src={Picture}
          alt="Picture"
          className='
              w-[1799px]
              h-[780px]'>
        </Image>
      </div>
    </div>
  );
}






