import Link from 'next/link'
import Image from 'next/image' 
import styles from "../../src/components/stylesIndex.module.scss"

export default function Home() {
  return (
   <>
    <h1 className={styles.TitleName}>Boilerplate</h1>
    <Link href="/" passHref>
    <button >main page</button>
    </Link> 
    <Image src="/img/smile.png" width={100} height={100} alt="Picture of the author"  />
    </>
  )
}
