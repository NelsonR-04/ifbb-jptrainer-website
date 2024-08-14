"use client"
import Image from 'next/image';
import localFont from 'next/font/local'
import Banner from '../../assets/banner.png'
import BannerMobile from '../../assets/banner-mobile.png'
import Logo from '../../assets/logo.png'
import InstagramIcon from '../Icon/InstagramIcon';
import { useMediaQuery } from 'react-device-sizes';

const roFont = localFont({
  src: '../../fonts/russo-one.ttf',
  display: 'swap',
  style : "normal"
})

export default function MainPage() {
  const isMobileDevice = useMediaQuery({ maxWidth: 480 })
  return (
    <div className="flex">
      {isMobileDevice
        ? (
          <Image
            className="absolute -z-10"
            src={BannerMobile}
            alt="Banner"
            width={1674}
            height={1193}
            priority
            style={{objectFit: "contain"}}
          />
        ) : (
          <Image
            className="absolute -z-10"
            src={Banner}
            alt="Banner"
            width={1674}
            height={1193}
            priority
            style={{objectFit: "contain"}}
          />
        )}
        {isMobileDevice
        ? (
          <div className="flex w-full justify-center ">
            <div className="flex flex-col items-left" style={{paddingTop: '10vw'}}>
              <div className='flex flex-col justify-between'>
                <h1
                  className={`${roFont.className} uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
                  style={{fontSize: '8vw'}}
                >
                  Juan Pablo Melo
                </h1>
                <h1
                  className={`${roFont.className} uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
                  style={{fontSize: '6vw', letterSpacing: '0.9vw', color: "#24c8ff"}}
                >
                  Personal Trainer
                </h1>
                {/* <motion.div> */}
                  <Image
                    className="z-10 flex mt-2 self-center"
                    src={Logo}
                    alt="Logo"
                    width={200}
                    height={200}
                    style={{height: '15vw', width: '15vw'}}
                  />
                {/* </motion.div> */}
                <div className='flex flex-col'>
                  <span
                    className={`${roFont.className} text-center mt-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
                    style={{fontSize: '3.8vw', color: "#24c8ff"}}
                  >
                    Pagina en construcción
                  </span>
                  <div className='flex justify-center gap-5'>
                    <button 
                      className="flex justify-center items-center text-white font-bold py-2 px-4 rounded-full" 
                      style={{color: 'white', backgroundColor: '#05889e', maxWidth: '150px', columnGap: '10px', fontSize: '1.2vw'}}
                    >
                      <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{fontSize: '2.8vw'}}>Instagram</span>
                      <InstagramIcon style={{height: '3vw', width: '3vw'}} color="white"/>
                    </button>
                    <button 
                      className="flex justify-center items-center text-white font-bold py-2 px-4 rounded-full" 
                      style={{color: 'white', backgroundColor: '#05889e', maxWidth: '150px', columnGap: '10px', fontSize: '1.2vw'}}
                    >
                      <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{fontSize: '2.8vw'}}>WhatsApp</span>
                      <InstagramIcon style={{height: '3vw', width: '3vw'}} color="white"/>
                    </button> 
                  </div>
                  <a href='https://www.instagram.com/ifbb_jptrainer/'>
                  </a>
                </div>
              </div>
              <div>
  
              </div>
              {/* <FederationLogos size={50} style={{marginLeft: '-12vw;'}}/> */}
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-end ">
            <div className="flex flex-col w-1/2 items-left" style={{paddingTop: '10vw'}}>
              <div className='flex flex-col justify-between'>
                <h1
                  className={`${roFont.className} uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
                  style={{fontSize: '4vw'}}
                >
                  Juan Pablo Melo
                </h1>
                <h1
                  className={`${roFont.className} uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
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
                    style={{marginLeft: '-12vw', height: '8vw', width: '8vw'}}
                  />
                {/* </motion.div> */}
                <div className='flex flex-col' style={{marginLeft: '-12vw'}}>
                  <span
                    className={`${roFont.className} text-center mt-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
                    style={{fontSize: '1.8vw', color: "#24c8ff"}}
                  >
                    Pagina en construcción
                  </span>
                  <div className='flex justify-center pt-2 gap-5'>
                    <button 
                      className="flex justify-center items-center text-white font-bold py-2 px-4 rounded-full" 
                      style={{color: 'white', backgroundColor: '#05889e', maxWidth: '200px', columnGap: '10px', fontSize: '1.2vw'}}
                    >
                      <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Instagram</span>
                      <InstagramIcon style={{height: '1.5vw', width: '1.5vw'}} color="white"/>
                    </button>
                    <button 
                      className="flex justify-center items-center text-white font-bold py-2 px-4 rounded-full" 
                      style={{color: 'white', backgroundColor: '#05889e', maxWidth: '200px', columnGap: '10px', fontSize: '1.2vw'}}
                    >
                      <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>WhatsApp</span>
                      <InstagramIcon style={{height: '1.5vw', width: '1.5vw'}} color="white"/>
                    </button> 
                  </div>
                  <a href='https://www.instagram.com/ifbb_jptrainer/'>
                  </a>
                </div>
              </div>
              <div>

              </div>
              {/* <FederationLogos size={50} style={{marginLeft: '-12vw;'}}/> */}
            </div>
          </div>
        )}
    {/* <Footer/> */}
    </div>
  );
}
