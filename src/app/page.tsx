import Image from "next/image";
import localFont from 'next/font/local'


const roFont = localFont({
  src: './russo-one.ttf',
  display: 'swap',
  style : "normal"
})

export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col">
      <Image
          className="relative"
          src="/banner.jpg"
          alt="Next.js Logo"
          width={1674}
          height={1193}
          priority
          style={{objectFit: "contain"}}
        />
      <h1 className={roFont.className}>JUAN PABLO MELO</h1>
    </main>
  );
}
