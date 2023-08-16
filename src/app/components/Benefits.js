import lang from '../images/lang.png';
import Image from "next/image";

export default function Benefits() {
  return (
    <div className='flex justify-between dark:bg-black p-4 items-center'>
      <div className='text-white'>
        <h2 className='font-bold text-3xl'>Unleash the Benefits of Access</h2>
        <p>Learn how we simplify your life with coding.</p>
      </div>
      <Image src={lang} alt="programming-languages" />
    </div>
  )
}
