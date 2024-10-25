import React from "react";

const FeatureShapes: React.FC = () => {
  return (
    <div className='absolute items-start self-start flex-wrap min-h-[800px] bg-transparent z-0'>
      {/* Pink Rounded Square */}
      <div className='absolute w-[200px] h-[200px] sm:w-[271px] sm:h-[271px] left-[-35px] top-[50px] sm:top-[176px] bg-[#BE185D] opacity-75 rounded-[50px] hidden sm:block z-0'></div>

      {/* Blue Square */}
      <div className='absolute w-[120px] h-[120px] sm:w-[161px] sm:h-[161px] left-[120px] sm:left-[422px] top-[-20px] sm:top-[-31px] bg-[#0369A1] opacity-75 rounded-[50px] z-0'></div>

      {/* Amber Square */}
      <div className='absolute w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] left-[240px] sm:left-[721px] top-[150px] sm:top-[294px] bg-[#B45309] opacity-75 rounded-[30px] z-0'></div>

      {/* Fuchsia Square */}
      <div className='absolute w-[150px] h-[150px] sm:w-[202px] sm:h-[202px] left-[700px] sm:left-[982px] top-[220px] sm:top-[294px] bg-[#A21CAF] opacity-75 rounded-[30px] hidden sm:block z-0'></div>

      {/* Green Square */}
      <div className='absolute w-[160px] h-[160px] sm:w-[232px] sm:h-[232px] left-[150px] sm:left-[1091px] top-[10px] sm:top-[33px] bg-[#15803D] opacity-75 rounded-[50px] hidden md:block z-0'></div>
    </div>
  );
};

export default FeatureShapes;
