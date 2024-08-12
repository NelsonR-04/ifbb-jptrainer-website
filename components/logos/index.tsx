import Image from "next/image";
import CsffLogo from '../../assets/logos/csff.jpg';
import EliteProLogo from '../../assets/logos/elite_pro.jpg';
import FechiffLogo from '../../assets/logos/fechiff.jpg';
import { FC } from "react";

const FederationLogos: FC<{size: number}> = ({size}) => {
  return (
    <div className="z-20 flex mt-5 self-center" style={{marginLeft: '-12vw'}}>
      <Image
        className="rounded-md"
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