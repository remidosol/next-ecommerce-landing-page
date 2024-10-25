type PropType = {
  image: React.ReactNode;
};

export default function MarkerWithImage({ image }: PropType) {
  return (
    <div className='relative flex flex-col justify-center items-center w-64 h-48 right-[1000px] bottom-48 isolate z-0'>
      {/* Picture Container */}
      <div className='flex justify-center items-center w-64 h-48 border-5 border-white bg-cover bg-center shadow-md rounded-md z-20'>
        {image}
      </div>

      {/* Tooltip-Toogletip */}
      <div className='absolute bottom-[-68px] w-[250px] h-16 bg-gray-300 shadow-lg rounded-md flex items-start p-0 z-10'>
        <div className='p-4 text-sm font-normal text-[#0F172A]'>
          Emma Simpson collected one pair of <strong>Cool Shoes</strong>.
        </div>
        <div className='absolute clip_square_diagonal left-[47%] transform rotate-0 bottom-[-8px] w-4 h-4 bg-[#E2E8F0]'></div>
      </div>

      {/* Ellipse 29 */}
      <div className='absolute w-8 left-28 top-[250px] h-8 rounded-full border-[3px] border-[#A3E635] bg-[#D9F99D] z-0'></div>
    </div>
  );
}
