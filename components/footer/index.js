import Link from 'next/link';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import KnowMore from '../homeComponents/knowMoreForm'
// styles
import styles from './footer.module.scss'

export default function Footer({dark}) {
  return (
    <footer className={styles.footer}>
      <KnowMore />
      <div className={styles.links}>
        <Link href="/">
          <img className={styles.logo} src='logo-white.svg' alt='logo' />
        </Link>
        <div className={styles.routes}>
          <Link href="/about">
            <a className={styles.menuItem}>About Us</a>
          </Link>
          <Link href="/product">
            <a className={styles.menuItem}>Product</a>
          </Link>
          <Link href="/expertise">
            <a className={styles.menuItem}>Expertise</a>
          </Link>
          <Link href="/Articles">
            <a className={styles.menuItem}>Articles</a>
          </Link>
          <Link href="/contact">
            <a className={styles.menuItem}>Contact Us</a>
          </Link>
        </div>
        <div className={styles.social}>
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
      <div className={styles.info}>
        <p>©Copyright 2021. AI Labs All Rights Reserved.</p>
        <p>Company Registration Number:- 11015117 VAT Registration Number:- 285372477.</p>
        <div>
          <p>Terms of service</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </footer>
  )
}
