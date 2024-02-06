import Image from 'next/image'
import styles from '../styles/Logo.module.css'


const Logo = () => {
  return (    
      <div className="logo">
        <Image src="/clickshiled_logo.jpeg" alt="site logo" width={300} height={400} className={styles.img}/>
      </div>     
  );
}

export default Logo;