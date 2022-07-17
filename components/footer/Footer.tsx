import React from 'react';
import { FooterCopy, FooterInfo, FooterInfoBox, FooterWrapper } from '$components/footer/FooterStyle';
import Image from 'next/image';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInfo>
        <Image src={'/assets/logo.png'} height={35} width={182} alt={'경상남도창원교육지원청'} />
        <FooterInfoBox>
          <div>주소 : (51439) 경상남도 창원시 성산구 중앙대로228번길 3</div>
          <div>TEL : 055-210-0500 | 주말 및 공휴일 : 055-210-0400 | FAX : 055-210-0530</div>
        </FooterInfoBox>
      </FooterInfo>
      <FooterCopy>Copyright ⓒ 경상남도창원교육지원청. All rights reserved.</FooterCopy>
    </FooterWrapper>
  );
};

export default Footer;
