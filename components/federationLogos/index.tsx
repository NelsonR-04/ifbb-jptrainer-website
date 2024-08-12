import Image from "next/image";
import CsffLogo from '../../assets/logos/csff.jpg';
import EliteProLogo from '../../assets/logos/elite_pro.jpg';
import FechiffLogo from '../../assets/logos/fechiff.jpg';
import { FC } from "react";

const FederationLogos: FC<{size: number}> = ({size}) => {
  return (
    <div 
      className="z-20 flex flex-row self-center w-full justify-center gap-x-5"
    >
      <Image
        className="rounded-xl"
        src={CsffLogo}
        alt="csff"
        width={size}
        height={size}
      />
      <Image
        className="rounded-md"
        src={EliteProLogo}
        alt="elite_pro"
        width={size}
        height={size}
      />
      <Image
        className="rounded-md"
        src={FechiffLogo}
        alt="fechiff"
        width={size}
        height={size}
      />
    </div>
  )
}

export default FederationLogos