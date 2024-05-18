import React from 'react'

interface IBadge{
  title:string
}

export default function InfoBadge(props:IBadge) {
  const {title} = props;

  return (
    <div className="w-auto inline-block px-[1rem] py-[0.5rem] rounded-[4px] bg-orange-10 text-orange-100"><p className='head6'>{title}</p></div>
  );
}
