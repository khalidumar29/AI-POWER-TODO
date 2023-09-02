import Image from "next/image";
import { lazy } from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <Image
        src='https://links.papareact.com/c2cdd5'
        alt='AI Power Todo Apps'
        width={300}
        height={100}
        priority={false}
        className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
      />
    </header>
    /** https://links.papareact.com/c2cdd5 */
  );
}
