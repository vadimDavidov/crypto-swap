'use client';
import DescTopFooter from './DescTopFooter';
import MobileFooter from './MobileFooter';
import getScreenStatus from '@/utils/getScreenStatus';

function Footer() {
  const mobile = getScreenStatus(800);

  return <>{mobile ? <MobileFooter /> : <DescTopFooter />}</>;
}

export default Footer;
