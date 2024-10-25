import React from "react";

const WindowShapes: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center mx-4 my-4 md:mx-20 md:justify-start md:items-start z-0'>
      {/* Flex Container for Shapes and Video */}
      <div className='relative flex items-center justify-center flex-wrap w-full z-0'>
        {/* Yellow Rectangle */}
        {children ? <div className='z-10'>{children}</div> : <></>}
        <div className='absolute w-[400px] h-[130px] md:w-[670px] md:h-[220px] bg-[#FDE68A] transform rotate-[-45deg] opacity-90 top-2 left-10 md:top-20 md:-left-20 z-0'></div>

        {/* Blue Circle */}
        <div className='absolute w-[30px] h-[30px] md:w-[60px] md:h-[60px] bg-[#0369A1] opacity-75 rounded-full -top-20 right-20 md:-top-16 md:-right-18 z-0'></div>

        {/* Brown Square */}
        <div className='absolute w-[60px] h-[60px] md:w-[90px] md:h-[90px] bg-[#B45309] opacity-75 rounded-[30px] top-6 -left-4 md:top-18 md:-left-4 z-0'></div>

        {/* Green Circle */}
        <div className='absolute w-[50px] h-[50px] md:w-[85px] md:h-[85px] bg-[#15803D] opacity-75 rounded-full left-28 top-72 md:top-[300px] md:left-28 z-30'></div>

        {/* Pink Rounded Rectangle */}
        <div className='absolute w-[120px] h-[120px] md:w-[220px] md:h-[220px] bg-[#BE185D] opacity-75 rounded-[50px] top-60 left-[400px] md:top-64 md:left-[420px] z-0'></div>

        {/* Pink Square */}
        <div className='absolute w-[40px] h-[40px] md:w-[74px] md:h-[74px] bg-[#A21CAF] opacity-75 rounded-[30px] top-[300px] left-[380px] md:top-80 md:left-[400px] z-0'></div>
      </div>
    </div>
  );
};

export default WindowShapes;
