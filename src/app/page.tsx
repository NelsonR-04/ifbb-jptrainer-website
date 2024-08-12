import Image from 'next/image';
import localFont from 'next/font/local'
import Banner from '../../assets/banner.jpg'
import Logo from '../../assets/logo.png'
import FederationLogos from '../../components/logos';


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
            <Image
              className="z-10 flex mt-5 self-center"
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              style={{marginLeft: '-12vw'}}
            />
          {/* <FederationLogos size={80}/> */}
          </div>
        </div>
      </div>
    </main>
  );
}
