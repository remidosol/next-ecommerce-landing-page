import React from "react";

const WindowShapes: React.FC = () => {
  return (
    <div className='absolute bg-transparent z-0'>
      {/* Pink Rounded Rectangle */}
      <div className='absolute w-[218px] h-[218px] left-[1100px] top-[314px] bg-[#BE185D] opacity-75 rounded-[50px] z-0'></div>

      {/* Yellow Rectangle */}
      <div className='absolute w-[666.28px] h-[217.93px] left-[605px] top-[410.95px] bg-[#FDE68A] transform rotate-[-45deg] z-0'></div>

      {/* Brown Square */}
      <div className='absolute w-[90px] h-[90px] left-[660px] top-[98px] bg-[#B45309] opacity-75 rounded-[30px] z-0'></div>

      {/* Blue Circle */}
      <div className='absolute w-[59px] h-[60px] left-[1118px] top-[-15px] bg-[#0369A1] opacity-75 rounded-full z-0'></div>

      {/* Green Circle */}
      <div className='absolute w-[85px] h-[86px] left-[750px] top-[373px] bg-[#15803D] opacity-75 rounded-full z-10'></div>

      {/* Pink Square */}
      <div className='absolute w-[74px] h-[74px] left-[1063px] top-[393px] bg-[#A21CAF] opacity-75 rounded-[30px] z-0'></div>
    </div>
  );
};

export default WindowShapes;
