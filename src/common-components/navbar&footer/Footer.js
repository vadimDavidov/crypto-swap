'use client';
import DescTopFooter from './DescTopFooter';
import MobileFooter from './MobileFooter';
import { useState, useEffect } from 'react';

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const widthBreakPoint = 800;

  const changeStatus = () => {
    if (window.innerWidth < widthBreakPoint) {
      setIsMobile(true);
    }
    if (window.innerWidth > widthBreakPoint) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const onRecize = () => changeStatus();
    window.addEventListener('resize', onRecize);
    window.removeEventListener('resize', onRecize);
  }, [widthBreakPoint, isMobile]);

  useEffect(() => {
    changeStatus();
  }, [widthBreakPoint, isMobile]);

  return <>{isMobile ? <MobileFooter /> : <DescTopFooter />}</>;
}

export default Footer;
