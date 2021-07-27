import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src='/logo.svg' alt='logo' />
      <div className={styles.links}>
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
    </header>
      )
}
