import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <Image src={'/assets/header.png'} width={'1280px'} height={'360px'} alt={'header image'} />
    </div>
  );
};

export default Header;
