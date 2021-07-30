import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header({dark}) {
  return (
    <header className={dark ? styles.headerWhite : styles.header}>
      <Link href="/">
        <img className={styles.logo} src={dark ? '/logo-white.svg' : '/logo.svg'} alt='logo' />
      </Link>
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
        <Link href="/articles">
          <a className={styles.menuItem}>Articles</a>
        </Link>
        <Link href="/contact">
          <a className={styles.menuItem}>Contact Us</a>
        </Link>
      </div>
    </header>
      )
}
