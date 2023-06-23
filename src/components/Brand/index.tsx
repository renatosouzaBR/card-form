import Image from "next/image";

import { BrandContainer } from "./styles";

import visaLogo from '@/assets/visa-logo.png';
import masterLogo from '@/assets/master-logo.png';
import eloLogo from '@/assets/elo-logo.png';

interface BrandProps {
  cardNumber: string;
}

const VISA_REGEX = /^4[0-9]{6,}$/;
const MASTER_REGEX = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;

export function Brand({ cardNumber }: BrandProps) {
  function creditCardFlag(cardNumber: string) {
    if (!cardNumber) return null;

    const onlyNumbers = cardNumber.replace(/\D/g, '').substring(0, 8);

    if (onlyNumbers.match(VISA_REGEX)) {
      return <Image 
        src={visaLogo.src} 
        width={visaLogo.width} 
        height={visaLogo.height}
        alt="" 
      />
    }
    
    if (onlyNumbers.match(MASTER_REGEX)) {
      return <Image
        src={masterLogo.src}
        width={masterLogo.width}
        height={masterLogo.height}
        alt=""
      />
    }

    return <Image
      src={eloLogo.src}
      width={eloLogo.width}
      height={eloLogo.height}
      alt=""
    />
  }

  return (
    <BrandContainer>
      {creditCardFlag(cardNumber)}
    </BrandContainer>
  )
}