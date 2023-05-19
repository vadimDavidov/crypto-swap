'use client';
import DescTopFooter from './DescTopFooter';
import MobileFooter from './MobileFooter';
import screenStatus from '@/utils/screenStatus';

function Footer() {
  const mobile = screenStatus(800);

  return <>{mobile ? <MobileFooter /> : <DescTopFooter />}</>;
}

export default Footer;
