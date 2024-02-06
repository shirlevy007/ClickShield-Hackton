import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (   
    <nav>   
      {/*<div>
        <Image src="/clickshiled_logo.jpeg"  alt="site logo" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>*/}
      <Link href="/">Home</Link> 
      <Link href="/about_ClickShield">About</Link>
      <Link href="/HowToUse_ClickShield">How To Use</Link>
       
    </nav>
  );
}
 
export default Navbar;