import React from "react";

type HeroFooterItem = {
  Icon: React.FC;
  title: string;
  content: string;
};

const HeroFooterItem: React.FC<HeroFooterItem> = ({ title, Icon, content }) => {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center gap-4 md:items-start md:justify-start z-10 '>
      <Icon />
      <div className='flex font-medium text-[#78350F] text-xl self-center md:self-start'>{title}</div>
      <div className='flex font-normal text-[#78350F] text-lg self-center md:self-start'>{content}</div>
    </div>
  );
};

export default HeroFooterItem;
