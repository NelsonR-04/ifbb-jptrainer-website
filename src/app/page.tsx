import Image from 'next/image';
import localFont from 'next/font/local'
import Banner from '../../assets/banner.jpg'
import Logo from '../../assets/logo.png'
import CsffLogo from '../../assets/logos/csff.jpg';
import EliteProLogo from '../../assets/logos/elite_pro.jpg';
import FechiffLogo from '../../assets/logos/fechiff.jpg';
// import FederationLogos from '../../components/logos';
import { FC } from "react";
import { motion } from 'framer-motion';
import InstagramIcon from '../../components/Icon/InstagramIcon';

const FederationLogos: FC<{size: number, style: any}> = ({size, style}) => {
  return (
    <div
      className="z-20 flex p-4 flex-row mt-5 self-center w-full justify-center gap-x-5"
      style={style}  
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

const roFont = localFont({
  src: './russo-one.ttf',
  display: 'swap',
  style : "normal"
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex">
        <Image
          className="absolute -z-10"
          src={Banner}
          alt="Next.js Logo"
          width={1674}
          height={1193}
          priority
          style={{objectFit: "contain"}}
        />
        <div className="flex w-full justify-end ">
          <div className="flex flex-col w-1/2 items-left" style={{paddingTop: '10vw'}}>
            <div className='flex flex-col'>
              <h1
                className={`${roFont.className} uppercase`}
                style={{fontSize: '4vw'}}
              >
                Juan Pablo Melo
              </h1>
              <h1
                className={`${roFont.className} uppercase`}
                style={{fontSize: '2.3vw', letterSpacing: '0.9vw', color: "#24c8ff"}}
              >
                Personal Trainer
              </h1>
              {/* <motion.div> */}
                <Image
                  className="z-10 flex mt-5 self-center"
                  src={Logo}
                  alt="Logo"
                  width={200}
                  height={200}
                  style={{marginLeft: '-12vw', height: '20vw', width: '20vw'}}
                />
                <span
                  className={`${roFont.className} text-center mt-10`}
                  style={{fontSize: '1.8vw', color: "#24c8ff", marginLeft: '-12vw'}}
                >
                  Pagina en construcción
                </span>
                <a href='https://www.instagram.com/ifbb_jptrainer/'>
                  <InstagramIcon color="#24c8ff"/>
                </a>
              {/* </motion.div> */}
              <div>
              </div>
            </div>
            {/* <FederationLogos size={50} style={{marginLeft: '-12vw;'}}/> */}
          </div>
        </div>
      </div>
    </main>
  );
}
